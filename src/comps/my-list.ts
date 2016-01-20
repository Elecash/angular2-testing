import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-list',
    template: `<ul><li *ngFor=""></li></ul>`,
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
    constructor() {

    }

    ngOnInit() {

    }
}
