import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public myOptions:Array<string> = ['New','Completed'];
private value:any = {};
public refreshValue(value:any):void {
  this.value = value;
}

  constructor() { }

  ngOnInit() {
  }

}
