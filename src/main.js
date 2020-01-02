window.showem = function(iden) {
   let id = iden.getAttribute("data-id");

   console.log(`${id} was clicked!`);


}

// function renderMd(id) {
    
// } 

// Get data
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

let promise = get("https://www.reddit.com/r/popular/hot.json?limit=10");
promise.then(d => {
   data.push(d);
   return get("./data/about.json");
}).then(d => {
   data.push(d);
   return get("./data/interests.json");
}).then(d => {
   data.push(d);
   return get("./data/projects.json");
}).then(d => {
   data.push(d);
   dataok = true;
   console.log(data);
}).catch(d => {
   console.error(d);
});