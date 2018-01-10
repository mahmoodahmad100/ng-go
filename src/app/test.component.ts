import { Component } from '@angular/core';

@Component({
	selector: 'test', 
	template: `{{text | cut:15}}`
})


export class TestComponent
{
	text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non aliquam libero, euismod semper mauris. Donec in sollicitudin metus. Aenean non sem massa. Phasellus semper, ante vel fermentum efficitur, massa ex pulvinar arcu, vel semper enim erat eget enim. Maecenas tempor euismod eros";
}
