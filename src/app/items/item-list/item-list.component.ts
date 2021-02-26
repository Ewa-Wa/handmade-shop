import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ItemClient } from '../item/itemClient.model';
import { ItemClientService } from '../item/itemClient.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  items: ItemClient[];
  private subscription: Subscription;

  constructor(private itemClientService: ItemClientService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchItems();
    this.subscription = this.itemClientService.itemsChanged$.subscribe(
      (items: ItemClient[]) => {
        this.items = items;
      }
    );
    this.items = this.itemClientService.getItems();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
   }
}
