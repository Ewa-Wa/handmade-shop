import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ItemAdmin } from "./itemAdmin.model";

@Injectable()
export class ItemAdminService {
    itemsChanged = new Subject<ItemAdmin[]>();
    private items: ItemAdmin[] =[];

    constructor(){}

    setItems(items: ItemAdmin[]){
        this.items = items;
        this.itemsChanged.next(this.items.slice());
    }

    getItems(){
        return this.items.slice();
    }


    getItem(index: number) {
        return this.items[index];
    }


    createItem(item: ItemAdmin){ //addRecipe
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

    deleteItem(index: number){
        console.log('deleteItem index: ' + index);
        this.items.splice(index, 1);
        this.itemsChanged.next(this.items.slice());
    }

}