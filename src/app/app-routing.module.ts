import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ReturningUserComponent } from './returning-user/returning-user.component';
import { SignInReturningComponent } from './sign-in-returning/sign-in-returning.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  
  {path:'new-user',component:NewUserComponent},
  {path:'main-checkout',component:SignInComponent},
  {path:'main-checkout-returning',component:SignInReturningComponent},
  {path:'order-detail',component:OrderDetailComponent},
  {path:'returning-user',component:ReturningUserComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
