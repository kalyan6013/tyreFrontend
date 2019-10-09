import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  {path:'order', component:OrderComponent},
  {path:'invoice', component:InvoiceComponent},
  {path:"", component:OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
