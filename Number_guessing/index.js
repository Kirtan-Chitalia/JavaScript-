// Play on console 

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts =0;
let guess;
let running = true;

while (running) {
    guess =window.prompt(`Guess a number between ${min} and ${max}:`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number.");
    }
    else if (guess < min || guess > max) {
        window.alert("Please enter a valid number.");
    }
    else {
        attempts++;
        if(guess< randomNumber) {
            window.alert("Too low!");
        } else if (guess > randomNumber) {
            window.alert("Too high!");
        } else {
            window.alert(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
            running = false;
        }
    }
}