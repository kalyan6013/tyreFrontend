import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../blockchain.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    username:'',
    orgName:'',
    password:''
}

constructor(private signupService: BlockchainService) { }
  ngOnInit() {
  }
  onRegister(){
    this.signupService      
    .onRegister(this.user);
  }
}
