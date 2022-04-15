import * as $ from "jquery";

// Video controls
document.querySelector("#stop").addEventListener("click", function() {
    console.log("Stopping video play...");
	$.when(
		$("#stop").addClass("d-none"),
		$("#stop").removeClass("d-flex"),
		$("#play").addClass("d-flex"),
		$("#play").addClass("disabled"),
		$("#play").removeClass("d-none"),
		).done(() => {
			let frame = document.querySelector("iframe");
			$.when($("iframe").fadeOut()).done(() => {
				frame.src = "";
				$("#play").removeClass("disabled");
			});
	});
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Restarting video play...");

    // $.when($("#play").fadeOut()).done(() => $("#stop").fadeIn());
	$.when(
		$("#play").addClass("d-none"),
		$("#play").removeClass("d-flex"),
		$("#stop").addClass("d-flex"),
		$("#stop").addClass("disabled"),
		$("#stop").removeClass("d-none"),
	).done(() => {
		$.when(vidGen()).done(() => {
			$("iframe").fadeIn();
			$("#stop").removeClass("disabled");
		});
	});
});

async function vidGen() {
    let vid = [
        ["HsQlpaYTE0s", 0],
        ["x7SQaDTSrVg", 0],
        ["8plwv25NYRo", 0],
        // ["sb6WlQiaJeM", 28],
    ];
    let rand = Math.floor(Math.random() * vid.length);
    let frame = document.querySelector("iframe");
    let link = `https://www.youtube.com/embed/${vid[rand][0]}?playlist=${vid[rand][0]}&start=${vid[rand][1]}&controls=0&showinfo=0&rel=0&mute=1&autoplay=1&loop=1`;
    frame.src=link;

    // This is a hacky was of "ensuring" the fadein works
    await sleep(1000);
}

function sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export {vidGen};
