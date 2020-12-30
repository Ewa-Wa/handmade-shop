import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../items/item/item.model';
import { ItemService } from '../items/item/item.service';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  item: Item;
  items: Item[];
  private subscription: Subscription;

  constructor(private itemService: ItemService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.items = this.basketService.getItems();
    this.subscription = this.basketService.itemsChanged.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
  }

}
