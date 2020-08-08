import {Injectable} from '@angular/core';

@Injectable()
export class CustService{
    getCust():any []{
        

        return this.getCust=JSON.parse(localStorage.getItem('s'));
    }
} 