 // Key points to note
 // Async await are used as syntactical sugar to promises
 // We can include async before any function then tha function will return promise
 // Await can be only used inside the async function
 // Await waits for the promise to be resolved , await should be used before statement in which you are returning promise
 // Async return promise that can be resolved with .then()

// 1. Async Await in General Code
// In the below example function b() is returning promise after 5 sec so will use await as when some promise is returned 
// we can use await 
// As we are using await function call() must be async

// function a(){
//     return 'Hi i am A';
// }

// function b(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('Hi i am B');  // Since we are returnin promise we will use resolve here
//         }, 5000);
//     })

// }

// function c(){
//     return 'Hi i am C';
// }

// async function call(){
//     const call_a = a();
//     const call_b = await b();
//     const call_c = c();
//     console.log(call_a,call_b,call_c);
// }
// call();

// o/p => Hi i am A  ,  Hi i am B , Hi i am C

async function call(){
    const prom = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Money making');
        }, 3000);
    })

    const res = await prom; // We are waiting for promise to be resolved and prom is returning a promise so we can use await
    return res ;             
}

call().then(res => console.log(res)); // As Async function returns Promise we are also returning promise 
                                      //  which is handled here by .then()  
                                      
// Error Handling is done by try{} catch(e){} block
// we can use try catch in call function and then outsdide the func we can use 
// call.then().catch()

// 2. Async Code in Fetch API

async function getData(){

    const res = await fetch('some url of API'); // Fetch retunrs a Promise so we are awaiting for that

    // Only proceeded if above promise is resolved
    const data = await res.json(); // Await for the json() 

    // Only proceeded if second promise resolved
    return data;
}  

getData().then(user => console.log(user));





