import { ProductViewimageComponent } from './components/product_view/product-viewimage/product-viewimage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProdViewComponent } from './components/prod-view/prod-view.component';
import { ProductviewdescriptionComponent } from './components/product_view/productviewdescription/productviewdescription.component';

import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { CartComponent } from "./shopping-cart/cart/cart.component";
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
   { path:'', component:HomeComponent },
   {path:'login',component:LoginComponent},
   {path:'registration',component:RegistrationComponent},
   {path:'prod-view',component:ProdViewComponent},
   {path:'prod-viewimage', component:ProductViewimageComponent },
   {path:'prod-viewdescription',component:ProductviewdescriptionComponent},
   {path:'Email',component:HomeComponent},
   {path:'PhoneNo',component:HomeComponent},
   {path:'Login',component:HomeComponent},
   {path:'Feedback',component:FeedbackFormComponent},
   {path: "cart", component:CartComponent },
   { path: "cart/:data", component: CartComponent },
 {path:"wishlist",component:WishlistComponent},
 {path:"wishlist/:id",component:WishlistComponent},
 {path:"productlist",component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
