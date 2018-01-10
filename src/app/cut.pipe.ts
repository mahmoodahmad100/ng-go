import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "cut"
})

export class CutPipe implements PipeTransform
{
	transform(value:string, char?:number)
	{
		if(!value)
			return null;

		let limit = (char) ? char : 30 ;
		return value.substr(0, limit) + '...';
	}
}