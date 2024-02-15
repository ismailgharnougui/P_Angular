import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";

const routes: Routes = [
  {path :'' ,redirectTo:'home',pathMatch:"full"},
  {path: 'products',component:ProductComponent},

  {path: 'home' , component:HomeComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
