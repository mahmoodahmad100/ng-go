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

  changeCity()
  {
    this.address.city = 'Alex';
  }

  addToThings()
  {
    this.things.push('yes');
  }

  AddThing(param)
  {
    this.things.unshift(param);
  }

  delete(param)
  {
    for(let i = 0; i < this.things.length; i++)
    {
      if(this.things[i] == param)
        this.things.splice(i,1);
    }
  }


}
  interface addressInfo
  {
	city:string,
	phone:number
  }
