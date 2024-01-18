"use strict";
// // cycles 

// let i = 1;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// }
// while(i < 10);

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     if (i%2===0){
//         continue;
//         //break;
//     }
//     console.log(i);
// }

// let result = '';
// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }
// console.log(result);

// //задачи
// // Задачи:

// // При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// for (let i = 20; i > 11; i--) {
//     console.log(i);
//     if (i == 13) {
//         break;
//     }
// }
// // При помощи цикла for выведите чётные числа от 2 до 10 включительно

// for (let i = 2; i < 11; i++) {
//     if (i%2===1){
//         continue;
//         //break;
//     }
//     console.log(i);
// }

// // Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// //  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }


// let i = 2;
// while (i <16 ) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
    
// }
// // Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// let arr = [];
// for (let i = 5; i < 11; i++) {
//     arr[i-5] = i;
// }
// console.log(arr);

// // функции

// //function declaration

// function ret() {  //обьявляется до начала выполнения кода, можно вызвать до обьявления
//     let num = 50;
//     return num;
// }

// //function expression

// const logger = function() {  //созхдается когда доходит поток кода, можно вызвать после обьявления
//     console.log('test');
// };


// //стрелочная

// const calc = (a, b) => a + b; //короткая запись
// const calc2 = a => a + b; //короткая запись 1 аргумент
// const calc3 = (a, b) => {return a + b}; //стрел функция не имеет контекста вызова (this)

// //return 

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
//     console.log(1); //не будет работать после return
// }

// function promo(result) {
//     console.log(result * discount); 
// }

// const res = convert(500, usdCurr);
// promo(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return /// останавливает выполнение кода на 3, вернет андефайнд
//     }
// }
// test();

// function sayHello(name) {
//     return `Привет ${name}`;
// }

// console.log(sayHello('Олег'));

// function returnNeighboringNumbers(num) {
//     const arr = [num-1, num, num+1];
//     return arr;

// }
// const neiNum = returnNeighboringNumbers(100000);
// console.log(neiNum);




// function getMathResult(step, times) {
//     if (times <= 0 || typeof(times) !== 'number' ){
//         return step;
//     }

//     let res = 0;
//     let result ='';
//     for (let i = 1; i <= times; i++) {
//         res += step;
//         if (i < times ) {
//             result += `${res}---`;
//         } else {
//             result += res;
//         }
        
//     }
//     return result;
// }

// console.log(getMathResult(7, 7));

// ///методы и свойства строк и чисел

// const fruit = "Some fruit";
// console.log(fruit.indexOf('fruit')); ///находит с какого индекса начинается фрут
// console.log(fruit.indexOf('q')); ///вернет -1

// const logg = 'hello world';
// console.log(logg.slice(6, 11)); //веренет world, (ментоды не изменяют исходный стринг)

// console.log(logg.substring(6, 11)); //тоже самое но нельзя указать отриц числа, но можно перв числ > второго

// console.log(logg.substr(6, 5)); //с 6 символа вырезать 5

// const num = 12.2;
// console.log(Math.round(num)); //округлить

// const test2 = "12.2px";
// console.log(parseInt(test2)); //12 число
// console.log(parseFloat(test2)) //12.2 

// //объем и площадь полной поверхности куба

// function calculateVolumeAndArea(num) {
//     if (!Number.isInteger(num) ||  num <= 0) {
//         return `При вычислении произошла ошибка`;
//     }
//     const vol = Math.pow(num, 3),
//           area = 6 * Math.pow(num, 2);
//     return `Объем куба: ${vol}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(10));


// // номер купе по переданному ей номеру места


// function getCoupeNumber(place) {
   
//     if (!Number.isInteger(place) || place < 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (place > 36 || place === 0) {
//         return 'Таких мест в вагоне не существует';
//     }
    
//     return Math.ceil(place / 4);
// }

// console.log(getCoupeNumber(1));


// function getTimeFromMinutes(minutes) {
//     let getHours = Math.floor(minutes / 60),
//         getMinutes = minutes % 60;

//     return `Это ${getHours} час и ${getMinutes} минут`;
// }
// console.log(getTimeFromMinutes(161));

// function fib(count) {
//     let prev1 = 0;
//     let prev2 = 1;
//     let res;
//     let result = '0 1';
//     for (let i = 0; i < count - 2; i++) {
//         res = prev1 + prev2;
//         result += ` ${res}`;
//         prev1 = prev2;
//         prev2 = res;
//     }

//     return result;
// }
// console.log(fib(12)); 

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5);


