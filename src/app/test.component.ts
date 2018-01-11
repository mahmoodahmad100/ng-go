import { Component, Input } from '@angular/core';

@Component({
	selector: 'test', 
	template: `
				{{text | cut:15}} <span (click)="like()" class="glyphicon" [class.glyphicon-star]="isLiked" [class.glyphicon-star-empty]="!isLiked"></span>
				<br>
				<input class="form-control" [(ngModel)]="stringInput">
				{{ stringInput | titleCase }}
	          `
})

export class TestComponent
{
	text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non aliquam libero, euismod semper mauris. Donec in sollicitudin metus. Aenean non sem massa. Phasellus semper, ante vel fermentum efficitur, massa ex pulvinar arcu, vel semper enim erat eget enim. Maecenas tempor euismod eros";

	@Input() isLiked:boolean = false;
	stringInput:string;

	like()
	{
		this.isLiked  = !this.isLiked;
	}
}
