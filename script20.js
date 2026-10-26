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




