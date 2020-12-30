import {get} from "./request";
import "./material";
import * as reddit from "./reddit";

// Fetching some data through asynchronous pipeline
async function getMyData() {

    let data = new Array;
    let d1 = get("./data/projects.json");
    let d2 = get("./data/about.json");
    let d3 = get("./data/interests.json");
    // Proxy server for CORS issue
    let d4 = get("https://cors-anywhere.herokuapp.com/https://www.reddit.com/user/alegionnaire/comments.json?limit=3");

    // If any of the promoises are rejected, no data is pushed and moves to the next await
    await d1.then(d => data.push(d)).catch(() => console.log("Projects failed..."));
    await d2.then(d => data.push(d)).catch(() => console.log("About failed.."));
    await d3.then(d => data.push(d)).catch(() => console.log("Interests failed..."));
    await d4.then(d => data.push(d)).catch(() => console.log("Reddit failed..."));

    // All attempts to get the data is done...
    if (data.length == 0) {
        throw new Error("All GET request failed...");
    } else {
        return data;
    }
}

getMyData().then(d => {
    let reddit_d = new reddit.Reddit(d[3]);
    console.log(reddit_d.getdata());
}).catch(Err => console.error(Err));
