import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {

  orderid:'';
//  private order:any=[];
  data:any=[];
  constructor(private route:Router ,private viewOrderService: BlockchainService) { }

  ngOnInit() {                                                                                                                                                                                                                                                                                                                        
  }
  orderDetails(){
    this.viewOrderService      
    .orderDetails(this.orderid).subscribe((data:any)=> {
      console.log(data);
      this.data = data;
      // this.visibleHeader(data);
      console.log("inside order",this.data);
      this.route.navigate(['/vieworder']);

    });
  }

  // visibleHeader(data){
  //   return data;
  // }

}
