
const numbers = [100, 55, 15, 300, 20];


let sum = 0;


for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    console.log(`${sum} + ${currentNumber} = ${sum + currentNumber}`);
    sum += currentNumber;
}


console.log(`Итоговая сумма: ${sum}`);


const objectWith500Keys = {};

for (let i = 0; i < 500; i++) {
    objectWith500Keys[`key${i}`] = i;
}

console.log(objectWith500Keys);
