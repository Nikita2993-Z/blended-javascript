//TODO TASK-1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

let styles = ['jazz', 'blues'];
styles.push('rock-n-roll')
styles[1] = 'classic';

function logItem(styles) {
    
    
    
}





//TODO TASK-2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     const userInput = prompt("Введіть імя").toLowerCase();
//     if (array.map(name => name.toLowerCase()).includes(userInput)){
//         alert(`Welcome, ${userInput}`)
//     }else{
//         alert("User is not found");
//     }
// }
//      console.log(checkLogin(["Peter", "John", "Igor", "Sasha"]));


    //TODO TASK-3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//     let totalValue = 0;
//     for (let number of args){
//         totalValue += number;


//     }
//     return totalValue / args.length;
// }
// console.log(caclculateAverage(1, 20, 30, 44, 65));



//TODO TASK-4
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumAdjacentNumbers(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length - 1; i ++){
//         const sum = arr[i] + arr[i + 1];
//         result.push(sum);
//     }
//     return result;
// }

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// console.log(sumAdjacentNumbers(someArr));

//TODO TASK-5


// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];