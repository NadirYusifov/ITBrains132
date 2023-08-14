// Task 1
// console.log("My name is Nadir")


// Task 2
// let name = "Nadir"
// console.log(name)


// Task 4
// let bookAmount = 14
// let bookPrice = 750
// console.log(bookAmount*bookPrice)


// Task 5
// let kmhSpeed = 75
// let msSpeed = kmhSpeed*1000/3600
// console.log(msSpeed)


// Task 6
// let year = prompt("Dogum ilinizi gosterin")
// console.log(2023-year)
// let day = 365
// console.log(365*19)


// Task 7
// let num = 56
// console.log(num**5)
// console.log(num%3)


// Task 8
// let firstName = "Nadir"
// let lastName = "Yusifov"
// console.log(firstName, lastName + " Sizi tanishligimiza shadam")


// Task 9
// let fullName = prompt ("Adinizi daxil edin")
// console.log("Salam, Nadir!")


// Task 10
// let fullName = "Nadir Yusifov"
// console.log(fullName.length)

// Task 11
// let fullName = prompt("Adinizi daxil edin")
// let firstSymbol = fullName [0]
// let secondSymbol = fullName [fullName.indexOf(" ")+1]
// console.log(firstSymbol,secondSymbol)


// Task 12
// let fullName = prompt("Adinizi daxil edin")
// let firstSymbol = fullName.slice(0,fullName.indexOf(" "))
// let secondSymbol = fullName.slice(fullName.indexOf(" ")+1)
// console.log(secondSymbol,firstSymbol)


// Task 13
// let fullName = prompt("Adinizi daxil edin")
// console.log("Salam Nadir!")


// Task 14
// let num1 = prompt("Reqem daxil edin!")
// let num2 = prompt("Reqem daxil edin!")
// console.log(num1*num2)
// console.log(Number(num1)+Number(num2))
// console.log(num1-num2)
// console.log(num1/num2)


// Task 15

// let num1 = prompt("1ci ededi daxil edin:");
// let num2 = prompt("2ci ededi daxil edin:");
// let result = String(num1*num2)
// console.log(result[6])


// Task 16 
// console.log(true + false)
// console.log("" + 1 + 0)
// console.log("" - 1 + 0)
// console.log(6 / "3")
// console.log(4 + 5 + "px")
// console.log("4" - 2)
// console.log("$" + 4 + 5)
// console.log("4px" - 2)
// console.log(7 / 0)
// console.log("-9" + 5)
// console.log("-9" - 5)
// console.log(null + 1)
// console.log(undefined + 1)


// Task 17
// let value = prompt ("Reqem daxil et")
// let num1 = value[0]
// let num2 = value[1]
// let num3 = value[2]
// let num4 = value[3]
// console.log(+num1 + +num2 + +num3 + +num4)


// Task 18
// let value = prompt("Enter your fullName")
// let firstName = value.slice(0,value.indexOf(" "))
// console.log("Salam " + firstName);


// Task 19
// let price = prompt("Qiymet daxil edin")
// let money = price.slice(0,price.indexOf("."))
// let coin = price.slice(price.indexOf(".")+1)
// console.log(`${money} manat ${coin} qepik`);


// Task 20
// let amount = prompt("Emek haqqini elave edin")
// console.log(amount*13/100);


// Task 21
// let fullName = prompt("Adinizi, Soyadiniz, Ata adinizi Daxil edin: ");
// let nameParts = fullName.split(" ");
// console.log(nameParts);
// let surname = nameParts[0];
// let firstInitial = nameParts[1][0];
// let patronymicInitial = nameParts[2][0];
// console.log(`${surname} ${firstInitial}.${patronymicInitial}.`);


// Task 22



//Task 23
// let a = prompt("1ci ededi daxil edin");
// let b = prompt("2 ci ededi daxil edin");
// if (a > b) {
//     console.log(`${a} ededi ${b} ededinden boyukdur`)
// } else {
//     console.log(`${a} ededi ${b} ededinden kicikdir yada beraberdir`)
// }
// console.log();


// Task 24
// let age = prompt("Yashinizi daxil edin.")
// if(age<18){
//     alert("Access denied")
// }else{
//     alert("Access granted")
// }


// Task 26
// let year = prompt ("Ili daxil edin")
// if(year%4 === 0 && year.length === 4){
//     alert("Uzun ildir");
// }
// else{
//     alert("Uzun il deyil")
// }


// Task 27
// switch ("Enter your product") {
//     case "1":
//         alert('Avilable 10 pcs');
//         break;
//     case "2":
//     alert('Available 256 pcs');
//         break;
//     case "3": 
//         alert('Avaiable 53 pcs');
//         break;
//     case "4":
//         alert('There are 3 available');
//         break;
//     default:
//         alert('out of stock');
//         break;
// }


// let txt = "Lorem . ipsum. Hello...Salam"
//  for (let i = 0; i < txt.length; i++) {
//     if(txt[i] === "."){
//         console.log(i);
//         break;
//     }  
//  }


// console.log(isNan(6));