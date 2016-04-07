///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Inject} from "angular2/core";

export class MyService {
    http:Http;

    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }

    getUsers(since:number):Observable<any> {
        var url:string = 'https://api.github.com/users';

        if (since) url = 'https://api.github.com/users?since=' + since;

        return this.http.get(url).map(response => response.json());
    }
}
