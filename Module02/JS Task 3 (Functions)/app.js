//Task 1 
// let name = prompt("Adini yaz")

// function value(name) {
//     console.log(`${name} Is active now`);
// }
// value(name)


// Task 2
// let a = prompt("Eded daxil edin")
// let b = prompt("Eded daxil edin")
// let c = prompt("Eded daxil edin")

// function Beegnum(a, b, c) {
//     if (a > c && c > b || a > b && b > c) {
//         console.log(a);
//     } else if (b > a && a > c || b > c && b > a) {
//         console.log(b);
//     } else if (c > b && c > a || c > a && c > b){
//         console.log(c);
//     }
// }
// Beegnum(a, b, c)

// Task 3



// Task 4
// let number = prompt("1 den 99-a qeder bir reqem yazin.");
// function numberToText() {
//     let words = ["sifir", "bir", "iki", "üç", "dörd", "beş", "alti", "yeddi", "sekkiz", "doqquz",
//         "on", "on bir", "on iki", "on üç", "on dörd", "on beş", "on alti",
//         "on yeddi", "on sekkiz", "0n doqquz"];
//     let tens = ["iyirmi", "otuz", "qirx", "əlli", "altmiş", "yetmiş", "seksen", "doxsan"];

//     number = Number(number);

//     if (isNaN(number) || number < 1 || number > 99) {
//         console.log("Invalid input");
//         return;
//     }

//     if (number < 20) {
//         console.log(words[number]);
//         return;
//     }

//     let tensDigit = Math.floor(number / 10);
//     let onesDigit = number % 10;

//     console.log(tens[tensDigit - 2]);

//     if (onesDigit != 0) {
//         console.log(" " + words[onesDigit]);
//         return;
//     }
// }
// numberToText();


// Task 5
// let num1 = prompt("Birnci ededi daxil edin.")
// let num2 = prompt("Ikinci ededi daxil edin.")

// function min(numMin) {
//     if (num1 > num2 && num1 < num2) {
//         Math.min(`${num1}, ${num2}`)
//     }
//     return
// }
// console.log(`Minimum: ${Math.min(num1, num2)}`);


// Task 6



// Task 7
// function isLucky(num) {
//     let str = String(num)
//     if (+str[0] + +str[1] + +str[2] === +str[3] + +str[4] + +str[5]) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isLucky(234801));


// Task 8
// function capitalize(sentence) {
//     const words = sentence.split(" ")
//     const newArray = []
//     for (const word of words){
//         let firstLetter = word.substring(0, 1)
//         firstLetter = firstLetter.toUpperCase()
//         let resetLeters = word.substring(1)
//         newArray.push(firstLetter + resetLeters)
//     }
//     return newArray.join(" ")
// }
// console.log(capitalize('Hello my name is Harry'));

// Task 9
// let num = prompt("Eded daxil edin")
// function isEven(number) {
//     if (num%2==0) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(num));

// Task 10
// function isvalidnumber(phoneNum) {
//     if (phoneNum[0] === "+" && phoneNum[1] === "7" && phoneNum.length === 12) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isvalidnumber("+77364736898"));


// Task 11
// let txt = prompt("Metn yaz.")

// function numCounter(text) {
//     let count = 0
//     for (let i = 0; i< text.length; i++) {
//         let char = text[i]
//         if (char.match(/[a-zA-Z]/)) {
//             count++
//         }
//     }
//     return count
// }

// console.log(numCounter(txt));