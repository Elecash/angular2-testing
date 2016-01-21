import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyList} from "./my-list";

describe('MyList Component', () => {
    let list:MyList;

    beforeEach(() => {
        list = new MyList();
    });

    it('Should get all medias on init', () => {
        list.ngOnInit();

        expect(list.items.length).toBe(3);
        expect(list.items).toEqual(['one', 'two', 'three']);
    });
});
