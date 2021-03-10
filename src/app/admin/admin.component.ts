import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { ItemAdmin } from './itemAdmin.model';
import { ItemAdminService } from './itemAdmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy, CanComponentDeactivate  {

  items: ItemAdmin[];
  private subscription: Subscription;
  newItemAdminForm: FormGroup;
  changesSaved = true;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private itemAdminService: ItemAdminService,  
    private dataStorageService: DataStorageService)
     {

      }
  

  ngOnInit(): void {
    
    this.dataStorageService.fetchItems();
    this.subscription = this.itemAdminService.itemsChanged$.subscribe(
      (items: ItemAdmin[]) => {
        this.items = items;
        console.log("admin subsc OnInit called");
      }
    );
    this.items = this.itemAdminService.getItems();

    this.newItemAdminForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'typeList': new FormArray([], Validators.required),
      'sizeList': new FormArray([], Validators.required),
      'colorList': new FormArray([], Validators.required),

    });

  }

  get typeControls(){
    return  (this.newItemAdminForm.get('typeList') as FormArray).controls;
  }

  get sizeControls(){
    return  (this.newItemAdminForm.get('sizeList') as FormArray).controls;
  }

  get colorControls(){
    return  (this.newItemAdminForm.get('colorList') as FormArray).controls;
  }

  onAddItemCtrl(listName){
    const control = new FormControl();
    (<FormArray>this.newItemAdminForm.get(listName)).push(control);
    this.changesSaved = false;
  }

  onCreateItem(){
    if(this.newItemAdminForm.valid){
      const value = this.newItemAdminForm.value;
      const newItem = new ItemAdmin(value.name, value.typeList, value.sizeList, value.colorList);
      this.itemAdminService.createItem(newItem);
      this.changesSaved = false;
      this.newItemAdminForm.reset();
    } else {
      alert('Please fill all information')
    }
    
    

  }

  onSaveItems(){
    this.dataStorageService.storeItems();
    this.changesSaved = true;
  }

  onDeleteItem(index: number){
    this.itemAdminService.deleteItem(index);
    this.changesSaved = false;
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.changesSaved){
      return true;
    } else {
      return confirm('Do you want to leave without saving changes?')
    }
  }
}