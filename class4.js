// Promises async/await
// Future then/catch

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success"); // fulfilled
    }, ms);
  });
};

console.log("start");
setTimeout(() => console.log("Middle"), 1000); // 1 sec
console.log("end");

delay(2000).then(msg => console.log(msg));
console.log("end of the file");
