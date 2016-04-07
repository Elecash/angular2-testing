/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {it, describe, expect, beforeEachProviders, inject} from "angular2/testing";
import {Response, XHRBackend, ResponseOptions, HTTP_PROVIDERS} from "angular2/http";
import {MyService} from "./my-service";
import {MockConnection, MockBackend} from "angular2/src/http/backends/mock_backend";
import {provide} from "angular2/core";

describe('MyService Tests', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            MyService
        ]
    });

    it('Should create a component MyList',
        inject([XHRBackend, MyService], (backend, service) => {
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

            service.getUsers().subscribe(
                (users) => {
                    expect(users[0].login).toBe('mojombo');
                }
            );

            service.getUsers(5).subscribe(
                (users) => {
                    expect(users[0].login).toBe('mojombo');
                }
            );
        })
    );
});
