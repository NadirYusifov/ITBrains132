// ===== While ilə olan tapşırıqlar =====
// Task 1
// let txt = prompt("Iki reqemli eded daxil edin.")

// let sayac = 1
// let add = 7
// while(sayac < 90){
//     sayac+=add
//     console.log(sayac);
// }

// Task 2
// let txt= prompt("N ededini daxil edin.")
// let num = 1
// let toplam = 0

// while(num<=txt){
//     toplam=toplam+num
//     num++
//     console.log("I know how to use cycles");
// }


// Task 3
// let num = 10

// while(num<=90){
//     if(num%5==0){
//         console.log(num);
//     }
//     num++
// }


// Task 4
// let num = 1
// let toplam = 0

// while(num<=99){
//     if(num%2==1){
//         console.log(num);
//     }
//     toplam=toplam+num
//     num++
// }

// console.log(toplam);


// Task 5
// let value = prompt("Eded daxil edin.")
// let toplam = 0
// let num = 100

// while(num<=999){
//     if(num/value%2==0){
//         console.log(num);
//         toplam=toplam+num
//     }
//     num++
// }

// console.log("Toplam:", toplam);


// Task 6
// let value = prompt("Eded daxil edin.");

// while (value > 0) {
//     let j = value
//     let counter = 0
//     while (j > 0) {
//         if (value%j==0) {
//             counter++
//         }
//         j--;
//     }
//     if (counter<=2) {
//         console.log(value);       
//     }
//     value--
// }


// ===== For'la olan tapşırıqlar =====
// Task 7
// let vurma = 1
// for (num = 1; num<=10; num++) {
//     vurma = vurma*num
//     console.log(num);
// }
// console.log("Cavab:", vurma);


// Task 8
// let values = prompt("Metn daxil edin.")

// for(let name = values.length-1; name>=0; name--){
//     console.log(values[name]);
// }


// Task 9
// let txt = prompt("Metn daxil edin.")

// for (let i = 0; i < txt.length; i++){
//     if (txt[i] === ".") {
//         console.log(i);
//         break;
//     }
// }


// Task 10
// let txt = prompt("Metn daxil edin.")
// let result = 0 

// for (i in txt) {
//     if (Number(txt[i])) {
//         result = result+1
//     }
// }if (result>0) {
//     console.log("Reqem var.");
// }else{
//     console.log("Reqem yoxdur.");
// }