// variabelen initialiseren
const age = 20;
const isFemale = true;
const driverStatus = "notbob";
const naam = "Sarah";
const totalAmount = 16;

/* if (age >= 18) {
    console.log("Welkom, veel plezier in het 'Bierhol'");
} else {
    console.log("Helaas kan ik je niet binnen laten als je nog geen 18 bent.");
}

if (isFemale) {
    console.log("Welkom op de 'ladiesnight'!");
} else {
    console.log("Het is ladies only vanavond, dus helaas......");
}

if (driverStatus == "bob") {
    console.log("Fijne avond nog en rij voorzichtig!!");
} else {
    console.log("Voor jou gaan we een taxi bellen, zo kun je niet rijden.");
}
 */

// Check op leeftijd voor 50% korting
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas krijg je geen korting, jammer joh!");
}

// Check op naam voor de Abraham, Sarah actie!
if (naam == "Bram" || naam == "Sarah") {
    console.log("Leuke naam hoor, je krijgt een gratis biertje");
} else {
    console.log("Jammer joh, met een andere naam had je een gratis biertje gehad");
}

// Check welke jubileum korting de klant krijgt
if (totalAmount > 100) {
    console.log("Zo hé, flinke bestelling. Je krijgt een gratis flesje champagne!");
} else if (totalAmount > 50) {
    console.log("Je krijgt een gratis portie nachos bij je drankjes.");
} else if (totalAmount > 25) {
    console.log("Je krijgt een graties portie (vega)bitterballen bij je drankjes.");
} else {
    console.log("Als je nu wat meer drankjes bestelt, hebben we een leuke actie voor je!");
}