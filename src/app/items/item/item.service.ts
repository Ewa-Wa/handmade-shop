import { Injectable } from "@angular/core";
import { BasketService } from "src/app/basket/basket.service";
import { Item } from "./item.model";

@Injectable()
export class ItemService {

    private items: Item[] = [
        new Item('scarf'),
        new Item('gloves'),
        new Item('sock'),
        new Item('napkin'),
        new Item('baby shoes'),
        new Item('earrings')
      ];

    constructor(private basketService: BasketService) {}

    getItems(){
        return this.items.slice();
    }

    getItem(index: number) {
        return this.items[index];
    }

    addItemToBasket(item: Item){
        this.basketService.addItem(item);
    }

    updateItem(){}

}