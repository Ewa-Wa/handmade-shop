import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-added-to-basket',
  templateUrl: './added-to-basket.component.html',
  styleUrls: ['./added-to-basket.component.css']
})
export class AddedToBasketComponent  {
  message = "Item was added to basket";
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }



}
