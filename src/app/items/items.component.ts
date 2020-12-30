import { Component, OnInit } from '@angular/core';
import { Item } from './item/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
