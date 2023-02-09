import {get} from "./request";
import "./material";
import * as reddit from "./reddit";
import * as render from "./render";

// Fetching some data through asynchronous pipeline
async function getMyData() {

    let data = new Array;
    // Fetch the following data asynchronously
    let d1 = get("./data/projects.json");
    let d2 = get("./data/about.json");
    let d3 = get("./data/interests.json");
    // Proxy server for CORS issue
    let d4 = get("https://api.reddit.com/user/alegionnaire/comments.json?limit=3");
    // let d4 = get("./data/reddit.json");

    // If any of the promises are rejected, no data is pushed and moves to the next await
    await d1.then(d => data.push(d)).catch(() => console.error("Projects failed..."));
    console.log("Loaded projects...");
    await d2.then(d => data.push(d)).catch(() => console.error("About failed.."));
    console.log("Loaded about...");
    await d3.then(d => data.push(d)).catch(() => console.error("Interests failed..."));
    console.log("Loaded interests...");
    await d4.then(d => data.push(d)).catch(() => console.error("Reddit failed..."));
    console.log("Loaded reddit...");

    // All attempts to get the data is done...
    if (data.length == 0) {
        throw new Error("All GET request failed...");
    } else {
        return data;
    }
}

getMyData().then(d => {
    let reddit_d = new reddit.Reddit(d[3]);
    let text = new render.Struct(reddit_d.getdata()).construct_il().join(' ');
	let div = document.getElementById("reddit_anchor");
	let ul = document.createElement("ul");
	ul.className = "list-group";
	ul.innerHTML = text;
	div.appendChild(ul);
}).catch(Err => console.error(Err));
