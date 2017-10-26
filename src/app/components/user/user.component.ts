import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts:post[];
  hideForm:boolean = false;

  constructor(private dataService:DataService) {
  	this.title = "Hello world";
  	this.address = {
  		city:"cairo",
  		phone:546546
  	};

    this.dataService.getPosts().subscribe( posts => {
        this.posts = posts;
    });

  }

  ngOnInit() {
    this.things = [101010,"hello", "perfect"];
    this.name = "myName";
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

  toggleEdit()
  {
    this.hideForm = !this.hideForm;
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

  interface post
  {
    id:number,
    userId:number,
    title:string,
    body:string
  }