// // callback functions

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('я прошел урок');
// }

// learnJS('JavaScript', done);

// //. Объекты, деструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     testMethod: function() {
//         console.log('test');
//     }
// };

// // delete options.colors.bg;

// // console.log(options);

// for (let key in options) { //подходит для перебора обьекта
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`свойство ${key} имеет значение ${options[key]}`);

//     }
    
// }
// console.log(Object.keys(options).length);

// const {border, bg} = options.colors; //деструктуризация обьекта ES6

// //. Массивы и псевдомассивы

// const arrr = [1, 2, 3, 6, 8];

// // arrr; //удаляет последний элемент

// // arrr.push(10); //добавляет 10 в конце

// // console.log(arrr);

// // for (let i = 0; i < arrr.length; i++) {
// //     console.log(arrr[i]);
// // }

// // for (let value of arrr) { //подходит для перебора массива/псевдомассива, строки. 
// //     console.log(value);   //преймущество перед forEach: работает с break/continue
// // }

// arrr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = "1, 12, erterte, 45trt, ///, werwe"; //преобразовать в массив строку
// const products = str.split(", "); //указать разделитель
// console.log(products);
// console.log(products.join("; ")); //соеденить в строку через ;

// const arr2 = [11, 10, 23, 6, 8];

// //arr2.sort(); //сортирует как строку

// arr2.sort(compareNum); //сортировка чисел
// console.log(arr2);

// function compareNum(a, b) { 
//     return a - b;
// }

// // 35. Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //создается ссылка а не копия

// copy.a = 10;

// console.log(copy); //одиаковый результат "а" изменилась везде (передача по ссылке а не значению, как в простых типах данных)
// console.log(obj);

// function copy2(mainObj) { //создает поверхностную копию обьекта (во вложенностях будет снова создаватся ссылка на главный обьект)
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy2(numbers);

// newNumbers.a = 10;//заменяет значение только в копии
// newNumbers.c.x = 10; //изза сложной структуры снова создает ссылку (значение меняется везде)

// console.log(newNumbers);
// console.log(numbers);


// const numbers2 = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const add = {
//     d: 17,
//     e: 20
// };

// //console.log(Object.assign(numbers2, add)); // добавляет второй обьект в первый

// const clone = Object.assign({}, add); //создание поверхностной копии
// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); //копирует массив

// newArray[1] = 'adsdsdasdasd';

// console.log(newArray);
// console.log(oldArray);

// //ES6 - ES8 спред операторы

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num2 = [2, 5, 7];

// log(...num2);

// const array2 = ['a', 'b'];

// const newArray2 = [...array2]; // поверхностная копия

// const obj2  = {
//     one: 1,
//     two: 2
// };

// const newObj2 = {...obj2}; 

// //Задачи на работу с объектами

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             python: '40%',
//             java: '5%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(){
//         const {languages} = this.skills,
//               langString = languages.join(" ");
//         return `Мне ${this.age} и я владею языками: ${langString.toUpperCase()} `;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs());

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// //console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let result ='';
//     for (let name in programmingLangs) {
//         result += `Язык ${name} изучен на ${programmingLangs[name]}\n`;
//     }
//     return result;
// }  
// console.log(showProgrammingLangs(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(items) {
//     const itemsString = items.join(" ");
//     if (!itemsString) {
//         return 'Семья пуста';
//     } 
//     return `Семья состоит из: ${itemsString}`;
// } 

// console.log(showFamily(family));


// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// const favoriteCities = ['lisbon', 'rome', 'milan', 'dublin'];

// function standardizeStrings(cities) {
//     cities.forEach(function(item, i) {
//         console.log(`${i+1}. ${item}`);
//     });
// }
// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(string) {
//     const str = string.split('');
//     let strRev = [],
//         j = str.length - 1;
//     for (let i = 0; i < str.length; i++) {
//         strRev[i] = str[j];
//         j--;
//     }
//     return strRev.join('');

// }
// console.log(reverse(someString));

// const baseCurrencies = [],
//       additionalCurrencies = ['UAH', 'RUB', 'CNY'],
//       allCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(allCurr, unavCurr) {
//     let result ="Доступные валюты:";

//     allCurr.forEach(function(item){

