#! /usr/bin/env node
import inquirer from "inquirer"

// 1. computer will generate random number

// 2. user input for guessing number

// 3. compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);

const guessedNumber = await inquirer.prompt(
    [
        {
            name : "userguessednumber",
            type : "number",
            message : "please guess a number between 1 - 10 "
        }
    ]
);

if (guessedNumber.userguessednumber === randomNumber) {
    console.log("Congratulations you guessed right number");
} else{
    console.log("you guessed wrong number");
}