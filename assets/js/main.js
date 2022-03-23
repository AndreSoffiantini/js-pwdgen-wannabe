// Chiedere all'utente dei dati, generare e stampare una password

// Chiedere all'utente il nome

const first_name = prompt("Inserisci il tuo nome");

// Chiedere all'utente il cognome

const second_name = prompt("Inserisci il tuo cognome");

// Chiedere all'utente il colore preferito

const color = prompt("Inserisci il tuo colore preferito");

// Creare la password con i dati inseriti

const password = `${first_name}${second_name}${color}22`;

// Stampare la password

document.getElementById("password").innerHTML = `La tua password è: ${password}`;