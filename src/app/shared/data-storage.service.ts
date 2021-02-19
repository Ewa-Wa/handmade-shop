import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ItemClientService } from "../items/item/itemClient.service";
import { ItemAdminService } from "../admin/itemAdmin.service";
import { Item } from "../items/item/item.interface";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private httpClient: HttpClient, 
        private itemAdminService: ItemAdminService,
        private itemClientService: ItemClientService) {}

    storeItems(){
        const items = this.itemAdminService.getItems();
        this.httpClient.put(
            'https://handmade-shop-95ba6-default-rtdb.firebaseio.com/items.json', 
            items
            ).subscribe(response => {
                // console.log(response);
            });
        }
    
    fetchItems(){
        this.httpClient.get<Item[]>(
            'https://handmade-shop-95ba6-default-rtdb.firebaseio.com/items.json').subscribe(items => {
                // console.log(items);
                this.itemClientService.setItems(items);
                this.itemAdminService.setItems(items);
            });
        //     .pipe(
        //     tap(items => {
        //         this.itemService.setItems(items);
        //     })
        // );
    }


}