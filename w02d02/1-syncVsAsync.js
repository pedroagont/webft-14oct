// SYNC
// Tasks/code running in a sequence (blocking code)
// console.log(1);
// console.log(2);
// for (let i = 0; i < 999999999; i++) {
//   // simulating big task
// }
// console.log(3);

// ASYNC
// Non blocking execution tasks
console.log(1);
console.log(2);

setTimeout(() => {
  for (let i = 0; i < 999999999; i++) {
    // simulating big task
  }
  console.log('big time task done!');
}, 1000);

console.log(3);
