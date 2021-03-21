import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, Params, Router } from '@angular/router';
import { ItemAdmin } from 'src/app/admin/itemAdmin.model';
import { ItemAdminService } from 'src/app/admin/itemAdmin.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  id: number;
  item: ItemAdmin;
  editItemAdminForm: FormGroup;


  constructor(private itemAdminService: ItemAdminService, private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.itemAdminService.getItem(this.id);

      }
    );


    this.editItemAdminForm = new FormGroup({
      'name': new FormControl(this.item.name, Validators.required),
      'typeList': new FormArray([], Validators.required),
      'sizeList': new FormArray([], Validators.required),
      'colorList': new FormArray([], Validators.required),
    });

    this.setDefaultValues(this.item);

  }

  setDefaultValues(item: ItemAdmin){
    for(let i =0; i<this.item.typeList.length; i++){
      const control = new FormControl(this.item.typeList[i], Validators.required);
      (<FormArray>this.editItemAdminForm.get('typeList')).push(control);
    }

    for(let i =0; i<this.item.sizeList.length; i++){
      const control = new FormControl(this.item.sizeList[i], Validators.required);
      (<FormArray>this.editItemAdminForm.get('sizeList')).push(control);
    }

    for(let i =0; i<this.item.colorList.length; i++){
      const control = new FormControl(this.item.colorList[i], Validators.required);
      (<FormArray>this.editItemAdminForm.get('colorList')).push(control);
    }

  }

  get typeControls(){
    return  (this.editItemAdminForm.get('typeList') as FormArray).controls;
  }

  get sizeControls(){
    return  (this.editItemAdminForm.get('sizeList') as FormArray).controls;
  }

  get colorControls(){
    return  (this.editItemAdminForm.get('colorList') as FormArray).controls;
  }

  onUpdateItem(){
    console.log('onUpdateItem method called');
    if(this.editItemAdminForm.valid){
      const value = this.editItemAdminForm.value;
      this.item.name = value.name;
      this.item.typeList = value.typeList;
      this.item.sizeList = value.sizeList;
      this.item.colorList = value.colorList;
      this.editItemAdminForm.reset();
      this.itemAdminService.editItem(this.item);
      this.itemAdminService.isItemEdit = false;
      this.route.navigate(['../'], {relativeTo: this.activatedRoute});
    } else {
      alert('Please fill all information')
    }
  }

  onAddItemCtrl(listName: string){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.editItemAdminForm.get(listName)).push(control);
  }

  onDeteleItemCtrl(listName: string, index: number){
    (<FormArray>this.editItemAdminForm.get(listName)).controls.splice(index, 1);
  }

  onCancelEditForm(){
    this.editItemAdminForm.reset();
    this.itemAdminService.isItemEdit = false;
    this.route.navigate(['../'], {relativeTo: this.activatedRoute});
  }

}
