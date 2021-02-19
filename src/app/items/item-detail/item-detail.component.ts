
import { Component,  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemClient } from '../item/itemClient.model';
import { ItemClientService } from '../item/itemClient.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
  // providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {

  id: number;
  item: ItemClient;
  isItemAddedToBasket = false;
  selectedSize: string;
  typeList = [];
  sizeList= [];
  colorList= [];



  constructor(private route: ActivatedRoute, private router: Router, private itemClientService: ItemClientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.itemClientService.getItem(this.id);
        this.setItemLists(this.item);
      }
    );
  }

  setItemLists(item: ItemClient){
    this.typeList.push(item.typeList);
    this.sizeList.push(item.sizeList);
    this.colorList.push(item.colorList);
    
  }

  onSubmit(form: NgForm){
    // this.item.setSize(form.value.size);
    // this.item.setType(form.value.type);
    // this.item.setColor(form.value.color);
  }

  onAddItemToBasket(){
    this.itemClientService.addItemToBasket(this.item);
    this.isItemAddedToBasket = true;
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
  onHandleAddedToBasket(){
    this.isItemAddedToBasket = false;
  }

}