import {Injectable} from '@angular/core';

import { Groceryitem } from './grocery-list-details/model/grocery-item';
import { ITEMS }       from './mock-list';

@Injectable()
export class ListService {

     getItems(): Promise<Groceryitem[]>{
        return Promise.resolve(ITEMS)
    }
    
    create(item: any) {
        if (item) {
            console.log(item)
            ITEMS.push(item)
        }
    }
}