import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyList} from "./my-list";
import {MyService} from "../services/my-service";

describe('MyList Component', () => {
    let list:MyList;
    let service:MyService = new MyService();

    beforeEach(() => {
        list = new MyList(service);
    });

    it('Should get 5 animals', () => {
        list.ngOnInit();

        expect(list.items.length).toBe(5);
        expect(list.items).toEqual(['cat', 'dog', 'elephant', 'lion', 'duck']);
    });
});
