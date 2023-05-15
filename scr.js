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

// const {border, bg} = options.colors; //диструктуризация обьекта ES6

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

// parseInt('15px', 10);

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

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}


console.log(pow(2, 4)); //степень


let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];

    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);


function factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

function factorial(n) {
    if (Math.round(n) != n || typeof(n) != 'number'){
        return 'Error';
    } else if (n <= 0){
        return 1;
    }else{
        if (n === 1) {
            return n;
        } else {
            let result = n * factorial(n - 1);
            return result;
        }
        return result;
    }
}

//События на мобильных устройствах

// touchstart
// touchmove
// touchend
// touchenter
// toucjleave
// touchcancel

const box = document.querySelector('.box');

box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start');
    console.log(e.touches); //количество касаний
});

box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log(e.targetTouches[0].pageX); //координаты первого пальца
});


//touches
//targetTouches //методы ивента
//changedTouches


// Оператор нулевого слияния (Nullish, ??) ES11

const box = document.querySelector('.box');
const newH = 100;
const newW = 400;

function changeParams(elem, h, w){
    elem.style.height = `${h || 200}px`; //если Н фолс то 200, но также сработает если 0
    elem.style.height = `${w || 200}px`; //можно использовать ??
}
changeParams(box, newH, newW);

let userName;
let userId;

console.log(userName ?? 'User'); //проверяет только на null и undefined
console.log(userName ?? userId ?? 'User'); //если нет юзернейм и юзер ид тогда "юзер"

//?? нельзя использовать с &&



//Оператор опциональной цепочки (?.) ES11


const boxx = document.querySelector('.box');
const block = document.querySelector('.block'); 

console.log(block); //нет на странице NULL


console.log(block.textContent); // ошибка

console.log(1 + 2); // не выведется изза ошибки

console.log(block?.textContent); // вернет андефайнд код продолжит выполнятся, работает на чтение, на запись нет

const userData = {
    name: 'Ivan',   //в запросе и не хватает данных
    age: null
};

if (userData && userData.skills && userData.skills.js) { //решение проблемы через условие
    console.log(userData.skills.js);
}

console.log(userData.skills?.js); //тоже самое, "?" проверяет то что справа

userData.say?.(); //если нет метода вернет андефайнд

//Живые коллекции и полезные методы

const boxesQuery = document.querySelectorAll('.box'); //возвращает нодлист. есть свои методы
const boxesGet = document.getElementsByClassName('box'); //взвращает ХТМЛколлекцию. нет методов
console.log(document.body.children); //тоже ХТМЛколлекцию псеводомассив без методов

boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery); //вернет все элементы существ на момент создания квери селектор (статичная коллекция)
console.log(boxesGet); // вернет текущее состояние псевдомассива без без удаленных 2х элементов (живая коллекция)

console.log(Array.from(boxesGet)); //преобразовал псевдомассив без методов, в обычный массив с методами(статичный)

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box); //ищет селектр внутри элемента
});

console.log(boxesQuery[0].closest('.wrapper'));//ищет ближайшего родителя //есди не находит - null

//Тип данных Symbol

//свойствами обьектами могут быть только строки и символы

const obj = {
    'name': 'test',
    [Symbol('id')]: 1 //скрыт, нельзя обратится по описанию если нет переменной, приватное свойство, не видно при переборе
};

let id = Symbol("id"); 
obj[id] = 1;


//let id2 = Symbol('id');
const obj2 = {
    'name': 'test',
    [Symbol('id')]: 1,
    getId: function() {
        return this[id];
    }
};

console.log(obj2.getId());
console.log(Object.getOwnPropertySymbols(obj2));
console.log(obj2[Object.getOwnPropertySymbols(obj2)[0]]);


const myDB = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123
};

myDB.id = '34255345345435'; //случайно пеерезаписали ИД

console.log(myDB.id);
console.log(myDB); //{ movies: [], actors: [], id: '34255345345435', [Symbol(id)]: 123 }

// Дескрипторы свойств и полезные методы объектов

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyData: function() {
        console.log(`${this.name} ${this.surname}}`);
    }
};

//console.log(Object.getOwnPropertyDescriptor(user, 'name')); //{ value: 'Alex', writable: true, enumerable: true, configurable: true }

//Object.defineProperty(user, 'name', {writable: false});
//user.name = "weferfreferfrffe"; //не перезапишет

//Object.defineProperty(user, 'name', {value: 'gender'}); //создаст свойство с фолс для всех дискрипторов

Object.defineProperty(user, 'showMyData', {enumerable: false}); //скрыть метод для цикла

for (let key in user) {
    console.log(key);
}

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

//writable
//enumerable
//configurable

// по дефолту у нового обьекта все тру
































