import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasketComponent } from "./basket/basket.component";
import { HomeComponent } from "./home/home.component";
import { ItemDetailComponent } from "./items/item-detail/item-detail.component";
import { ItemsComponent } from "./items/items.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'items', component: ItemsComponent, 
    children: [
        {path: ':id', component: ItemDetailComponent}
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