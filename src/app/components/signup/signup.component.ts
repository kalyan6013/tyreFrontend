import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../blockchain.service';
import{Router} from '@angular/router';
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


constructor(private route:Router,private signupService: BlockchainService) { }
  ngOnInit() {
  }
  onRegister(){
    this.signupService      
    .onRegister(this.user);
    this.route.navigate(['/login']);
  }
  // , {queryParams : {registered: 'true'}}
}
