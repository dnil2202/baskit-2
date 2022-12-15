// no 1

let firstName = 'daniel';
let lastName = 'sibarani';

[firstName, lastName] = [lastName, firstName];

console.log(firstName); 
console.log(lastName); 



// No 5 
// var number = [2,7,11,15]

// const findIndex = (array,sum)=>{
//     let nums = []
//     let index =[]
//     array.forEach((val,idx)=>{
//         array.forEach((v,i)=>{
//             if(val+v === sum){
//                 nums.push(val,v)
//                 if(nums.length <=2){
//                     index.push(number.indexOf(nums[0]),number.indexOf(nums[1]))
//                 }
//             }
//         })
//     })
//     if(index.length >0){
//         return console.log(index)
//     }else{
//         return '<no way>'
//     }
// }
// findIndex(number,13)


// Soal 6
// var price = [5,6,15,3,10,22,15]
// var price2 =[10,15,8,7,14]
// var price3 =[100,90,75,65]

// const findProfit = (array)=>{
//     let data = [] 
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             let result = -array[i] + array[j+i] 
//             data.push(result)
//         }
//     }

//     let sortData = data.sort((a,b) => {
//         return b-a
//     })
//     if(sortData[0]<=0){
//         console.log('Harga Turun Terus')
//     }else{
//         console.log(sortData[0])
//     }
// }

// findProfit(price3)

//Soal No 7

// let dictionary =  ['pro','gram','merit','program','it','programmer']

// let splitWord = (word) => {
//     let result = []
//     for (let i = 0; i < dictionary.length; i++) {
//         let newData = word.search(`${dictionary[i]}`)
//         if(newData >= 0){
//             result.push(dictionary[i])
//         }
//     }
//     if(result.length>0){
//         console.log(result)
//     }else{
//         console.log('no way')
//     }
// }

// splitWord('daniel')

// Soal no 8

// function largestPalindrome(n) {

//     var max = 0

//     var num=0

//     if(n === 1){
//         num=9
//     }else if(n === 2){
//         num = 99
//     }else if(n === 3){
//         num = 999
//     }
//     for (var i = num; i > 1; i--) {
//         for (var j = i; j > 1; j--) {
//             var mul = j * i;
//             if (isPalin(mul) && mul > max) {
//                 max = i * j;
//             }
//         }
//     }
//     return max;
// }

// function isPalin(i) {
//     i = '' + i;
//     return i === i.split("").reverse().join("");
// }

// console.log(largestPalindrome(2));

//Soal 9

// function kC(num) {
//     var numArray = (""+num).split("");
    
//     var descArray = numArray.sort(function(a,b){
//     return b - a;
//     });
    
//     var ascArray = numArray.slice().sort(function(a,b){
//     return a - b;
//     });
//     let desc=parseInt(descArray.join(''))
//     let asc = parseInt(ascArray.join(''))
//     let diff = desc-asc
//     return diff
// }
// const kCResult = (num)=>{
//     let input = kC(num)
//     let diff = kC(input)
//     let newNum = kC(diff)
//     return console.log(newNum)
// }
// kCResult(1234)


//Soal No 10

// let dictionary =  ['hot','dot','dog','lot','log']

// let splitWord = (word) => {
//     let result = []
//     let replaceData = word.replace('h','d')
//     for (let i = 0; i < dictionary.length; i++) {
//         let newData = word.search(`${dictionary[i]}`)
//         if(newData >= 0){
//             result.push(dictionary[i])
//         }
//     }
//     result.push(replaceData.split(' ')[0])
//     if(result.length>0){
//         console.log(result)
//     }else{
//         console.log('no way')
//     }
// }

// splitWord('hit dog')
