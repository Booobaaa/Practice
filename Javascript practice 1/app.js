const button = document.getElementById("toggleButton");
const message = document.getElementById("message");
let toggle = true;

button.addEventListener("click", () => {
    if (toggle) {
        message.textContent = "Dont click it again"
    } else{
        window.location.href = "blank.html"
    }
    toggle = !toggle;
})

let x, y;
x = 4;
y = 6;


let carName = "Cars";
document.getElementById("demo").innerHTML = carName;


const cars = ["Jamal", "Mercedes", "Lambo"]

cars[0] = "Toyota";

cars.push("Audi");

document.getElementById("demo2").innerHTML = cars;

const car = {type : "fiat", model : "500", color : "blue"}

car.color = "red"

car.owner = "Johnson"

document.getElementById("demo3").innerHTML =
 "The car owner is " + car.owner;
 document.getElementById("demo4").innerHTML =
 "The average miles per gallon is " + (x+y);


 if (x < y) {
    document.getElementById("demo5").innerHTML = x + " cars in total";
 } else {
    document.getElementById("demo5").innerHTML = y;
 };



function myFunction(p1, p2) {
    return p1 * p2;
}

let result = myFunction (4,3);
document.getElementById("demo6").innerHTML = result + " Businesses";



const businesses= ["freelance", "media", "market", "social"];

let business = businesses.at(3);
document.getElementById("demo7").innerHTML = business + " businesses since";

const d = new Date(2018, 11 , 24);
document.getElementById("demo8").innerHTML = d;

let business2 = businesses.at(2);
document.getElementById("demo9").innerHTML = business2 + " businesses since"

const d2 = new Date(2015, 5, 12)
document.getElementById("demo10").innerHTML = d2;

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Currently at work";
} else {
    greeting = "Currently at home";
}

document.getElementById("demo12").innerHTML = greeting;

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  document.getElementById("demo11").innerHTML = "Today is " + day;