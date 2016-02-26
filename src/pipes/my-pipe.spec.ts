/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyPipe} from "./my-pipe";

describe('MyPipe Tests', () => {
    let pipe:MyPipe;

    beforeEach(() => {
        pipe = new MyPipe();
    });

    it('Should capitalize all words in a string', () => {
        var result = pipe.transform('golden retriever', null);

        expect(result).toEqual('Golden Retriever');
    });
});
