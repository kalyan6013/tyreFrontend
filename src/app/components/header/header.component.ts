import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  orgname = sessionStorage.getItem('orgname');
  
  constructor(private route:Router) { }

  ngOnInit() {
    console.log(this.orgname)

  }

  onLogout(){
    // localStorage.removeItem('orgname');
    // localStorage.clear();
    this.route.navigate(['/login']);
    // sessionStorage.removeItem('orgname');
  }
}
