//let userName: string = 'Ivan';

//userName = 5; //ошибка

//string  - '', "", ``
//number - 10, 0.5, 0.0001, -50, 4e10
//boolean - true, false

// const isBirthday: boolean = true; 
// let age: number;
// const usName: string = 'John';

// age = 40;

// if (isBirthday) {
//     console.log(`congrats ${usName.toUpperCase()}, age: ${age + 1}`);
// }



//Использование системы типов в функциях

// const isBirthdayData: boolean = true; 
// let ageData: number = 40;
// const usNameData: string = 'John';
//                                                                         //void означает что функция ничего не возвращает (либо игнорирует то что возвращает)
// // function logBrtMsg(isBirthday: boolean, userName: string, age: number): void { //any или в конфиге отключить проверку noImplicitAny
// //     if (isBirthday) {
// //         console.log(`congrats ${userName.toUpperCase()}, age: ${age + 1}`)
// //     }
// // }

// // function logBrtMsg(isBirthday: boolean, userName: string, age: number): string { 
// //     if (isBirthday) {
// //         return`congrats ${userName.toUpperCase()}, age: ${age + 1}`
// //     } else {
// //         return 'Error' //если не будет else > string будут ошибка так как функция должна вернуть стринг в любом случае
// //     }
// // }

// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => { 
//     if (isBirthday) {
//         return`congrats ${userName.toUpperCase()}, age: ${age + 1}`
//     } else {
//         return 'Error' //если не будет else > string будут ошибка так как функция должна вернуть стринг в любом случае
//     }
// }

// logBrtMsg(isBirthdayData, usNameData, ageData);




// тип any ////////////////

// const userData = '{"isBirthdayData": true, "ageData": 40, "usNameData": "John"}';

// const userObj = JSON.parse(userData); // возвращает any так как не известно что в JSONе

// console.log(userObj);

// let salery: number; //в переменных без значения нужно сразу указывать тип
// salery = 5000;

// const userData = '{"isBirthdayData": true, "ageData": 40, "usNameData": "John"}';

// const userObj: {
//     isBirthdayData: boolean, 
//     ageData: number, 
//     usNameData: string
// } = JSON.parse(userData); // возвращает any так как не известно что в JSONе

// console.log(userObj);


// const currRate: string = "1.05";

// const fetchCurr = (response: string): number => {
// 	const data: number = JSON.parse(response);
// 	return data;
// };

// function transferEurToUsd(
//     available: boolean, 
//     amount: number, 
//     commission: number
// ): void {
// 	if (available) {
// 		let res: number = fetchCurr(currRate) * amount * commission;
// 		console.log(res);

// 	} else {
// 		console.log("Сейчас обмен недоступен");
// 	}
// }

// transferEurToUsd(true, 500, 1.05);



// /// never//////


// const isBirthdayData: boolean = true; 
// let ageData: number = 40;
// const usNameData: string = 'John';

// const createError  = (msg: string) => {
//     throw new Error(msg); // тип never - функция ничего не возвращает даже undefined
//     // while (true) { // также never можно получить бесконечным циклом или рекурсией, когда известно что функция никогда ничего не вернет 

//     // }
// }
                                                                    
// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => { 
//     if (isBirthday === true) {
//         return`congrats ${userName.toUpperCase()}, age: ${age + 1}`
//     } else if (isBirthday === false) {
//         return 'Too bad'
//     }
//     return createError('Error');
// }

// logBrtMsg(isBirthdayData, usNameData, ageData);


// // null and undefined


// const test: null = null;
// const test2: any = null;
// const test3: string = null; // null подтип всех типов кроме undefined соотвественно стринг и намбер могут быть налл но в настройках тайпскрипт (strictNullChecks: true) по дефолту запрещает
// const test4: number = null;

// const test5: undefined = undefined;
// const test6: any = undefined;
// const test7: string = undefined; // аналогично с налл


// let smth; // тип будет any а не undefined

// // bigint and symbol


// let id: symbol = Symbol("id");

// const data = {
//     [id]: 1
// };

// console.log(data[id]);

// const num1: bigint = 1n;
// const num2: bigint = 2n;

// console.log(num1 + num2);


//типизация обьектов



// const userData = {
//     isBirthdayData: true,
//     ageData: 40,
//     userNameData:'John',
//     test: 'test'
// }

// const createError  = (msg: string) => {
//     throw new Error(msg);
// }
                                                                    
