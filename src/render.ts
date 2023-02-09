// library for rendering dom elements
import * as reddit from "./reddit";

/*
	Flow chart
	DATA + TEMPLATE + TARGET -> KABOOM -> DOM
*/

class Struct {
	data: reddit.Post[];

	constructor(data: reddit.Post[]) {
		this.data = data;
	}

	get property(): string {
		return this.data[0].hash;
	}

	construct_il(): string[] {
		let il: string[] = new Array;
		this.data.forEach(dat => {
			il.push(
				`
					<li class="list-group-item list-group-item-dark text-truncate" title="${dat.title}">
						<a href="${dat.link}" target="_blank">${dat.comment}</a>
					</li>

				`
			);
		});
		return il;
	}

}

// Export...

export { Struct };
