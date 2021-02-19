
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ItemAdminService } from "src/app/admin/itemAdmin.service";
import { BasketService } from "src/app/basket/basket.service";
import { ItemClient } from "./itemClient.model";

@Injectable()
export class ItemClientService {
    itemsChanged = new Subject<ItemClient[]>();

    private items: ItemClient[] = [];

    constructor(private basketService: BasketService,
        private itemAdminService: ItemAdminService) {}

    setItems(items: ItemClient[]){
        this.items = items;
        this.itemsChanged.next(this.items.slice());
    }

    getItems(){
        return this.items.slice();
    }


    getItem(index: number) {
        return this.items[index];
    }


    createItem(item: ItemClient){ //addRecipe
        this.items.push(item);
        this.itemsChanged.next(this.items.slice());
    }

    addItemToBasket(item: ItemClient){
        this.basketService.addItem(item);
    }


    updateItem(){}

}