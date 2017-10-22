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

  constructor() {
  	this.title = "Hello world";
  	this.address = {
  		city:"cairo",
  		phone:546546
  	}
  	console.log('hello cons');
  	console.log(this.address);
  }

  ngOnInit() {
  	console.log('user ngOnInit');
  }


}
  interface addressInfo
  {
	city:string,
	phone:number
  }