//         if (item !== unavCurr) {
//             result += `\n${item}`;
//         }
    
//     });
//     return result;
// }

// console.log(availableCurr(allCurrencies, 'EUR'));


// // Основы ООП, прототипно-ориентированное наследование


// //метод на строке создает обьект

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('hello');
//     }
// };

// // const john = {
// //     health: 100
// // };

// ///john.__proto__ = soldier; не используется

// //Object.setPrototypeOf(john, soldier); // когда john уже существует

// const john = Object.create(soldier); // создается обьект с прототипом soldier

// console.log(john.armor);

// john.sayHello();


// const shoppingMallData = {
//     shops: [
//         {
//             width: 8,
//             length: 6
//         },
//         {
//             width: 12,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 11
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000,

//     getTotalVolume: function() {
//         let totalArea = 0;
//         this.shops.forEach((item, i) => {
//             totalArea += item.width * item.length;
//         });
//         return totalArea * this.height;
//     }
// };

// function isBudgetEnough() {
//     const volume = shoppingMallData.getTotalVolume(),
//           money = shoppingMallData.moneyPer1m3,
//           budget = shoppingMallData.budget;
    
//     if (money * volume <= budget) {
//         console.log(`Бюджета достаточно. к оплате ${money * volume})`);
//     } else if (money * volume > budget){
//         console.log(`Бюджета недостаточно. к оплате ${money * volume})`);
//     }

// }
// isBudgetEnough();

// //Динамическая типизация в JS

// // в стринг
// String(null);

// 5 + 'px';

// //в число

// Number('4');

// + '4';

//parseInt('15px', 10);

// // boolean

// 0, '', null, undefined, NaN; //false

// Boolean('4');

// console.log(!!'44444'); //true

// // Замыкание и лексическое окружение

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// //Получение элементов со страницы


// const box = document.getElementById('box');

// const btn = document.getElementsByTagName('box')[1];
// const btns = document.getElementsByTagName('box');
// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');

// const hearts = document.querySelectorAll('.heart'); // есть метод forEach

// const heart = document.querySelector('.heart'); //первый элемент



// const btn = document.querySelector('#btn');

// // btn.onclick = function() { //непрактичный способ, второй назначенный перетирает первый
// //     alert('click');
// // };

// // btn.addEventListener('click', () => { //все назначенные на одну кнопку работают в порядке очереди
// //     alert('click');
// // });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);;
// });

// console.log(btn);

// const deleteElement = (e) => {
//     e.target.remove();
// };

// btn.addEventListener('click', deleteElement); //срабатывает сразу на самом вложенном элементе
// btn.removeEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//     e.preventDefault(); //отменить стандартное поведение браузера

//     console.log(e.target);
// });

// btn.forEach(item => {
//     item.addEventListener('click', deleteElement, {once: true}); //третий аргумент опция
// });


// 46. Навигация по DOM - элементам, data-атрибуты, преимущество for/of

// console.log(document.body.childNodes); //показать все узлы, не тольок элементы но и переносы и тд

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling); //соседняя нода

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //соседний элемент

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

// Рекурсия

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }


// console.log(pow(2, 4)); //степень


// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     }
// };

// // function getTotalProgressByIteration(data) {
// //     let total = 0;
// //     let students = 0;

// //     for (let course of Object.values(data)) {
// //         if (Array.isArray(course)) {
// //             students += course.length;

// //             for (let i = 0; i < course.length; i++) {
// //                 total += course[i].progress;
// //             }
// //         } else {
// //             for (let subCourse of Object.values(course)) {
// //                 students += subCourse.length;

// //                 for (let i = 0; i < subCourse.length; i++) {
// //                     total += subCourse[i].progress;
// //                 }
// //             }
// //         }
// //     }

// //     return total / students;
// // }

// // console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];

//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);


// function factorial(n) {
//     if (n === 1) {
//         return n;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));

// function factorial(n) {
//     if (Math.round(n) != n || typeof(n) != 'number'){
//         return 'Error';
//     } else if (n <= 0){
//         return 1;
//     }else{
//         if (n === 1) {
//             return n;
//         } else {
//             let result = n * factorial(n - 1);
//             return result;
//         }
//         return result;
//     }
// }

//События на мобильных устройствах

// touchstart
// touchmove
// touchend
// touchenter
// toucjleave
// touchcancel

// const box = document.querySelector('.box');

