/*
let answer=0;
for(let i=1;i<=1000;i++){
    answer+=i;
}
console.log(answer);

const ages=[21,22,23,24,25,26,27,28,29,30,31];

for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0)
    console.log(ages[i]);
}
const personArray=["John", "honey", "shreya", "pratap"];
const genderArray=["male", "male", "female" , "male"];

for(let i=0;i<personArray.length;i++){
    if(genderArray[i]=="male")
    console.log(personArray[i]);
}

=====================

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}


// let a=0;
// for(let i=0;i<1000;i++){
    //     a+=1;
// }
// console.log(a);

//======================================================
//array of objects:

const allUsers=[
    {
        fName: "John",
        gender: "male"
    },
    {
        fName: "Prithvi",
        gender: "male"
    }
];
console.log(allUsers.push({fName: "Pratap", gender: "male"}))
console.log(allUsers)

//===========================================

//methods of array:

// 1. push():

const initialArray=[1,2,3,4,5,6];
initialArray.push(7);
// console.log(initialArray.valueOf());


//2. pop():

const initialArray=[1,2,3,4,5,6];
initialArray.push(7);
// console.log(initialArray.pop())  //returns the popped element
// console.log(initialArray)


//3.shift(): to pop a new element from the strt of the array

const myArray=[1,2,3,4,5,6,'123','honey'];
// console.log(myArray.shift());
// console.log(myArray);


//4. unshift(): to

myArray.unshift('1st element');
console.log(myArray);

*/
// pushing a array: 1.using concat()
//                  2.using spread operator
//                  3.using for loop

//5. concat(): it concatinate and return a new array , it doesn't modifies the original array;
 let firstArray = [1,2,3,4,5,6];
 let secondArray = [8,9,10];
//  let finalArray=firstArray.concat(secondArray);
//  console.log(finalArray)

 //6.spread operator (...):

//  firstArray.push(...secondArray);
//  console.log(firstArray); // it modifies the original array
 
 //using the for loop:

 for(let i=0;i<secondArray.length;i++) {
    firstArray.push(secondArray[i]);
 }
// console.log(firstArray); // it modifies the original array


//====================================================
//call back function: a function that calls another function

function oddfunc(){
    console.log("odd");
}
function evenfunc(){
    console.log("even");
}
function callingFunc(fn){
    fn();
}
const arr=[1,2,3,4,5,6];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        callingFunc(evenfunc);
    }
    else callingFunc(oddfunc);
}