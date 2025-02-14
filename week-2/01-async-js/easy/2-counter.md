## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count=0

function counter(){
  if(count>10){
    return;  
  }
  console.log(count);
  count++;
  setTimeout(counter,1000)
}

counter()


//setTimeout() Runs once after a delay.

//setInterval() Runs repeatedly at fixed intervals.





































































(Hint: setTimeout)