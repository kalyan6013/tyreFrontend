import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {

  orderid:'';
  

  constructor(private viewOrderService: BlockchainService) { }

  ngOnInit() {
  }
  orderDetails(){
    this.viewOrderService      
    .orderDetails(this.orderid);
  }

}
