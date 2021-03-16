import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemClient } from '../items/item/itemClient.model';
import { ItemClientService } from '../items/item/itemClient.service';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  item: ItemClient;
  items: ItemClient[];

  constructor( private basketService: BasketService) { }

  ngOnInit(): void {
    this.items = this.basketService.getItems();
  }

}
