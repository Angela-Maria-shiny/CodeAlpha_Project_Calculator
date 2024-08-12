// Get the display input element
const display = document.querySelector('.display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input
let currentInput = '';

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      // Evaluate the expression and display the result
      try {
        display.value = eval(currentInput);
        currentInput = display.value; // Update the current input with the result
      } catch (error) {
        display.value = 'Error'; // Display error if the expression is invalid
        currentInput = ''; // Reset the input
      }
    } else if (value === 'C') {
      // Clear the display and reset the input
      currentInput = '';
      display.value = '';
    } else {
      // Add the clicked button value to the input string
      currentInput += value;
      display.value = currentInput;
    }
  });
});
