import M from "materialize-css/dist/js/materialize";
import $ from "jquery";

// Get the time when the site was first opened...
let d = new Date;
let theTime = d.getHours();
let greeting;

// Greetings
if (theTime >= 0 && theTime < 4) {
    greeting = `Wow it's ${theTime} in the morning... you're up late.`;
} else if (theTime >= 4 && theTime < 12) {
    greeting = "Good Morning!";
} else {
    greeting = "Good Evening!";
}

// function renderMd(id) {
    
// } 

// Get data and do stuff with it
function get(url) // Creating a function that can execute async method and build a promise...
{
    return new Promise( //Promise is a function with a callback function
        function(resolve, reject)
        {
            // callback function is the async...
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true); // set up... has have fetch data yet
            xhttp.onload = function() // when data is available... do
            {
                if (xhttp.status == 200)
                {
                    resolve(JSON.parse(xhttp.response)) //run the resolve method when success
                }
                else
                {
                    reject(xhttp.statusText) //run the reject method if it fails
                }
            };

            xhttp.onerror = function(){
                reject(xhttp.statusText) //repeat... I guess this is some terrible legacy code
            };
            xhttp.send(); //make the AJAX request now...
        }
    );
}

let data = new Array;
let dataok = false;

let promise = get("https://www.reddit.com/user/alegionnaire/comments.json?limit=3");
promise.then(d => {
   data.push(d);
   return get("./data/about.json");
}).then(d => {
   data.push(d);
   return get("./data/interests.json");
}).then(d => {
   data.push(d);
   dataok = true;
   console.log(data);
}).catch(d => {
   console.error(d);
});

window.showem = function(iden) {
    closeSidebar(350);
    let id = iden.getAttribute("data-id");
    console.log(`${id} was clicked!`);
}

// Materialize
let mCollection = new Object;

function timer(ms) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms));
}
async function startToast(x) {
    await timer(x);
    M.toast({html: "Click on hamburger icon to open menu.", 
        classes: "rounded", 
        completeCallback: () => M.toast({html: greeting, classes: "rounded"})});
}
async function closeSidebar(x) {
    await timer(x);
    mCollection.sidenav[0].close();
}

document.addEventListener('DOMContentLoaded', function() {
    let elems = [
        document.querySelectorAll('.collapsible'),
        document.querySelectorAll('.tooltipped'),
        document.querySelectorAll('.sidenav'),
    ];
    mCollection.collInst = M.Collapsible.init(elems[0]);
    mCollection.toolInst = M.Tooltip.init(elems[1], {"position": "right"});
    mCollection.sidenav  = M.Sidenav.init(elems[2]);
    startToast(5000).then(() => console.log("Toast has launched!"));
    vidGen();
});

document.querySelector("#menu").addEventListener("click", function() {
    //console.log(this.getAttribute("class"));
    $(this).removeClass("pulse");
    console.log("Menu has been opened...");
    mCollection.sidenav[0].open();
});

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
