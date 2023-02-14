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
					<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start" title="${dat.title}">
						<div class="ms-2 me-auto text-truncate">
							<div class="fw-bold text-truncate">${dat.title}</div>
							<a href="${dat.link}" target="_blank">${dat.comment}</a>
						</div>
						<span class="badge bg-success rounded-pill">${dat.likes}</span>
					</li>

				`
			);
		});
		return il;
	}

}

// Export...

export { Struct };
