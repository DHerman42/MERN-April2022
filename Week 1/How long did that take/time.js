Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.sqrt(this); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

const { performance } = require("perf_hooks");
let start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 10,000th in .175 seconds

start = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e5) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 100,000th in 5.712 seconds

start = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e6) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 1,000,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 1,000,000th in 197.474 seconds or 3.29 minutes

// recursive
// 2.9 milliseconds
function rFib(n) {
  if (n < 2) {
    return n;
  }
  return rFib(n - 1) + rFib(n - 2);
}
start = performance.now();
console.log(rFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// iterative - FASTER
// 0.108 milliseconds
function iFib(n) {
  const vals = [0, 1];
  while (vals.length - 1 < n) {
    let len = vals.length;
    vals.push(vals[len - 1] + vals[len - 2]);
  }
  return vals[n];
}
start = performance.now();
console.log(iFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

const story = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil 
repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias 
assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita 
doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, 
laboriosam vero impedit iusto mollitia optio labore asperiores!`;

start = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 1.925 milliseconds

start = performance.now();
let reversed2 = "";
for (let i = story.length - 1; i >= 0; i--) {
  reversed2 += story[i];
}
console.log(reversed2);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 0.0478 milliseconds
