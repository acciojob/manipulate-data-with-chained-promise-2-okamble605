document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Function to return a promise that resolves with an array after 3 seconds
  function getNumbers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]); // The array of numbers
      }, 3000);
    });
  }

  // Main function that uses chained promises
  async function processNumbers() {
    const numbers = await getNumbers(); // Wait for the array

    // Filter out the odd numbers and display them after 1 second
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    setTimeout(() => {
      output.textContent = `Even numbers: ${evenNumbers.join(", ")}`;
    }, 1000); // Display after 1 second

    // Multiply even numbers by 2 and display after another 2 seconds
    setTimeout(() => {
      const doubledNumbers = evenNumbers.map(num => num * 2);
      output.textContent = `Doubled even numbers: ${doubledNumbers.join(", ")}`;
    }, 3000); // Display after 3 seconds
  }

  // Start the process when the page is loaded
  processNumbers();
});
