import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {

  orderid:'';
  status:'';

  data:any=[];

  constructor(private route:Router ,private UpdateOrderService: BlockchainService) { }

  ngOnInit() {
  }

  updateOrderDetails(){
    const updateOrder={
      "peers":["peer0.buyer.orderermanagement.com","peer0.seller.orderermanagement.com"],
      "fcn":"updateOrder",
      "args" : [ this.orderid, this.status ]
  }
    this.UpdateOrderService
    .updateOrderDetails(updateOrder);
      // this.visibleHeader(data);
      console.log("inside order",this.data);
      this.route.navigate(['/vieworder']);
}
}
