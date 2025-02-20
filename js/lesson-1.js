//TODO TASK-1

// 1 Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

/* let userInput = prompt('Введіть число');
let number = Number(userInput);
if (number === 10) {
    alert("Вірно");
}else{
    alert("Невірно");
}
console.log(number); */


//TODO TASK-2

// 2 У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

/* const min = Math.floor(Math.random() * 60);
console.log('Мінут: ' + min);
if(min>=0 && min <= 14) {
    alert('Перша чверть');
}else if(min >= 15 && min <= 29){
    alert('Друга чверть');
}else if(min >= 30 && min <= 44){
    alert('Третя чверть');
}else if(min >= 45 && min <= 59) {
    alert('Четверта чверть');
} */

    //TODO TASK-3
    
    // Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

/* const num = prompt("Введіть число від 1 до 4");
let result;

switch (num) {
    case '1':
        result = ('Зима');
        alert('Зима')
        break;
        case '2':
            result = ('Весна');
            alert('Весна')
            break;
            case '3':
                result = ('Літо');
                alert('Літо')
                break;
                case '4':
                    result = ('Осінь');
                    alert('Осінь')
                    break;
                    default:
                        
                        alert('Вибачте, але ви маєте ввести значення від 1 до 4 включно')

}
console.log(result);
 */

//TODO TASK-4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

/* const minutesInput = prompt('Введіть кількість хвилин');
const minutes = parseInt(minutesInput);
const hours = Math.floor (minutes / 60);
const remainingMinutes = minutes % 60;
const formattedHours = String(hours).padStart(2,'0');
const formattedMinutes = String(remainingMinutes).padStart(2, '0');
alert(`${formattedHours}:${formattedMinutes}`);

console.log(`${formattedHours}:${formattedMinutes}`); */


//TODO TASK-5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

/* const loginInput = prompt('Введіть ваш логін!');
if(loginInput === null || loginInput === "") {
    alert('Скасовано');
}else if(loginInput === 'Адмін'){
    
    const password = prompt('Введіть ваш пароль');

if(password === null || password === ""){
    alert('Скасовано');
}else if(password === "Я головний"){
    alert("Добрий день!");
}else {
    alert("Невірний пароль!");}
}else {
    alert("Я вас не знаю")
} */


    //TODO TASK-6

    // Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

    /* let i = 0;
    while (i <= 20){
        console.log(i);
        i++;
    } */


    //TODO TASK-7

    //Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
    // мінімальне і максимальне число відповідно.
    // Напишіть цикл всередині функції, який виводить у консоль
    // всі числа від max до min за спаданням.
    // Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
    // і поверніть її з функції.


  /*   function getNumbers (min, max) {
        let evenSum = 0;
       for (let i = max; i >= min; i-- ) {
        
       if (i % 2 === 0) {
        evenSum += i;
       }
       }
       return evenSum;
    }
    
    console.log(getNumbers(1, 10));  */


    //TODO TASK-8

   /*  function min(a, b){
        let totalNumber;
        if(typeof a !== 'number' || typeof b !== 'number') {
            return 'Not a number!';
        }
        return a < b ? a : b;
    }
console.log(min(2, 3)); */

//TODO TASK-9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

/* function isAdult(){
let ageInput = prompt("Введіть ваш вік");
let age = Number(ageInput);

    if(isNaN(age)){
        alert("Ви ввели не число");
        return false;

    }
    if(age >= 18){
        return true;
    } else {
        return confirm("Вам є 18 років?");
    }
}
console.log(isAdult()); */


//TODO TASK-10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

/* function fizzBuzz(num) {
    for( let i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
      

    }else if( i % 3 === 0){
        console.log('fizz');
    }else if( i % 5 === 0){
        console.log('buzz');
    }

    
}
}
fizzBuzz(15); */








  


        //TODO TESTING CONSPECT

        /* const colors = [
            { hex: "#f44336", rgb: "244,67,54" },
            { hex: "#2196f3", rgb: "33,150,243" },
            { hex: "#4caf50", rgb: "76,175,80" },
            { hex: "#ffeb3b", rgb: "255,235,59" },
          ];
          
          const hexColors = [];
          const rgbColors = [];
          for (color of colors){
            hexColors.push(color.hex);
            rgbColors.push(color.rgb);
          }
          console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"] */

/* function getProductPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
    for (const product of products) {
      if (product.name === productName) {
        return product.price;
      }
    }
    return null;
  }
  console.log(getProductPrice("Radar"));   // 1300
console.log(getProductPrice("Grip"));    // 1200
console.log(getProductPrice("Scanner")); // 2700
console.log(getProductPrice("Droid"));   // 400
console.log(getProductPrice("Engine"));  // null
   */