// box.addEventListener('touchstart', (e) => {
//     e.preventDefault();

//     console.log('Start');
//     console.log(e.touches); //количество касаний
// });

// box.addEventListener('touchmove', (e) => {
//     e.preventDefault();

//     console.log(e.targetTouches[0].pageX); //координаты первого пальца
// });


//touches
//targetTouches //методы ивента
//changedTouches


// Оператор нулевого слияния (Nullish, ??) ES11

// const box = document.querySelector('.box');
// const newH = 100;
// const newW = 400;

// function changeParams(elem, h, w){
//     elem.style.height = `${h || 200}px`; //если Н фолс то 200, но также сработает если 0
//     elem.style.height = `${w || 200}px`; //можно использовать ??
// }
// changeParams(box, newH, newW);

// let userName;
// let userId;

// console.log(userName ?? 'User'); //проверяет только на null и undefined
// console.log(userName ?? userId ?? 'User'); //если нет юзернейм и юзер ид тогда "юзер"

//?? нельзя использовать с &&



//Оператор опциональной цепочки (?.) ES11


// const boxx = document.querySelector('.box');
// const block = document.querySelector('.block'); 

// console.log(block); //нет на странице NULL


// console.log(block.textContent); // ошибка

// console.log(1 + 2); // не выведется изза ошибки

// console.log(block?.textContent); // вернет андефайнд код продолжит выполнятся, работает на чтение, на запись нет

// const userData = {
//     name: 'Ivan',   //в запросе и не хватает данных
//     age: null
// };

// if (userData && userData.skills && userData.skills.js) { //решение проблемы через условие
//     console.log(userData.skills.js);
// }

// console.log(userData.skills?.js); //тоже самое, "?" проверяет то что справа

// userData.say?.(); //если нет метода вернет андефайнд

//Живые коллекции и полезные методы

// const boxesQuery = document.querySelectorAll('.box'); //возвращает нодлист. есть свои методы
// const boxesGet = document.getElementsByClassName('box'); //взвращает ХТМЛколлекцию. нет методов
// console.log(document.body.children); //тоже ХТМЛколлекцию псеводомассив без методов

// boxesQuery[0].remove();
// boxesGet[0].remove();

// console.log(boxesQuery); //вернет все элементы существ на момент создания квери селектор (статичная коллекция)
// console.log(boxesGet); // вернет текущее состояние псевдомассива без без удаленных 2х элементов (живая коллекция)

// console.log(Array.from(boxesGet)); //преобразовал псевдомассив без методов, в обычный массив с методами(статичный)

// boxesQuery.forEach(box => {
//     if (box.matches('.this')) console.log(box); //ищет селектр внутри элемента
// });

// console.log(boxesQuery[0].closest('.wrapper'));//ищет ближайшего родителя //есди не находит - null

//Тип данных Symbol

//свойствами обьектами могут быть только строки и символы

// const obj = {
//     'name': 'test',
//     [Symbol('id')]: 1 //скрыт, нельзя обратится по описанию если нет переменной, приватное свойство, не видно при переборе
// };

// let id = Symbol("id"); 
// obj[id] = 1;


// //let id2 = Symbol('id');
// const obj2 = {
//     'name': 'test',
//     [Symbol('id')]: 1,
//     getId: function() {
//         return this[id];
//     }
// };

// console.log(obj2.getId());
// console.log(Object.getOwnPropertySymbols(obj2));
// console.log(obj2[Object.getOwnPropertySymbols(obj2)[0]]);


// const myDB = {
//     movies: [],
//     actors: [],
//     [Symbol("id")]: 123
// };

// myDB.id = '34255345345435'; //случайно пеерезаписали ИД

// console.log(myDB.id);
// console.log(myDB); //{ movies: [], actors: [], id: '34255345345435', [Symbol(id)]: 123 }

