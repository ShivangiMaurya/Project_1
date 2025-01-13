// Select elements
const counter = document.getElementById('counter');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

// Initialize the counter value
let count = 0;

// Function to update the counter display
function updateCounter() {
  counter.textContent = count;
}

// Increment button functionality
incrementButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrement button functionality
decrementButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});
