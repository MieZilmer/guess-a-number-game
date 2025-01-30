`use strict`;

let gameRunning = true;

{
if (gameRunning === false) {
    alert(`Du kan ikke spille lige nu`);
} else {
    let userNumber = parseInt(window.prompt(`Skriv et number mellem 1 & 100`));
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let maxAttempts = 1;

    while (userNumber !== randomNumber && attempts < maxAttempts) {
        if (userNumber < randomNumber) {
            userNumber = parseInt(prompt(`Nummeret er HØJERE! Prøv igen!`));
        } else {
            userNumber = parseInt(prompt(`Nummeret er LAVERE! Prøv igen!`));
        }
        attempts++;
    }

    if (userNumber === randomNumber) {
        alert(`Tillykke! Du gættede tallet på ${attempts} forsøg!`);
    } else {
        alert(`Du tabte, det rigtige nummer var: ${randomNumber}`);
    }
}
}