/* function getAllPropValues(propName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];

const values = [];
for (const product of products){
    if(product[propName] !== undefined) {
        values.push(product[propName]);
    }
}
return values;
}
   */

// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products){
//     if(product.name === productName){
      
//       return product.price * product.quantity;
//     }
      
    
//   }
//   return  `Product ${productName} not found!`;
// }
//   console.log(calculateTotalPrice("Blaster"));

// const atTheOldToad = {
//     potions: [] ,
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//       return  `Adding ${potionName}`;
//     }

// }
// console.log(atTheOldToad.addPotion("Power potion"));
// console.log(atTheOldToad.addPotion("Invisibility"));
  

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     },
//   };
  

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       this.potions.push(potionName);
//     }
//   };
//   console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//         let totalPrice = 0;
//         for (const potion of this.potions) {
//             totalPrice += potion.price;
//         }
//         return totalPrice;
//     }
//   };
//   console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//       for (const potion of this.potions) {
//         if(potion.name === oldName){
//           potion.name = newName;
          
//         }
//       }
//     }
//   };
//   function fillArray(min, max){
//     let arr =[];
//     for (let i = min; i <= max; i += 2) {
//         return arr.push(i)
//     }
//   }
//   console.log(fillArray(2, 10));

// function add(...args){
//     return args.reduce((total, value) => total + value, 0);
    
// }
// console.log(add(32, 6, 13, 19, 8));

// function addOverNum (value, ...args) {
// let total = 0;
// for (const arg of args){
//     if(arg > value) {
//         total += arg;
//     }
//     return total;

// }
// }
// function getExtremeScores(scores) {
 
//  const best = Math.max(...scores);
//  const worst = Math.min(...scores);

//  return {best, worst};
// }

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {...defaultSettings, ...overrideSettings };

// function sumArray(arr) {
//     let total = 0;
//     for (let num of arr) {
//         total += num;
//         console.log(num);
//     }
// return total;
// }
//     console.log(sumArray([1, 2, 3, 4]));

// function findMax(arr) {
// let max = arr[0];
// for (let num of arr){
//     if(num > max){
// max = num;
//     }
    
// }
// return max;
// }

// function findMax(arr) {
//     return Math.max(...arr);
// }



// console.log(findMax([10, 5, 20, 33]));

// function filterEven(arr) {
//     let point = [];
//     for (let num of arr) {
//         if(num % 2 === 0){
//             point.push(num);
//         }
//     }
//     return point;
// }
// console.log(filterEven([1, 2, 3, 4, 5, 6]));

// function reverseArray(arr) {

// return arr.reverse();

// }
// console.log(reverseArray([1, 2, 3, 4])); ;

// function countOccurrences(arr, elem) {
//     let totalCycl = 0;
//     for (let num of arr){
//         if(num === elem) {
//             totalCycl++;
//         }
//     }
//     return totalCycl;
// }
// console.log(countOccurrences([1, 2, 3, 2, 4, 2], 4));



  
//   function calculateCartTotal(cart) {  
//     let total = 0;
//     for (const product in cart){
//         const item = cart[product];
//         total += item.price * item.quantity;

//     }
//     return total;
// }
// const cart = {
//     apple: { price: 2, quantity: 5 },     // 1 * 5 = 5
//     banana: { price: 10, quantity: 10 }  
//   };  // 0.5 * 10 = 5
// console.log(calculateCartTotal(cart));

// function calculateCartTotal(point){
//     let total = 0;
//     for (const product in point){
// const item = point[product];
//  total += item.price + item.quantity;
//     }
//     return total;
// }
// const point = {
//         apple: { price: 2, quantity: 5 },     // 1 * 5 = 5
//         banana: { price: 10, quantity: 10 } 
//     };

// console.log(calculateCartTotal(point));

// 

// const mathOperations = {
//     add(a, b) {
//         return a + b;
//     },
//     subtract (a, b) {
//         return a - b;
//     },
//     multiply (a, b) {
//         return a * b;
//     },
//     divide(a, b) {
//         if( b === 0){
//             return null;
//         }else{
//             return a / b;

//         }
//     }
// }
// console.log(mathOperations.add(5, 3));       // 8
// console.log(mathOperations.subtract(5, 3));  // 2
// console.log(mathOperations.multiply(5, 3));  // 15
// console.log(mathOperations.divide(6, 3));    // 2
// console.log(mathOperations.divide(6, 0));    // null

// const inventoryManager = {
//  items: [],
//  addItem(item){
//     this.items.push(item);
//  },
//  removeItem(itemName) {
//     const index = this.items.findIndex(item => item.name === itemName);
//     if (index !== -1) {
//         this.items.splice(index, 1);
//     }
 
 
// },

