// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");

const toWrite="2025"

fs.writeFile("a.txt",toWrite,(err)=>{
    console.log("Content written succesfully")
})


//expensive operation
let sum=0;
for(let i=0;i<100;i++){
    sum+=i;
}
console.log(sum);


//asynchronous operations (like fs.readFile()) run in the background, 
//while synchronous operations (like loops and calculations) block execution in the main thread