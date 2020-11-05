import {get} from "./request";
import "./material";

// Data
let data = new Array;
let dataok = false;

// Fetching some data through asynchronous pipeline
async function getMyData() {
    let d1 = get("./data/projects.json");
    let d2 = get("./data/about.json");
    let d3 = get("./data/interests.json");
    // Proxy server for CORS issue
    let d4 = get("https://cors-anywhere.herokuapp.com/https://www.reddit.com/user/alegionnaire/comments.json?limit=3");

    // If any of the promoises are rejected, no data is pushed and moves to the next await
    await d1.then(d => data.push(d)).catch(() => console.error("Project Fail..."));
    await d2.then(d => data.push(d)).catch(() => console.error("About Fail..."));
    await d3.then(d => data.push(d)).catch(() => console.error("Interests Fail..."));
    await d4.then(d => data.push(d)).catch(() => console.error("Reddit Fail..."));

    // All attempts to get the data is done...
    return true;
}

dataok = getMyData();
