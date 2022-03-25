// Get the time when the site was first opened...
let d = new Date;
let theHour = d.getHours();
let theMin = d.getMinutes();
let greeting: string;

// Greetings
let theStringMin: string;
if (theMin < 10) {
	theStringMin = '0' + theMin;
} else {
	theStringMin = theMin.toString();
}

if (theHour >= 0 && theHour < 4) {
    if (theHour == 0) {
        greeting = `Wow it's 12:${theMin} in the morning... you're up late.`;
    } else {
        greeting = `Wow it's ${theHour}:${theStringMin} in the morning... you're up late.`;
    }
} else if (theHour >= 4 && theHour < 12) {
    greeting = "Good Morning!";
} else if (theHour >= 12 && theHour < 15) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

export {greeting};
