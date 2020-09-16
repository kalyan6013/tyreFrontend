import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    username:'',
    orgName:'',
    password:''
}


  constructor(private route : Router, private loginService: BlockchainService) { }

  // infoMessage = '';
ngOnInit() {
  // localStorage.removeItem('orgname');
    // this.route.routerState.root.queryParams
    //   .subscribe(params => {
    //     if(params.registered !== undefined && params.registered === 'true') {
    //         this.infoMessage = 'Registration Successful! Please Login!';
    //     }
    //   });
}
  onLogin(){
    this.loginService      
    .onLogin(this.user).subscribe((data)=> {
      console.log(data);
      let res = Object.values(data);
      localStorage.setItem("result",res[0].token);
      sessionStorage.setItem("orgname", res[1]);
      if(sessionStorage.getItem("orgname") == 'Buyer'){
        this.route.navigate(['/order']);
        }else if(sessionStorage.getItem('orgname') == 'Seller') {
          this.route.navigate(['/invoice']);
        }
    });
   
  } 
}