// getInventory() {
//     return this.items;
// },
// getTotalValue() {
// let totalValue = 0;
// for (const item of this.items) {
//     totalValue += item.price * item.quantity;
// }
// return totalValue;
// }
// };



// console.log(inventoryManager.getInventory());
// // Выведет массив с товарами
// console.log(inventoryManager.getTotalValue());
// // Выведет 5500

// inventoryManager.removeItem("Laptop");
// console.log(inventoryManager.getInventory());
// // После удаления "Laptop" массив содержит только товар "Phone"

// function getOnlineFriends(allFriends) {
//     const onlinefriends = [];
    
//     for (const item of allFriends){
//         if(item.online){
//             onlinefriends.push(item);
//         }
//     }
//     return onlinefriends;
// }
// function filterEvenNumbers (arr) {
//     let sum = [];
//     for (let number of arr) {
//         if (number % 2 === 0){
//             sum.push(number);
//         }
//     }
//     return sum;
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// function countOccurrences(arr, value) {
//     let total = 0;
//     for (let point of arr){
//         if(point === value){
//             total++;
//         }
        
//     }
//     return total;
// }
// console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));

// student = {
//     name: "Alice",
//     grades: [],
//     addGrade(grade) {
//         this.grades.push(grade);
//     },
//     getAverage(){
//         let total = 0;
//         for (let i = 0; i < this.grades.length; i++ ){
//             total += this.grades[i];
//         }
//         if(this.grades.length === 0){
//             return 0;
//         }
//         return Number((total / this.grades.length).toFixed(2));
//     },
//     getInfo(){
//         return `${this.name} has an average grade of ${this.getAverage()}`;
//     }
// };
// student.addGrade(85);
// student.addGrade(90);
// student.addGrade(78);

// console.log(student.getAverage()); // Должно вывести среднее значение (84.33, например)
// console.log(student.getInfo());
// const friend = [
//     {name: "Rose", online: false},
//     {name: "Joey", online: true},
//     {name: "Chandler", online: false},
//     {name: "Phoebe", online: true},
//     {name: "Monica", online: true},
//     {name: "Rachel", online: false},
// ];
// function findName (allFriends, friendName){
//     for (let friends of friend){
//         if(friends.name.toLowerCase() === friendName.toLowerCase()){
//             return friends.name;
//         }
        
//     }
//     return "not found"
// }
//  console.log(findName(friend, "ROSE"));
// function getNames(allFriends){
// const allNames = [];
// for(let names of allFriends){
//     allNames.push(names.name);
// }
// return allNames
// }
// console.log(getNames(friend));

// function getOnlineFriends(allFriends) {
//     const onlineFriends = [];
//     for (let names of allFriends){

//         if(names.online){
//         onlineFriends.push(names);

//         }
        
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriends(friend));


// const stones = [
//     {name: "Смарагд", price: 1300, quantity: 4},
//     {name: "Діамант", price: 2700, quantity: 3},
//     {name: "Сапфір", price: 400, quantity: 7},
//     {name: "Щебінь", price: 200, quantity: 2},
//     {name: "Сапфір", price: 400, quantity: 7},
// ];

// function calcTotalPrice(stones, stoneName) {
// let sum = 0;
// for (let item of stones){
//     if(item.name === stoneName){
//         sum += item.price * item.quantity;

        
//     }
    
// }
//  return sum;

// }
// console.log(calcTotalPrice(stones, "Сапфір"));

// function makePizza(result) {
//     return "Your pizza is being prepared, please wait.";
//   }
  
//   const result = makePizza();
//   const pointer = makePizza;

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
// callback(pizzaName);
//     callback(pizzaName);
//     return;
//   }
  

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// numbers.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`);
//   });
  
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (number) {
//         totalPrice += number;
//     });
//     return totalPrice; 
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//     let result = [];
  
//  numbers.forEach(function(number) {
// if(number > value){
//     result.push(number);
// }
//  })
// return result;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
  
// console.log(calculateTotalPrice(51, 78));
    

// const calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }

//   const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach(item => totalPrice += item);
//     return totalPrice;
//   };
  //todo 
// const multiply = (a, b) => a * b;

// console.log(multiply(3, 4));

// const filterGreaterThan = (numbers, n) => numbers.filter(num => num > n);

// console.log(filterGreaterThan([2, 5, 8, 1, 10], 5)); // Должно вывести [8, 10]

// const toUpperCaseArray = (fruits) => fruits.map(str => str.toUpperCase());

// console.log(toUpperCaseArray(["apple", "banana", "cherry"]));

// function changeEven(numbers, value) {
//  return numbers.map (number => {
//     return (number % 2 === 0) ? number + value :number;
//  });
// }
// console.log(changeEven([17, 24, 68, 31, 42], 100));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map( planets => planets.length);

// console.log(planetsLengths);


