import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyList} from "./my-list";
import {MyService} from "../services/my-service";

describe('MyList Tests', () => {
    let list:MyList;
    let service:MyService = new MyService();

    beforeEach(() => {
        list = new MyList(service);
    });

    it('Should get 5 dogs', () => {
        list.ngOnInit();

        expect(list.items.length).toBe(5);
        expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});
