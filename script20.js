const name = "Muhammad";
let age = 21;

console.log("Hello " + name + " age " + age);

let myage = 14;
let hasTicket = true;
let withAdult = true;

if (age >= 15 || withAdult === true) {
    console.log("Välkommen in i BIO");
} else {
    console.log("Gå och köp din biljett, din snåle fan");
}

let loggedIn = true;
let userole = "admin";

if (loggedIn === true) {
    if (userole === "admin") {
        console.log("Välkommen till användarpanelen!");
    } else {
        console.log("Välkommen vanlig användare");
    }
} else {
    console.log("Du måste logga in först");
}

const cart = ["Mjölk", "Godis", "Bröd", "Godis", "Äpple"];

for (const product of cart) {
    if (product === "Godis") {
        console.log("Onödig vara");
    } else {
        console.log("Köp " + product);
    }
}

const welcome = (name, title = "Medlem") => {
    return "VÄlkommen ${title} ${name}"

}

console.log(wecome("Klara", "Admin"))
console.log(welcome("Ahmad"))

console.log(user1)
console.log(user2)

const provPoints = [18, 22, 15, 28, 20]
const countmedel = (arr) => {
    let sum = 0
    for(const points of arr) {

    }

      for (let i = 0; i < arr.length; i++) {
    console.log(arr[1]);

}




