import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateinvoice',
  templateUrl: './updateinvoice.component.html',
  styleUrls: ['./updateinvoice.component.css']
})
export class UpdateinvoiceComponent implements OnInit {

  invoiceid:'';
  status:'';

  data:any=[];

  constructor(private route:Router ,private UpdateInvoiceService: BlockchainService) { }

  ngOnInit() {
  }

  updateInvoiceDetails(){
    const updateInvoice={
      "peers":["peer0.buyer.orderermanagement.com","peer0.seller.orderermanagement.com"],
      "fcn":"updateInvoice",
      "args" : [ this.invoiceid, this.status ]
  }
    this.UpdateInvoiceService
    .updateInvoiceDetails(updateInvoice);
      // this.visibleHeader(data);
      console.log("inside invoice",this.data);
      this.route.navigate(['/viewinvoice']);
}

}
