import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ItemClient } from "../items/item/itemClient.model";


@Injectable()
export class BasketService{
    private items: ItemClient[] = [
        new ItemClient("test")
    ];
    itemsChanged = new Subject<ItemClient[]>();
    
    getItems(){
        return this.items.slice();
    }

    addItem(item: ItemClient){
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());

    }
}