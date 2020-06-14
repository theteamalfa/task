import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [
  {path:"login",component:LoginFormComponent},
  {path:"customerAdd",component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
