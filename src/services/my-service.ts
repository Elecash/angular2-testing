import {Injectable} from 'angular2/core';

@Injectable()
export class MyService {
    animals:Array<string>;

    constructor() {
        this.animals = ['cat', 'dog', 'elephant', 'lion', 'duck', 'pidgeon', 'turtle'];
    }

    getAnimals(count:number) {
        var result = [];

        if (count > this.animals.length) count = this.animals.length;

        for (var i=0; i<count; i++) {
            result.push(this.animals[i]);
        }

        return result;
    }
}
