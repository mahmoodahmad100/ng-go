import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title:string;	
  name:string;
  id:number;
  address :addressInfo;
  things:any[];

  constructor() {
  	this.title = "Hello world";
  	this.address = {
  		city:"cairo",
  		phone:546546
  	};


  }

  ngOnInit() {
    this.things = [101010,"hello", "perfect"];
  }


}
  interface addressInfo
  {
	city:string,
	phone:number
  }
