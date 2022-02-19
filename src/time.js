// Get the time when the site was first opened...
let d = new Date;
let theHour = d.getHours();
let theMin = d.getMinutes();
let greeting;

// Greetings

if (theMin < 10) {
	theMin = '0' + theMin;
}

if (theHour >= 0 && theHour < 4) {
    if (theHour == 0) {
        greeting = `Wow it's 12:${theMin} in the morning... you're up late.`;
    } else {
        greeting = `Wow it's ${theHour}:${theMin} in the morning... you're up late.`;
    }
} else if (theHour >= 4 && theHour < 12) {
    greeting = "Good Morning!";
} else if (theHour >= 12 && theHour < 15) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

export {greeting};
