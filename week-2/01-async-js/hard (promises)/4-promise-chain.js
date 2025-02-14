/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },t*1000)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime=Date.now();
    return wait1(t1)
    .then(()=>wait2(t2))
    .then(()=>wait3(t3))
    .then(()=>{
        const endTime=Date.now();
        return endTime-startTime;
    })
}

// Use sequential execution when each step depends on the previous one.
// Use Promise.all() when tasks are independent and can run in parallel for better performance.

//sequential 1+3+2=6s
//parallel   1,3,2=3s

//we can also use async/await
//just write async in function and
//await wait1(t1)
//await wait2(t2)
//await wait3(t3)
//The function pauses at await until the promise resolves.

module.exports = calculateTime;
