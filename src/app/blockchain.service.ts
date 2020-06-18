import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private _http:HttpClient) { }
  onRegister(info){  
    // console.log(info);
    // const myObjStr = JSON.stringify(info);
    // console.log(myObjStr);
    return this._http.post("http://localhost:4000/signup", info)
    .subscribe(result => {
      console.log(result);
    })
  }
  onLogin(info){
    return this._http.post("http://localhost:4000/login", info)
    .subscribe(result=>{
      console.log(result);
      let res = Object.values(result);
      console.log(res[2]);
      // return result;
      // console.log(result.json().token);
      // let ls = result.json().token;
       localStorage.setItem("result",res[2]);
      // console.log("Token = " + ls);
    })
  }
  onCreateOrder(info){
    // var userToken = localStorage.getItem("result");
    // console.log(userToken);
    // const headers = new Headers({'Content-Type': 'application/json'});
    
    // headers.append('Authorization', 'Bearer' + userToken);

    // console.log(userToken);
    // let UT = headers.append('Authorization', 'Bearer' +' '+ userToken);
    // console.log("This is the authorization: "+UT);
    return this._http.post("http://localhost:4000/channels/amchannel/chaincodes/mycc",info, { 
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('authorization', `Bearer ${localStorage.getItem('result')}`)
     }).subscribe((result)=>{
      // var result=response.json();
      console.log(result);
    })
  }
  orderDetails(orderid:any){
    var userToken = localStorage.getItem("result");
    console.log(userToken);

    // const body = new HttpParams()
    // .set('orderid',orderid)
    return this._http.get(`http://localhost:4000/channels/amchannel/chaincodes/mycc?peer=peer0.audi.orderermanagement.com&fcn=viewOrder&args=%5B%22${orderid}%22%5D`, {responseType:'text',
      // `http://localhost:4000/amchannel/chaincodes/mycc?peer=peer0.audi.orderermanagement.com&fcn=viewOrder&args=%5B%22${orderid}%22%5D`,
    
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('authorization', `Bearer ${localStorage.getItem('result')}`)
    }
    )
    .subscribe(result=>{
      console.log(result);
    })
  }
  }
