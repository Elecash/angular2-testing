import {PipeTransform, Pipe, Injectable} from 'angular2/core';

@Injectable()
@Pipe({name: 'capitalizeWords'})
export class MyPipe implements PipeTransform {
    constructor() {
    }

    transform(text:string, args:any[]):any {
        return text.split(' ').map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }).join(' ');
    }
}
