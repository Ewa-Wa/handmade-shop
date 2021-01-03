import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasketComponent } from "./basket/basket.component";
import { HomeComponent } from "./home/home.component";
import { ItemColorComponent } from "./items/item-detail/item-color/item-color.component";
import { ItemDetailComponent } from "./items/item-detail/item-detail.component";
import { ItemSizeComponent } from "./items/item-detail/item-size/item-size.component";
import { ItemTypeComponent } from "./items/item-detail/item-type/item-type.component";
import { ItemsComponent } from "./items/items.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'items', component: ItemsComponent, 
    children: [
        {path: ':id', component: ItemDetailComponent,
            children:[
                {path: 'type', component: ItemTypeComponent},
                {path: 'size', component: ItemSizeComponent},
                {path: 'color', component: ItemColorComponent},
            ]}
        ]
    },
    {path: 'basket', component: BasketComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}