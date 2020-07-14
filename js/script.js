//Lista cognomi
var cognomi = ["Bianchi", "Rossi","Duzioni", "Balsano" , "Verdi"];
//Chiedo il cognome
var cognome = prompt("Scrivi il tuo cognome");
//Cognome capitalized
var cognomeup = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
//Cognome aggiunto a lista cognomi
cognomi.push(cognomeup);
//Lista ordinata alfabeticamente
var lista = cognomi.sort();
//Visualizza lista cognomi ordinata in list items
for (var i = 0; i < lista.length; ++i) {
document.getElementById("lista").innerHTML += "<li>" + lista[i] + "</li>" ;
}

// CON WHILE
var i = 0;

while (i < lista.length) {
  document.getElementById("lista2").innerHTML += "<li>" + lista[i] + "</li>" ;
  ++i;
}
