import {get} from "./request";
import "./material";

// Data
let data = new Array;
let dataok = false;

// Fetching some data... async
async function getMyData() {
    let d1 = get("./data/projects.json");
    let d2 = get("./data/about.json");
    let d3 = get("./data/interests.json");

    // If any of the promoises are rejected, no data is pushed and moves to the next await
    await d1.then(d => data.push(d)).catch(() => console.error("Project Fail..."));
    await d2.then(d => data.push(d)).catch(() => console.error("About Fail..."));
    await d3.then(d => data.push(d)).catch(() => console.error("Interests Fail..."));

    // All attempts to get the data is done...
    dataok = true;
}
getMyData();
