
// Out of ideas when you're in the mood for coffee? Generate your exciting next coffee order! 
//This program will generate a random coffee order for you, also taking into account the season of year and your preference for sweets. 

var season = prompt("What season is it?")
// The program asks you to input the season: fall, winter, spring or summer. This will affect whether the drink is "iced" or "warm."

//The program asks you to input your preferences for sweets. This will decide whether the computer adds flavor and whipped cream. 

var sweets = prompt("Do you like sweet things?")

var size = ["short", "tall", "grande", "venti"]; 
var temp = ["warm", "iced"]; 
var espresso = ["single-shot", "double-shot", "triple-shot", "quad-shot"]; 
var type = ["latte", "americano", "cappuccino"]; 
var milk = ["non-fat", "two percent", "whole", "soy","half-n-half", "almond", "coconut"]; 
var flavor = ["chocolate", "caramel", "vanilla", "hazelnut", "cinnamon dolce", "orange", "raspberry", "peppermint", "almond"];
var whip = ["heavy whip", "light whip"]; 

function getRandom (drinkvariable) {
	return drinkvariable[Math.floor((Math.random()*drinkvariable.length))]
}

function getTemp(season) {
	if (season === "fall" || season === "winter") {
		return "warm";
	}
	if (season == "summer" || season === "spring") {
		return "iced"; 
	}
}

function getSweets(sweets) {
	if (sweets === "yes") {
		return "and a hint of " + getRandom(flavor) + " flavor with " + getRandom(whip)
	}
	if (sweets === "no") {
		return "and no whip" 
	}
}


document.write(
	"I'd like to have a " +
	getRandom(size) + " " + 
	getTemp(season) + " " +
	getRandom(espresso) + " " +
	getRandom(type) + " with " +
	getRandom(milk) + " milk " +
	getSweets(sweets) + "!"
)
