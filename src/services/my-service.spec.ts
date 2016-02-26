/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyService} from "./my-service";

describe('MyService Tests', () => {
    let service:MyService = new MyService();

    it('Should return a list of dogs', () => {
        var items = service.getDogs(4);

        expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky']);
    });

    it('Should get all dogs available', () => {
        var items = service.getDogs(100);

        expect(items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador']);
    });
});