// Дескрипторы свойств и полезные методы объектов

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyData: function() {
//         console.log(`${this.name} ${this.surname}}`);
//     }
// };

//console.log(Object.getOwnPropertyDescriptor(user, 'name')); //{ value: 'Alex', writable: true, enumerable: true, configurable: true }

//Object.defineProperty(user, 'name', {writable: false});
//user.name = "weferfreferfrffe"; //не перезапишет

//Object.defineProperty(user, 'name', {value: 'gender'}); //создаст свойство с фолс для всех дискрипторов

// Object.defineProperty(user, 'showMyData', {enumerable: false}); //скрыть метод для цикла

// for (let key in user) {
//     console.log(key);
// }

// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// });

//writable
//enumerable
//configurable

// по дефолту у нового обьекта все тру


//Итерируемые конструкции


// const userr = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyData: function() {
//         console.log(`${this.name} ${this.surname}}`);
//     }
// };

// const arr = ['a', 'b', 'c'];

// for (let key in arr) { //for in получает сам ключ key = 0, 1, 2
//     console.log(arr[key]); //for in не всегда перебирает по порядку массивы и строку!!
// }

// for (let key of arr) { //for of получает значение key = a, b, c
//     console.log(key); ////for of для итерируемых обьектов (массив строка, set, map, дом коллекции) не подходит для обьектов!
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// salaries[Symbol.iterator] = function() {
//     return {
//         current: this.john,
//         last: this.ann,

//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {done: false, value: this.current};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// };

// for (let res of salaries) {
//     console.log(res);
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());



// // Map/////////////////////

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];

// const map = new Map();

// // const map = new Map([
// //     [{paper: 400}, 8000]
// // ]);

// map.set(shops[0], 5000)
//    .set(shops[1], 3000)
//    .set(shops[2], 7000); //или с помощь forEach

// //console.log(map); //map это массив масивов

// // console.log(map.get(shops[0]));
// // console.log(map.has(shops[0]));
// // map.delete(key);
// // map.clear();
// // map.size();
// // map.keys();

// // for (let shop of map.keys()) {
// //     console.log(shop);
// // }

// // const goods = [];

// // for (let shop of map.keys()) {
// //     goods.push(Object.keys(shop)[0]);
// // }

// // for (let price of map.values()) {
// //     console.log(price);
// // }

// // for (let price of map.entries()) {
// //     console.log(price);
// // }

// // for (let [shop, price] of map.entries()) {
// //     console.log(shop, price);
// // }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// }); 

// const salaries2 = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const salariesMap = new Map(Object.entries(salaries2));

// const newSalariesObj = Object.fromEntries(salariesMap);




// //SET/////////// массив где каждое значение встречается однажды

// //const arr = [1, 1, 2, 2, 4, 5, 6, 5];

// // const set = new Set(arr);

// // console.log(set);

// const arr = ['alex', 'ann', 'oleg', 'alex'];

// const set = new Set(arr);

// set.add('ivan')
//    .add('oleg');

// // console.log(set);

// // set.delete(value);
// // set.has(value);
// // set.clear();
// // set.size;

// //for (let value of set) console.log(value);
// // set.forEach((value, valueAgaing, set) => {
// //     console.log(value, valueAgaing);
// // });

// console.log(set.values());
// console.log(set.keys()); //возвращает тоже самое что и вельюс кейс=вельюс в сет
// console.log(set.entries());

// function unique(arr) {
//     return Array.from(new Set(arr)); //массив уникальных данных из сет
// }

// //BigInt///////////////

// console.log(Number.MAX_SAFE_INTEGER);

// //const bigint = 123423423423423423423423423423423423432434234n;

// const sameBigint = BigInt(123423423423423423423423423423423423432434234);

// // нельзя использовать с Math и обычными числами

// console.log(5n / 2n); // вернет 2n, деление бигинт вернет округленное значение

// console.log(5n > 2); //можно сравнивать c обычным числом

// let bigint = 1n;
// let number = 2;


// console.log(bigint + BigInt(number));

// console.log(Number(bigint) + number); //если число > MAX_SAFE_INTEGER - обрежется до MAX_SAFE_INTEGER



// // задача на вычисление количества страниц

// function amountOfPages(summary){
//     let result = '';

//     for (let i = 1; i <= summary; i++) {
//         result+=i;
//         if (result.length == summary) {
//         return i;
//         }
//     }
// }

// console.log(amountOfPages(0));




// function amountOfPages(summary){
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//         n = i;
//         break;
//       }
//     }

//     return n;
//   }

//   console.log(amountOfPages(0));




// //   function deepCount(a){
// //     console.log(a.length);
// //   }


// ///ClassList и делегирование событий

// const btns = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.btn-block');

// // // console.log(btns[0].classList.length);
// // // console.log(btns[0].classList.item(1));
// // // console.log(btns[0].classList.add('red'));
// // // console.log(btns[0].classList.remove('blue'));
// // // console.log(btns[0].classList.toggle('red'));

