// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs=require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})

//expensive operation
let sum=0;
for(let i=0;i<100;i++){
    sum+=i;
}
console.log(sum);



/* 
fs.readFile() is asynchronous → It sends the read request and moves on.
The expensive loop is synchronous → It blocks the event loop.
The file read completes, but it must wait for the loop to finish before printing.
*/

/*
Output
1225
hello amigosss
*/