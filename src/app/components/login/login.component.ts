import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/blockchain.service';

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

  constructor(private loginService: BlockchainService) { }

  ngOnInit() {
  }
  onLogin(){
    this.loginService      
    .onLogin(this.user);
  }
 
}
