import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {Item} from '../items/item/item.model';

@Injectable()
export class BasketService{
    private items: Item[] = [
        new Item("test")
    ];
    itemsChanged = new Subject<Item[]>();
    
    getItems(){
        return this.items.slice();
    }

    addItem(item: Item){
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());

    }
}