import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MyList} from "./comps/my-list";

@Component({
    selector: 'my-app',
    template: '<my-list></my-list>',
    directives: [MyList]
})
class VgDemo {
    constructor() {

    }
}

bootstrap(VgDemo);
