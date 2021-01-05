import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemComponent } from './items/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BasketService } from './basket/basket.service';
import { ItemService } from './items/item/item.service';
import { HomeComponent } from './home/home.component';
import { AddedToBasketComponent } from './shared/messages/added-to-basket/added-to-basket.component';
import { ItemSizeComponent } from './items/item-detail/item-size/item-size.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ItemTypeComponent } from './items/item-detail/item-type/item-type.component';
import { ItemColorComponent } from './items/item-detail/item-color/item-color.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemListComponent,
    ItemComponent,
    HeaderComponent,
    HomeComponent,
    AddedToBasketComponent,
    ItemSizeComponent,
    ItemTypeComponent,
    ItemColorComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    NoopAnimationsModule
  ],
  providers: [BasketService, ItemService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
