/*============================= Оголошення змінних =============================*/
//---------------------------------- const;

const value = 24; // присвоєне значення зачинене 

//value - значення


//---------------------------------- let;

let value = 24; // присвоєне значення не зачинене 


// let value;
// value = 24;
// value = `Hello World`

let discount = 0;
if(totalSpend > 5000 ) {
    discount = 5;
}


console.log(value);

/*============================= Примітивні типи даних =============================*/

//---------------------------------- Number

let value = 25;
let value = 45.5;


let value = "5";
value = Number(value);

console.log(typeof value);

// typeof - оператор, визначає тип даних

//---------------------------------- String
// Типи рядків '' "" ``
const str = 'Peter say : "Hello World"';
const str = "Peter say : 'Hello World'";
console.log(str);

//шаблонні лапки для інтерполяції
const str = `Total ${45+25}`

const total = 45 + 25;
const str = `Total ${total}`

console.log(str)

//Канкатенація - поєднання рядків
const total = 45 + 25;
const str = 'Total' + ' ' + total; // < + '' > це спосід додавання пробілу
console.log(str);

//console.log(45 + 20 + '6' + 11) = console.log('65611')


//---------------------------------- Boolean ( true, false )
//true = 1 , false = 0
console.log(45 > 40);

//---------------------------------- underfined
виділено, але не зрозуміло
//------------------------------------- null
даного значення взагалі не існує, порожньо


/*======================= Комунікація з користувачем та можливість 
==========================відображення якогось результату */

const message = prompt("Введіть імʼя");
console.log(message);
// prompt - аналог input у HTML


console.log('Привіт, вчи JS' , 45 + 10);
alert('Привіт, вчи JS');
// все що викликає модальне вікно, блокує виконання подальшого коду


const result = confirm('Будеш вчити JS ?');
console.log(result);
// можна або погодитись або відмінити


/*========================== Основні оператори порівняння ======================= */

// >
console.log(25 > 21); true
console.log(25 > 25); false

// <
console.log(25 < 21); false
console.log(19 < 21); true

// ==
console.log(5 == '5');
console.log('1' == true); 1 == 1

// ===
console.log("5" === "5"); true
console.log("5" === 5); false

// <=
console.log(4 <= 5);
console.log(4 <= Number('5')); //примусово конвертувати до типу числа

// >=
console.log(4 >= 5);
console.log(4 >= Number('5'));


//  ???
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
// ???


// != не строге неДорівнює
console.log("4" != 5); //true
console.log(5 != 5); //false


// !== строге неДорівнює, не приводить до спільних типів данних
console.log("5" !== 5); //true



// Приклади роботи
console.log(1 == true); // +
console.log(1 === true); // -
console.log('0' == false); // +
console.log('0' === false); // -
console.log('papaya' < 'pApaya'); // -   unicode table - таблиця для визначення коефіцієнту букв
console.log('papaya' > 'pApaya'); // +
console.log('a' < 'aAbBc'); // +
console.log('a' < 'Aabc'); // -
console.log('Papaya' === 'papaya'); // -



/*====================== Значення які завжди будуть конвертовані 
======================== до false (Обовʼязково!!!) */

// // // 0 (число нуль)
console.log(Boolean(0)); // false
// // // " " (порожній рядок)
console.log(Boolean(" "));
// // // NaN
console.log(Boolean(NaN));
// // // undefined
console.log(Boolean(undefined));
// // // null
console.log(Boolean(null));
// // false
console.log(Boolean(false));



console.log(!true); // метод інверсії, розвертає true у false... оператор інверсії - !
console.log(!!1); // метод подвійної інверсії ???


// унарний плюс
console.log(+ '1'); // унарний плюс перетворює рядок у номер
console.log(Number('18'));

// бінарний плюс
console.log(1 + 1); // 1(опаранд) +(оператор) 1(опаранд)


console.log(+'1' === 1); //true
console.log(Number('1') === 1); //true



/**=========================== Методи роботи з числами ( тип даних Number ) =========================================*/

 const str = "25.7a32px";
 console.log(Number(str)); // Nan

//---------------- Number.parseInt() ----------------- відокремити ціле число

console.log(Number.parseInt(str)); // 25

//---------------- Number.parseFloat() --------------- до тих пір поки може конвертувати до числа, враховуючи крапку

console.log(Number.parseFloat(str)); // 25.7

//---------------- Number.isNaN()  та  метод isNaN() ---------- сам собі ніколи не рівен

console.log(NaN === NaN); // false
console.log(Number.isNaN());

//----------------------------- Клас Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const value = 11.99;
console.log(Math.floor(value)); // 11 - приводить до меншого цілого значення

const value = 11.05;
console.log(Math.ceil(value)); // 12 - приводить до більшого цілого значення

console.log(Math.round(value)); // округлення за математичними правилами

console.log(Math.pow(5, 4)); // для піднесення у ступінь // 5 y 4 ступені
// console.log(Math.pow(5, 4)); = console.log(5 ** 4); аналогічно



/**=============================== Функція ======================== */
// hoisting https://codeguida.com/post/19

//--------------- Function expression ---------------- приклад анонімної функції
const add = function(val1 , val2) {
    const
    return val1 + val2
}

//--------------- Function declaration --------------- має власне ім'я
function add(val1 , val2) {
    return val1 + val2;
}










