// // if (btns[1].classList.contains('red')) {
// //     console.log('red');
// // }


// btns[0].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }
//     btns[1].classList.toggle('red');
// });

// // console.log(btns[0].className);


// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('hello');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches('button.red')) {
//         console.log('hello');
//     }
// });


// // Скрипты и время их выполнения. setTimeout и setInterval

// // const timerId = setTimeout(function() {
// //     console.log('hello');
// // }, 2000);

// // const timerId = setTimeout(function(text) {
// //     console.log(text);
// // }, 2000, 'Hello');

// // const timerId = setTimeout(logger, 2000);





// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// // btn.addEventListener('click', () => {
// //     timerId = setInterval(logger, 500); //сет интервал не ждет окончания выполнения функции
// // });

// // clearInterval(timerId);

// // function logger() {
// //     if (i === 3) {
// //         clearInterval(timerId);
// //     }
// //     console.log('text');
// //     i++;
// // }

// // let id = setTimeout(function log() {
// //     console.log('hello');
// //     id = setTimeout(log, 500);
// // }, 500);


// /// 68. Работа с датами


// const currentDate = new Date(); //текущая дата/время

// const now = new Date('2020-05-01'); //сделать дату из строки
// Date.parse('2020-05-01');//сделать дату из строки методом, тоже самое
// const now = new Date(2020, 5, 1, 20);//дату из чисел, 2020-06-01T17:00:00.000Z
// const now = new Date(1234242213434); //2009-02-10T05:03:33.434Z
// const now = new Date(-1234242213434); //1930-11-21T18:56:26.566Z



// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth()); //счет с 0 - 11,
// console.log(now.getDate()); //c 1 - 31
// console.log(now.getDay()); //c 0 - 6, 0 - sunday
// console.log(now.getUTCHours()); //получить в ютс

// console.log(now.getTimezoneOffset()); //разница по сравнению с ютс
// console.log(now.getTime()); // в милисекундах

// console.log(now.setHours(18)); //установить время на 18 по таймзоне системы
// console.log(now.setHours(18, 40));
// console.log(now.setHours(50)); // перенос на след день

// let start = new Date();

// for (let i = 0; i < 1000000000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// console.log(end - start);

//75. Функции-конструкторы

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);

// ivan.hello();
// ivan.exit();

//76. Контекст вызова. This


// function showThis() {
//     console.log(this);
// }

// showThis(); // для обычной функции вернет window если use strict - undefined


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b; //будет ошибка так как по прежнему this - undefined
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this); //для обьекта this - сам обьект. вернет  a: 20, b: 15, sum: [Function: sum] }
//         function shout() {
//             console.log(this); //вернет undefined
//         }
//     }
// };

// obj.sum();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23); //this в конструкторах и классах это новый экземпляр обьекта

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); //вызов функции с контекстом обьекта user
// sayName.apply(user, ['Smith']); //тоже самое другой синтаксис

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); //обьявляем что double это функция count с контекстом 3
// console.log(double(3)); //вызываем новую функцию double

// const bth = document.querySelector('button');

// bth.addEventListener('click', function(){
//     console.log(this); //this - сам элемент = event.target
// });


// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this); //у стрелочной функции нет контекста, контекст исчет у родителя this = obj
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2; //короткая запись стрелочной функции ретурн не указывается


