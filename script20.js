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

}
    let sum = 0
    for(const points of arr) {

    }

    function countmedel = (provPointsArr) {
        let sum = 0;
    }

      for (let i = 0; i < arr.length; i++) {
    console.log(arr[1]);

    const countmedel = (provPointsArr) => {
        let sum = 0
    }

    for ( const point of provPointsArr) {
        sum = sum + point;
        return sum / provPointsArr.length {

        }
        const medelvärde = countmedel(provPoints);

        console.log("Medelpoäng på provet:", medelvärde);

    }

    

}

const versaler == (str) => {
    return str.toUpperCase()
}

const myName = versaler("Ali")
console.log(myName)

const citera = (str) => {
    return "$(str)"

}

const formateraText = (text, callback) => callback(text)
const myName = versaler("Ali")

const myName = citera ("Ali")
const formateraText = (text, callback) => {
    return callback(text)
}
    

    const tal = [1, 15, 8, 25, 2]

    const overTio = tal.filter ((siffra)) => siffra > 10
    
    const PLUSSADE = tal.map(siffra => siffra + 5)
        
        console:log(tal)
        console.log(overTio)
        console.log(plussade)

        const tal = [10, 20, 30, 40,]

        const del = tal.splice(1, 3)

        console.log(tal)

        



