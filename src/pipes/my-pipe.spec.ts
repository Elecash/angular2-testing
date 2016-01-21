import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {MyPipe} from "./my-pipe";

describe('MyPipe Pipe', () => {
    let pipe:MyPipe;

    beforeEach(() => {
        pipe = new MyPipe();
    });

    it('Should get all medias on init', () => {
        var result = pipe.transform('one two three', null);

        expect(result).toEqual('One Two Three');
    });
});
