import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdd:boolean=false;
  istable:boolean=false;
  constructor() { }
  add(){
   if(this.isAdd == false){
    this.isAdd = true;
   }
  }
  table(){
  if(this.istable == false){
    this.istable=true;
  }
}
  ngOnInit() {
  }

}
