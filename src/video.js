import $ from "jquery";

// Video controls
document.querySelector("#stop").addEventListener("click", function() {
    console.log("Stopping video play...");
    let frame = document.querySelector("iframe");
    $.when($("iframe").fadeOut()).done(() => frame.src = "");
});

document.querySelector("#reload").addEventListener("click", function() {
    console.log("Restarting video play...");
    $.when(vidGen()).done(() => {
        $("iframe").fadeIn();
    });
});

function vidGen() {
    let vid = [
        ["myzKf7Ume28",  0],
        //["cDinEsC9a2k",  5],
        //["ftlvreFtA2A", 20],
        //["sb6WlQiaJeM", 28],
    ];
    let rand = Math.floor(Math.random() * vid.length);
    let frame = document.querySelector("iframe");
    let link = `https://www.youtube.com/embed/${vid[rand][0]}?playlist=${vid[rand][0]}&start=${vid[rand][1]}&controls=0&showinfo=0&rel=0&mute=1&autoplay=1&loop=1`;
    frame.src=link;
}

export {vidGen};
