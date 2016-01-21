import {Injectable} from 'angular2/core';

@Injectable()
export class MyService {
    static load() {
        return ['one', 'two', 'three', 'caramba'];
    }
}
