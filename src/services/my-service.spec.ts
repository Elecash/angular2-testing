import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyService} from "./my-service";

describe('MyList Component', () => {
    let service:MyService = new MyService();

    it('Should return a list of items', () => {
        var items = service.getAnimals(4);

        expect(items).toEqual(['cat', 'dog', 'elephant', 'lion']);
    });

    it('Should get all animals available', () => {
        var items = service.getAnimals(100);

        expect(items).toEqual(['cat', 'dog', 'elephant', 'lion', 'duck', 'pidgeon', 'turtle']);
    });
});
