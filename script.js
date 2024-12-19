document.addEventListener("DOMContentLoaded", function() {
  const output = document.getElementById("output");

  // Function to return a promise that resolves with an array after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Array to manipulate
      }, 3000); // Resolves after 3 seconds
    });
  }

  // Chained promise function
  getNumbers()
    .then((numbers) => {
      // Filter out odd numbers
      return new Promise((resolve) => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        setTimeout(() => {
          output.textContent = `Even numbers: ${evenNumbers.join(", ")}`;
          resolve(evenNumbers); // Resolving the even numbers
        }, 1000); // Wait for 1 second before showing even numbers
      });
    })
    .then((evenNumbers) => {
      // Multiply even numbers by 2
      return new Promise((resolve) => {
        const doubledNumbers = evenNumbers.map(num => num * 2);
        setTimeout(() => {
          output.textContent = `Doubled even numbers: ${doubledNumbers.join(", ")}`;
          resolve(doubledNumbers); // Resolving the doubled numbers
        }, 2000); // Wait for 2 seconds before showing doubled numbers
      });
    });
});