// //Классы

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor (height, width, text, bgColor) {
//         super(height,width); //получить свойства главного родительского класса, всегда на первом месте в классе
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`text: ${this.text}, color: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'hello', 'red');

// div.showMyProps();
// console.log(div.calcArea());



// const square = new Rectangle(10, 10);

// console.log(square.calcArea);



// //  Rest оператор и параметры по умолчанию (ES6)


// const log = function(a, b, ...c) { //Rest оператор собирает велью в массив
//     console.log(a, b, c);
//     console.log(c[0]);
// };

// log('test1', 'test2', 'test3', 'test4','test5'); // test1 test2 [ 'test3', 'test4', 'test5' ]


// function calcOrDouble(number, basis = 2) { //2 - параметр по умолчанию
//     //basis = basis || 2; //вернет 2 если нет basis - устаревший метод
//     console.log(number * basis);
// }

// calcOrDouble(3);




// 82. JSON формат передачи данных, глубокое клонирование объектов


// const persone = {
//     name: 'Alex',
//     tel: '+3803333333'
// };

// const json = JSON.stringify(persone);

// const object = JSON.parse(json);


// const persone = {
//     name: 'Alex',
//     tel: '+3803333333',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// const clone = JSON.parse(JSON.stringify(persone)); //глубокое клонирование обьекта


//86. Promise (ES6)


// console.log('запрос данных...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    

//         resolve(product);
//     }, 5000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             //reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('error');
// }).finally(() =>{
//     console.log('finally'); //всегда в конце, всегда отрабатывает
// });

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`${time} ms`), time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => { //ждем все промисы и чтото выполняем
//     console.log('All');
// });


// Promise.race([test(1000), test(2000)]).then(() => { //ждем первый промис
//     console.log('All');
// });

//87. Fetch API


// fetch('https://jsonplaceholder.typicode.com/todos/1') //GET
//       .then(response => response.json())
//       .then(json => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({name: 'Alex'}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
// .then(response => response.json())
// .then(json => console.log(json));

// 88. Методы перебора массивов


//Filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Valt'];

// const shortNemes = names.filter(function(name) { //возвращает новый массив с именами < 5
//     return name.length < 5;
// });


// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase()); //  преберет и вернет новый переделанный масиив

// console.log(result);

// //every/some

// const some = [4, 'sdf', 'dsgstgtg'];

// console.log(some.some(item => typeof(item) === 'number')); //вернет тру если хоть один элемент подходит

// console.log(some.every(item => typeof(item) === 'number')); //верент тру если все элементы соответствуют условию


// // reduce


// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0       4
//                         // 4       5
//                         // 9       1
//                         // 10      3
//                         // 13      2
//                         // 15      6 => 21
// const res = arr.reduce((sum, current) => sum + current);


// const arr2 = ['1', '2', '3', '4', '5', '6'];

// const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res2);

// const arr3 = [4, 5, 1, 3, 2, 6];
// const res3 = arr3.reduce((sum, current) => sum + current, 3); //начальное значение (вместо 0)
// console.log(res3);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// // function showGoodFilms(arr) {
// //     return arr.filter(item => item.rating >= 8);
// // }

// //console.log(showGoodFilms(films));

// // function showListOfFilms(arr) {
// //     return arr.reduce((sum, current) => `${typeof(sum) === 'object' ? sum.name : sum}, ${current.name}`);
// // }

// // console.log(showListOfFilms(films));

// // function setFilmsIds(arr) {

// // }

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

// console.log(tranformedArray.every(item => Object.hasOwn(item, 'id')));



// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//     return data.filter(item => item.amount > 0)
//                 .reduce((sum, current) => sum + current.amount, 0);
// };

// getPositiveIncomeAmount(funds);

// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// };

// getTotalIncomeAmount(funds);


// ////////////////
// const object = {};
// formData.forEach(function(value, key){ //formData в обьект
//     object[key] = value;
// });

// const json = JSON.stringify(Object.fromEntries(formData.entries())); //formData в json, у формдата есть метод ентрис, который преобразует в массив массивов, а фром ентрис возвращает в обьект

// /////////////

// //axios

// axios.get('http://localhost:3000/menu')
// .then(data => {
//     data.data.forEach(({img, altimg, title, descr, price}) => {
//         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//     });
// });


// //

// // simple slider

// const slides = document.querySelectorAll(".offer__slide"),
// prev = document.querySelector('.offer__slider-prev'),
// next = document.querySelector('.offer__slider-next'),
// current = document.querySelector('#current'),
// total = document.querySelector('#total');
// let slideIndex = 1;

// showSlides(slideIndex);

// total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;

// function showSlides(n) {
// if (n > slides.length) {
//   slideIndex = 1;
// }

// if (n < 1) {
//   slideIndex = slides.length;
// }

// slides.forEach(item => item.style.display = 'none');

// slides[slideIndex - 1].style.display = 'block';

// current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
// }

// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
// plusSlides(-1);
// });

// next.addEventListener('click', () => {
// plusSlides(1);
// });

// 96. Регулярные выражения


//new RegExp('pattern', 'flags'); // старый синтаксис

// /pattern/f новый

// const ans = 'eneneneennneeeee';//prompt('enter your name');

// const reg = /n/ig;

// //flags: i - независимо от регистра; g - поиск нескольких; m - многострочный режим

// //console.log(ans.search("reg")); //серч исчет тольок первое совпадение

// //console.log(ans.match(reg));

// console.log(ans.replace(/./g, '*')); //заменить все символы на * c помощью регулярки
// console.log(ans.replace(/\./g, '*')); //заменить . на * c помощью регулярки \ - экранирование


// console.log('12-34-56'.replace(/-/g, ':'));

// const ans = 'eneneneennneeeee';//prompt('enter your name');

// const reg = /n/ig;
// const reg2 = /\d/;
// console.log(reg.test(ans)); //проверить есть ли n вернет тру/фолс
// console.log(reg2.match(ans));
// классы рег выражений:

// \d - digits
// \w - words
// \s - spaces

// \D - not digits
// \W - not words
// \S - not spaces


//99. Геттеры и сеттеры (свойства объектов)

// const persone = {
//     name: "Alex",
//     age: 25,

//     get userAge() {
//         return this.age;
//     },
//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30); //позволяет работать с методами как с свойствами
// console.log(persone.userAge);


//100. Инкапсуляция/////


// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`user name: ${this.name}, age ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27);