// const logBrtMsg = (data: {
//     isBirthdayData: boolean;
//     userNameData: string;
//     ageData: number
// }): string => { 
//     if (data.isBirthdayData) {
//         return`congrats ${data.userNameData.toUpperCase()}, age: ${data.ageData + 1}`
//     } else {
//         return createError('Error');
//     }
    
// }

// console.log(logBrtMsg(userData));



// const userData = {
//     isBirthdayData: true,
//     ageData: 40,
//     userNameData:'John',
//     messages: {
//         error: "Error"
//     }
// };

// const createError  = (msg: string) => {
//     throw new Error(msg);
// }
                                                                    
// const logBrtMsg = ({
//     isBirthdayData, 
//     userNameData, 
//     ageData,
//     messages: {error}
// }: {
//     isBirthdayData: boolean;
//     userNameData: string;
//     ageData: number;
//     messages: {error: string}
// }): string => { 
//     if (isBirthdayData) {
//         return`congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`
//     } else {
//         return createError(error);
//     }
    
// }

// console.log(logBrtMsg(userData));

// const departaments: string[] = ['dev', 'design', 'marketing']; //аннотации для масивов
// const departament = departaments[0]; // автомататически тип стринг
// departaments.push(5);//ошибка

// const report = departaments
//                            .filter((d: string) => d !== 'dev')
//                            .map((d: string) => `${d} - done`);

// const nums: number[] = [3, 5, 6];
// const nums2: any[] = [3, 5, 6, 'marketing'];
// const nums3: number[][] = [[3, 5, 6], [3, 5, 6]];

// const [first] = report;
// console.log(first);

// // 


// const electricityUserData = {
// 	readings: 95,
// 	units: "kWt",
// 	mode: "double",
// };

// const waterUserData = {
// 	readings: 3,
// 	units: "m3",
// };

// const elRate: number = 0.45;
// const wRate: number = 2;

// const monthPayments: number[] = [0, 0]; // [electricity, water]

// const calculatePayments = (
//     { readings, mode }: { readings: number; mode: string }, 
//     wData: {readings: number}, 
//     elRate: number, 
//     wRate: number
// ): void => {
// 	if (mode === "double" && readings < 50) {
// 		monthPayments[0] = readings * elRate * 0.7;
// 	} else {
// 		monthPayments[0] = readings * elRate;
// 	}

// 	monthPayments[1] = wData.readings * wRate;
// };

// calculatePayments(electricityUserData, waterUserData, elRate, wRate);

// const sendInvoice = (
//     [el, water]: number[], 
//     electricityUserData: {readings: number, units: string}, 
//     waterUserData: { readings: number; units: string }
// ): string => {
// 	const text = `    Hello!
//     This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
//     It will cost: ${monthPayments[0]}€
    
//     This month you used ${waterUserData.readings} ${waterUserData.units} of water
//     It will cost: ${monthPayments[1]}€`;

// 	return text;
// };

// const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
// console.log(invoice);



//touples ///////////////


const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData:'John',
    messages: {
        error: "Error"
    }
};

//const userDataTouple: [boolean, number, string] = [true, 40, "John"];
const userDataTouple: [boolean, number, ...string[]] = [true, 40, "John", "test", "test", "test"];//... можно использовать один раз в любом месте кортежа
// userDataTouple[1] = 7; //ok
// userDataTouple[3] = 7; //нет такого элемента в кортеже
// userDataTouple.push(50); //добавляет елемент
// userDataTouple[3] //все еще нет 3го индекса так как описано всего 3 елемента в кортеже

const res = userDataTouple.map((t) => `${t} - data`);

const [bthd, age, usName] = userDataTouple; // можно применять диструктуризацию и методы массивов


///union /////


// const message: string | number = 5;
// const messages: string[] | number[] = ["a", "b"] 

// function printMsg (msg: string | number): void {
//     console.log(msg);
//     console.log(msg.toLowerCase()); // вызывает ошибку 

// }

// printMsg(4);
// printMsg('dsfdsfsdf');

//narrowing////////

const message: string | number = 5;
const messages: string[] | number[] = ["a", "b"] 

// function printMsg (msg: string | number): void {
//     if (typeof msg === 'string') {
//         console.log(msg.toLowerCase()); // msg уже стал стринг
//     } else {
//         console.log(msg.toExponential()); // msg уже стал числом
//     }

//     console.log(msg); // снова юнион тип

// }

function printMsg (msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m));
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed())
    } else {
        console.log(msg);
    }

}

printMsg(4);

const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
        console.log(a, b); // a, b - number 
    }
}

const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3)) // работает с двумя типами поэтому сужение типов не нужно
}

const checkReadings = (readings: {system: number} | {user: number}): void {
    
}


