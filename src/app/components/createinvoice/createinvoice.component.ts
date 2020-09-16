import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateinvoiceComponent implements OnInit {

  invoiceid:'';
  prdit:'';
  qty:'';
  compdate:'';
  tamount:''; 

  constructor(private route: Router, private InvoiceService:BlockchainService) { }

  ngOnInit() {
  }
  onCreateInvoice(){
    const invoice={
      "peers":["peer0.buyer.orderermanagement.com","peer0.seller.orderermanagement.com"],
      "fcn":"createInvoice",
      "args" : [ this.invoiceid, this.prdit, this.qty, this.compdate, this.tamount, 'Buyer'
      ]
  }
    console.log(invoice);
  this.InvoiceService
  .onCreateInvoice(invoice);
  this.route.navigate(['/viewinvoice']);
  }
}
