import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../items/item/item.interface';

import { DataStorageService } from '../shared/data-storage.service';
import { ItemAdmin } from './itemAdmin.model';
import { ItemAdminService } from './itemAdmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy  {

  items: Item[];
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private itemAdminService: ItemAdminService,  private dataStorageService: DataStorageService) { }
  

  ngOnInit(): void {
    this.dataStorageService.fetchItems();
    this.subscription = this.itemAdminService.itemsChanged.subscribe(
      (items: ItemAdmin[]) => {
        this.items = items;
        console.log("admin subsc OnInit called");
      }
    );
    this.items = this.itemAdminService.getItems();
  }

  onCreateItem(form: NgForm){

    const value = form.value;
    const newItem = new ItemAdmin(value.name, value.typeList, value.sizeList, value.colorList);
    this.itemAdminService.createItem(newItem);

  }

  onSaveItems(){
    this.dataStorageService.storeItems();
  }

  onDeleteItem(index: number){
    this.itemAdminService.deleteItem(index);
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }
}