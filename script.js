const numbers = [1, 2, 3, 4];
const outputDiv = document.getElementById('output');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(numbers);
  }, 3000);
});

promise.then((numbers) => {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      outputDiv.textContent = `Even numbers: ${evenNumbers.join(', ')}`;
      resolve(evenNumbers);
    }, 1000);
  });
})
.then((evenNumbers) => {
  const multipliedNumbers = evenNumbers.map((number) => number * 2);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      outputDiv.textContent = `Multiplied numbers: ${multipliedNumbers.join(', ')}`;
      resolve(multipliedNumbers);
    }, 2000);
  });
})
.catch((error) => {
  console.error(error);
});