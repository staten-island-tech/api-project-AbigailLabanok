//VIDEO 1

/* console.log("start");
setTimeout(() => {
  console.log("Timer");
}, 3000);
console.log("end"); */

//VIDEO 2

/* function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    //this is a callback function --> we get a promise, what do we do w/ it
    resolve(`hello ${name}`);
  });
  return greetPromise; //this function returns a promise(the iou) so you get logged a promsie
}

const suzy = greet(`suzy`);

suzy.then((result) => {
  //how to work with resolved promises
  console.log(result); //once the promise resolves, take the result of that promise and log it
}); */

//VIDEO 3

const api = "https://api.quotable.io/random";

async function getData(api) {
  //takes an argument
  try {
    const response = await fetch(api);
    const data = await response.json(); //makes the data into JSON (javascript) object you can use
    console.log(data.content); //logs the data into the console
    document.getElementById("api-response").textContent = data.content; //logs the data onto the screen isntead of into console
  } catch (error) {
    console.log(error);
  }
}

getData(api);

//js can only handle one process at a time
//Call Stack - operates on a first-in & last-out basis
//Blocking code --> if you have something that takes a long time to run, your application can be slowed down
//if you need data to resolve before you show the data, it would require the use of promises
//promises --> will prevent the next line from running until you get the data required
//a promise is like a receipt --> it promises that at some point in the future you will get what you need
//promises can exist in a fulfilled or a reject state
//once it is fulfilled, we can do something with our data
//promises and async js will help the js wait until we have our external data to do something with that data
//once a promise is fulfilled, you can add a ".then"
//you will get some date and in the process of getting data you will get a promise and then you will do something with that data
//you can't do anything with promises themselves --> you need to wait until they are resolved and then do .then and then do something with them
//async await is better than .then and makes it easier to understand
//async is always followed by await
//trycatch is like if else for when you are using promises or async js
