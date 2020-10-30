import $ from "jquery";
import {greeting} from "./time";
import {vidGen} from "./video";
import M from "materialize-css";

window.showem = function(iden) {
    closeSidebar(350);
    let id = iden.getAttribute("data-id");
    console.log(`${id} was clicked!`);
}

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

document.querySelector("#menu_sm").addEventListener("click", function() {
    //console.log(this.getAttribute("class"));
    $(this).removeClass("pulse");
    console.log("Menu has been opened...");
    mCollection.sidenav[0].open();
});
