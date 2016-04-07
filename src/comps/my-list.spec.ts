/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {
    it,
    describe,
    expect,
    TestComponentBuilder,
    injectAsync,
    setBaseTestProviders,
    beforeEachProviders
} from "angular2/testing";
import {MyList} from "./my-list";
import {Component, provide} from "angular2/core";
import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS} from "angular2/platform/testing/browser";
import {HTTP_PROVIDERS, XHRBackend, ResponseOptions, Response} from "angular2/http";
import {MockBackend, MockConnection} from "angular2/src/http/backends/mock_backend";
import {MyService} from "../services/my-service";
import "rxjs/add/operator/map";

@Component({
    template: '<my-list></my-list>',
    directives: [MyList]
})
class TestMyList {}

describe('MyList Tests', () => {
    setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            MyService
        ]
    });

    it('Should create a component MyList',
        injectAsync([XHRBackend, MyService, TestComponentBuilder], (backend, service, tcb) => {
            backend.connections.subscribe(
                (connection:MockConnection) => {
                    var options = new ResponseOptions({
                        body: [
                            {
                                "login": "mojombo",
                                "id": 1,
                                "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
                                "gravatar_id": "",
                                "url": "https://api.github.com/users/mojombo",
                                "html_url": "https://github.com/mojombo",
                                "followers_url": "https://api.github.com/users/mojombo/followers",
                                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                                "repos_url": "https://api.github.com/users/mojombo/repos",
                                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                                "type": "User",
                                "site_admin": false
                            }
                        ]
                    });

                    var response = new Response(options);

                    connection.mockRespond(response);
                }
            );

            return tcb
                .createAsync(TestMyList)
                .then((fixture) => {
                    fixture.detectChanges();
                    var compiled = fixture.debugElement.nativeElement;

                    expect(compiled.innerHTML).toContain('Mojombo');
                });
        })
    );
});
