import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Item } from "./item/item.interface";
import { ItemClientService } from "./item/itemClient.service";

@Injectable()
export class ItemsResolver implements Resolve<Item>{
    constructor(private dataStorageService: DataStorageService, private itemClientService: ItemClientService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> | Promise<Item> | Item {
        return this.itemClientService.getItem(+route.params['id']);
    }
}