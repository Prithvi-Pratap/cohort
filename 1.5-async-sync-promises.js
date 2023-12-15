//setTimeout(function(){},1000)===> is a async function


// console.log("starting of the process")
// setTimeout(function () {
//     console.log("setTimeout called");
// }, 2000)
// let  a=0;
// console.log(a);


//-------------------------------------------

//require("fs")===> is used to access files.

const fs=require("fs");
//filesystem module

fs.readFile("a.txt", "utf8", function(err,data){
    console.log(data);
})
let a=0;
console.log("hey there")
for(let i=0;i<1000000000;i++){
    a++;
}
//even if the callback is resolved, but the main thread is still busy , then the callback will wait for the thread to finish the process

console.log("hey there after the loop")