// ivan.age = 30;
// ivan.name = 'Alex'; // можно легко изменять содержимое иван, можно вмешаться в работу обьекта


// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`user name: ${this.name}, age ${userAge}`);
//     };
// }

// const ivan = new User('Ivan', 27);

// console.log(ivan.userAge); //undefined

// ivan.userAge = 30; // создало новое свойство в обьекте а не изменило переменную userAge
// ivan.name = 'Alex'; 

// ivan.say(); //user name: Alex, age 27 / возраст не изменен

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`user name: ${this.name}, age ${userAge}`);
//     };

//     this.getAge = function() { //геттер
//         return userAge;
//     };

//     this.setAge = function(age) { //сеттер
//         if (typeof age === 'number' && age > 0 && age < 110 ) {
//             userAge = age;
//         } else {
//             console.log('wrong value');
//         }
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge()); 

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge()); 

// ivan.say();



// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age; //_age условное обозначение свойства которое не должно быть доступно из вне
//     }

//     say() {
//         console.log(`user name: ${this.name}, age ${this._age}`);
//     }

//     get age() { 
//         return this._age;
//     }

//     set age(age) { 
//         if (typeof age === 'number' && age > 0 && age < 110 ) {
//             this._age = age;
//         } else {
//             console.log('wrong value');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.age);

// ivan.age = 99;
// console.log(ivan.age);

// ivan.say();


// 101. Прием модуль, как и зачем его использовать


// const number = 1;

// (function(){
//     let number = 2;
//     console.log(number);
//     console.log(number + 3); //создает функцию и сразу ее запускает и () разрешает функцию без имени
// }());

// console.log(number);


// const user = (function() {
//     const privat = function() {
//         console.log('privat');
//     };
    
//     return {
//         getPrivat: privat
//     };

// }());


// user.getPrivat();

// //Ошибки. Как избежать “поломки” своего кода

// try {
//     console.log(normal);
// } catch(e) {
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);
// } finally {

// }

//Функции-генераторы

// function* generator() {
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// console.log(str.next()); //{ value: 'S', done: false }
// console.log(str.next()); //{ value: 'c', done: false }
// console.log(str.next()); //{ value: 'r', done: false }
// console.log(str.next()); //{ value: 'i', done: false }
// console.log(str.next()); //{ value: 'p', done: false }
// // console.log(str.next()); //{ value: 't', done: false }
// // console.log(str.next()); //{ value: undefined, done: true } дальше всегда андефайнд

// console.log(str.next().value); //только значение

// function* count(n) {
//     for (let i = 0; i <n; i++) {
//         yield i;
//     }
// }

// const counter = count(7);

// // console.log(counter.next().value);
// // console.log(counter.next().value);
// // console.log(counter.next().value);

// for (let k of count(7)) {
//     console.log(k);
// }

//

// const multiply20 = (price) => price * 20;
// const divide100 = (price) => price / 100;
// const normalizePrice = (price) => price.toFixed(2);

// const compose = (price, ...fns) => fns.reduceRight((res, fn) => fn(res), price);

// const discount = compose(100, normalizePrice, divide100, multiply20);
// console.log(discount);


// const test = (...fns) => console.log(fns);

// test(2, 4, 'wewe');





console.log(0 || NaN || false || null);



const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
one().then(console.log);
two().then(console.log);

