var cognomi = ["Bianchi", "Rossi","Duzioni", "Balsano" , "Verdi"];
var cognome = prompt("Scrivi il tuo cognome");
var cognomeup = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
cognomi.push(cognomeup);
var lista = cognomi.sort();

console.log(cognomi);
console.log(cognomeup);

for (var i = 0; i < lista.length; ++i) {
  document.getElementById("lista").innerHTML += "<li>" + lista[i] + "</li>" ;
}
