import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ItemAdmin } from "./itemAdmin.model";

@Injectable()
export class ItemAdminService {
    itemsChanged$ = new Subject<ItemAdmin[]>();
    private items: ItemAdmin[] =[];
    isItemEdit = false;

    constructor(){}

    setItems(items: ItemAdmin[]){
        this.items = items;
        this.itemsChanged$.next(this.items.slice());
    }

    getItems(){
        return this.items.slice();
    }

    // guard clauses -----------------
    getItem(index: number) {
        if (index === null) return
        return this.items[index];
    }


    createItem(item: ItemAdmin){ 
        this.items.push(item);
        this.itemsChanged$.next(this.items.slice());
    }

    deleteItem(index: number){
        console.log('deleteItem index: ' + index);
        this.items.splice(index, 1);
        this.itemsChanged$.next(this.items.slice());
    }

    editItem(item: ItemAdmin){
        let index = this.items.indexOf(item);
        this.items[index] = item;
    }

}