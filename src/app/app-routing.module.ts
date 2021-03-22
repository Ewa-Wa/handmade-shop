import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { CanDeactivateGuard } from "./admin/can-deactivate-guard.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthComponent } from "./auth/auth.component";
import { BasketComponent } from "./basket/basket.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { ItemColorComponent } from "./items/item-detail/item-color/item-color.component";
import { ItemDetailComponent } from "./items/item-detail/item-detail.component";
import { ItemSizeComponent } from "./items/item-detail/item-size/item-size.component";
import { ItemTypeComponent } from "./items/item-detail/item-type/item-type.component";
import { ItemEditComponent } from "./items/item-edit/item-edit.component";
import { ItemComponent } from "./items/item/item.component";
import { ItemsResolver } from "./items/items-resolver.service";
import { ItemsComponent } from "./items/items.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'account', component: AuthComponent},
    {path: 'home', component: HomeComponent},
    {path: 'items', component: ItemsComponent,
    children: [
        {path: ':id', component: ItemDetailComponent,  resolve: {item: ItemsResolver},
            children:[
                {path: '', component: ItemTypeComponent, pathMatch: 'full'},
                {path: 'type', component: ItemTypeComponent},
                {path: 'size', component: ItemSizeComponent},
                {path: 'color', component: ItemColorComponent},
            ]}
        ]
    },
    {path: 'admin', canActivate: [AuthGuard] ,component: AdminComponent, canDeactivate: [CanDeactivateGuard],
        children:[{
            path: ':id', component: ItemEditComponent
        }]},
    {path: 'basket', component: BasketComponent},
    {path: 'not-found', component: ErrorPageComponent, data:{message:'Page not found'}},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    // imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {


}