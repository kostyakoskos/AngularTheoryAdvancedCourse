import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isAunteficated(): boolean{
    var token:any = localStorage.getItem("jwt");
    if(token){
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("jwt");
  }
}
