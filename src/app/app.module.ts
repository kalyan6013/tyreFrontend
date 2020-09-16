import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule, NgOption} from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ViewOrderDetailsComponent } from './view-order-details/view-order-details.component';
import { UpdateorderComponent } from './components/updateorder/updateorder.component';
import { CreateinvoiceComponent } from './components/createinvoice/createinvoice.component';
import { ViewinvoiceComponent } from './components/viewinvoice/viewinvoice.component';
import { UpdateinvoiceComponent } from './components/updateinvoice/updateinvoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    InvoiceComponent,
    SignupComponent,
    LoginComponent,
    ViewOrderDetailsComponent,
    UpdateorderComponent,
    CreateinvoiceComponent,
    ViewinvoiceComponent,
    UpdateinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
