import { quotes } from "./quotes.js";


const generateRandomNumber = (length) => {
    const randomNumber = Math.floor(Math.random() * (length));
    return randomNumber;
}

const messageGenerator = () => {
    const number1 = generateRandomNumber(quotes.length);
    const number2 = generateRandomNumber(quotes.length);
    const number3 = generateRandomNumber(quotes.length);
    return quotes[number1].message + " " + quotes[number2].message + " " + quotes[number3].message;
}

console.log(messageGenerator());