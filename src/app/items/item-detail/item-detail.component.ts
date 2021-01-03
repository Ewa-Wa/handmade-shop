import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {

  id: number;
  item: Item;
  isItemAddedToBasket = false;
  selectedSize: string;
  typeList= ['triangle', 'circle'];
  sizeList= ['xs', 's'];
  colorList= ['brown', 'red', 'blue', 'grey'];



  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.item = this.itemService.getItem(this.id);
      }
    );
  }

  onSubmit(form: NgForm){
    this.item.setSize(form.value.size);
    this.item.setType(form.value.type);
    this.item.setColor(form.value.color);
  }

  onAddItemToBasket(){
    this.itemService.addItemToBasket(this.item);
    this.isItemAddedToBasket = true;
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
  onHandleAddedToBasket(){
    this.isItemAddedToBasket = false;
  }

}