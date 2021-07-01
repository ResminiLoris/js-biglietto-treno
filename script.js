
var userKm = parseInt(prompt("inserisci il numero dei chilometri che vuoi percorrere"));
console.log("L'utente percorrerà: " + userKm + "Km");

var userAge = parseInt(prompt("inserisci la tua età"));
console.log("l'età dell'utente: " + userAge);

var kmPrice = 0.21;
var totalPrice = parseInt(kmPrice * userKm);
console.log("il costo totale è di: " + totalPrice + " €")

var sconto20 = parseInt(totalPrice / 100 * 20)
console.log("sconto 20%: " + sconto20 + "€");

var sconto40 = parseInt(totalPrice / 100 * 40)
console.log("sconto 40%: " + sconto40 + "€");

if (userAge < 18){
    totalPrice = parseInt(kmPrice * userKm - sconto20 + "€")
}
else if (userAge > 65){
    totalPrice = parseInt(kmPrice * userKm - sconto40 + " €")
}

console.log (typeof totalPrice)

var tot = totalPrice.toFixed(2)

var total = document.getElementById('total');
total.innerHTML = 'il costo del tuo biglietto è: ' + tot + "€";

