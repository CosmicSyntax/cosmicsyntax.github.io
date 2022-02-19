import $ from "jquery";

// Video controls
document.querySelector("#stop").addEventListener("click", function() {
    console.log("Stopping video play...");
	$.when(
		$("#stop").addClass("d-none"),
		$("#stop").removeClass("d-flex"),
		).done(() => {
			$("#play").addClass("d-flex");
			$("#play").removeClass("d-none");
	});

    let frame = document.querySelector("iframe");
    $.when($("iframe").fadeOut()).done(() => {
        frame.src = "";
    });
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Restarting video play...");

    // $.when($("#play").fadeOut()).done(() => $("#stop").fadeIn());
	$.when(
		$("#play").addClass("d-none"),
		$("#play").removeClass("d-flex"),
	).done(() => {
		$("#stop").addClass("d-flex");
		$("#stop").removeClass("d-none");
	});

    $.when(vidGen()).done(() => {
        $("iframe").fadeIn();
    });
});

async function vidGen() {
    let vid = [
        ["HsQlpaYTE0s", 0],
        // ["myzKf7Ume28",  0],
        // ["cDinEsC9a2k",  5],
        // ["ftlvreFtA2A", 20],
        // ["sb6WlQiaJeM", 28],
    ];
    let rand = Math.floor(Math.random() * vid.length);
    let frame = document.querySelector("iframe");
    let link = `https://www.youtube.com/embed/${vid[rand][0]}?playlist=${vid[rand][0]}&start=${vid[rand][1]}&controls=0&showinfo=0&rel=0&mute=1&autoplay=1&loop=1`;
    frame.src=link;

    // This is a hacky was of "ensuring" the fadein works
    await sleep(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export {vidGen};
