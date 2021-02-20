import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { ItemAdmin } from './itemAdmin.model';
import { ItemAdminService } from './itemAdmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy  {

  items: ItemAdmin[];
  private subscription: Subscription;
  newItemAdminForm: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private itemAdminService: ItemAdminService,  
    private dataStorageService: DataStorageService)
     {
      this.newItemAdminForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'typeList': new FormControl(null, Validators.required),
        'sizeList': new FormControl(null, Validators.required),
        'colorList': new FormControl(null, Validators.required),
  
      });
      }
  

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

  onCreateItem(){
    const value = this.newItemAdminForm.value;
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