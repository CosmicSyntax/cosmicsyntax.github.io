import { greet } from "./pweb/pkg/pweb";

// Get the time when the site was first opened...
let greeting: string;

// Greetings
let category = greet();

if (category === "m") {
	greeting = "Good Morning!";
} else if (category === "a") {
	greeting = "Good Afternoon!";
} else if (category === "e") {
	greeting = "Good Evening!";
} else {
	greeting = "You're up late!";
}

export { greeting };
