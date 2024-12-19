//your JS code here. If required.
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

  // Chain promises to filter and manipulate the data
  getNumbers()
    .then((numbers) => {
      // Filter out odd numbers after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const evens = numbers.filter((num) => num % 2 === 0);
          output.textContent = evens.join(", "); // Display even numbers
          resolve(evens);
        }, 1000);
      });
    })
    .then((evens) => {
      // Multiply even numbers by 2 after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubled = evens.map((num) => num * 2);
          output.textContent = doubled.join(", "); // Display doubled numbers
          resolve(doubled);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error("Error:", error); // Handle errors if any
    });
});
