import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.css']
})
export class ViewinvoiceComponent implements OnInit {

  invoiceid:'';

  data

  constructor(private route:Router ,private viewOrderService: BlockchainService) { }

  ngOnInit() {
  }

  invoiceDetails(){
    this.viewOrderService      
    .invoiceDetails(this.invoiceid).subscribe((data:any)=> {
      console.log(data);
      this.data = data;
      // this.visibleHeader(data);
      console.log("inside invoice",this.data);
      this.route.navigate(['/viewinvoice']);

    });
  }

}
