///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {Component, OnInit} from 'angular2/core';
import {MyService} from '../services/my-service';
import {MyPipe} from '../pipes/my-pipe';
import {GithubUser} from '../services/github-user';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-list',
    bindings: [MyService],
    pipes: [MyPipe],
    template: `<ul><li *ngFor="#user of users">{{ user.login | capitalizeWords }}</li></ul>`,
    styles: [`
        :host {
            font-family: 'Arial';
            display: flex;
            width: 100%;
            height: 100%;
        }
    `]
})
export class MyList implements OnInit {
    users:Array<GithubUser>;
    service:MyService;

    constructor(service:MyService) {
        this.service = service;
    }

    ngOnInit() {
        this.service
            .getUsers(5)
            .subscribe(
                users => this.users = users
            );
    }
}
