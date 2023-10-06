// Создать массив из значений 100, 55, 15, 300, 20.
const numbers = [100, 55, 15, 300, 20];

// Инициализировать переменную для хранения суммы.
let sum = 0;

// Пройти по массиву и суммировать значения с пояснениями в консоли.
for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    console.log(`${sum} + ${currentNumber} = ${sum + currentNumber}`);
    sum += currentNumber;
}

// Вывести результат суммирования в консоль.
console.log(`Итоговая сумма: ${sum}`);

// Создать объект с 500 ключами (просто для дополнительной практики).
const objectWith500Keys = {};

for (let i = 0; i < 500; i++) {
    objectWith500Keys[`key${i}`] = i;
}

console.log(objectWith500Keys);