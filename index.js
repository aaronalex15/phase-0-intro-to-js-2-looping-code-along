for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

function writeCards(stringNames, nameEvent) {
    let cardsArray = [];

    for (let i = 0; i < stringNames.length; i++) {
        let message = `Thank you, ${stringNames[i]}, for the wonderful ${nameEvent} gift!`;
        cardsArray.push(message);
    }
    return cardsArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}