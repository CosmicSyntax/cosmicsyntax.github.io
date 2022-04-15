// import * as $ from "jquery";
import {greeting} from "./time";
import {vidGen} from "./video";
import * as BS from "bootstrap";

// window.showem = function(iden) {
//     closeSidebar(350);
//     let id = iden.getAttribute("data-id");
//     console.log(`${id} was clicked!`);
// }
//
// let mCollection = new Object;
//
function timer(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(true), ms));
}
async function startToast(x: number) {
    await timer(x);
	let toastLive = document.getElementById('liveToast');
	let toastbody = document.querySelector('#liveToast .toast-body');
	let toastheader = document.querySelector('#liveToast .me-auto');
	let toastright = document.querySelector('#liveToast .right-msg');
	toastbody.textContent = greeting;
	toastheader.textContent = "Hello there!";
	toastright.textContent = "just now";
	let toast = new BS.Toast(toastLive);
	toast.show();
}
// async function closeSidebar(x) {
//     await timer(x);
//     mCollection.sidenav[0].close();
// }
//
document.addEventListener('DOMContentLoaded', function() {
    // let elems = [
    //     document.querySelectorAll('.collapsible'),
    //     document.querySelectorAll('.tooltipped'),
    //     document.querySelectorAll('.sidenav'),
    // ];
    // mCollection.collInst = M.Collapsible.init(elems[0]);
    // mCollection.toolInst = M.Tooltip.init(elems[1], {"position": "right"});
    // mCollection.sidenav  = M.Sidenav.init(elems[2]);
    startToast(5000).then(() => console.log("Toast has launched!"));
    vidGen();
	console.log("STARTING!");
});
//
// document.querySelector("#menu").addEventListener("click", function() {
//     //console.log(this.getAttribute("class"));
//     $(this).removeClass("pulse");
//     console.log("Menu has been opened...");
//     mCollection.sidenav[0].open();
// });
//
// document.querySelector("#menu_sm").addEventListener("click", function() {
//     //console.log(this.getAttribute("class"));
//     $(this).removeClass("pulse");
//     console.log("Menu has been opened...");
//     mCollection.sidenav[0].open();
// });
