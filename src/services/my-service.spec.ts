import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyService} from "./my-service";

describe('MyList Component', () => {
    it('Should return a list of items', () => {
        var items = MyService.load();

        expect(items).toEqual(['one', 'two', 'three', 'caramba']);
    });
});
