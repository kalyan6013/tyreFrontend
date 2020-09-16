import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { UpdateorderComponent } from './components/updateorder/updateorder.component';
import { CreateinvoiceComponent } from './components/createinvoice/createinvoice.component';
import { UpdateinvoiceComponent } from './components/updateinvoice/updateinvoice.component';
import { ViewinvoiceComponent } from './components/viewinvoice/viewinvoice.component';


const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'order', component:OrderComponent},
  {path:'vieworder', component:ViewOrderDetailsComponent},
  {path:'updateorder', component:UpdateorderComponent},
  {path:'invoice', component:CreateinvoiceComponent},
  {path:'updateinvoice', component:UpdateinvoiceComponent},
  {path:'viewinvoice', component:ViewinvoiceComponent},
  {path:"", component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
