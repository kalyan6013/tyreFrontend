import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';

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

  constructor(private orderService:BlockchainService) { }

  ngOnInit() {
  }
  onCreateOrder(){
    const order={
      "peers":["peer0.audi.orderermanagement.com","peer0.mrf.orderermanagement.com"],
      "fcn":"createOrder",
      "args" : [ this.orderid, this.qty, this.prdit, this.expdate, this.compdate, this.prdit, 'MRF'
      ]
  }
    console.log(order);
  this.orderService
  .onCreateOrder(order);
}
}
