import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // public myOptions:Array<string> = ['New','Completed'];
  // private value:any = {};
  // public refreshValue(value:any):void {
  // this.value = value;
// }
  
    orderid:'';
    qty:'';
    prdit:'';
    expdate:'';
    compdate:'';
    price:'';  

  constructor(private route:Router, private orderService:BlockchainService) { }

  ngOnInit() {
  }
  onCreateOrder(){
    const order={
      "peers":["peer0.buyer.orderermanagement.com","peer0.seller.orderermanagement.com"],
      "fcn":"createOrder",
      "args" : [ this.orderid, this.qty, this.prdit, this.expdate, this.compdate, this.prdit, 'Seller'
      ]
  }
    console.log(order);
  this.orderService
  .onCreateOrder(order);
  this.route.navigate(['/vieworder']);
}
}
