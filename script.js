document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Function to return a promise that resolves with an array after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // Original array
      }, 3000);
    });
  }

  // Main execution with chained promises
  getNumbers()
    .then((numbers) => {
      // Filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = numbers.filter((num) => num % 2 === 0);
          output.textContent = `Filtered Evens: ${evenNumbers.join(", ")}`;
          resolve(evenNumbers);
        }, 1000); // Display after 1 second
      });
    })
    .then((evenNumbers) => {
      // Multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map((num) => num * 2);
          output.textContent = `Doubled Evens: ${doubledNumbers.join(", ")}`;
          resolve(doubledNumbers);
        }, 2000); // Display after 2 seconds
      });
    })
    .catch((error) => {
      console.error("Error:", error); // Handle errors if any
    });
});
