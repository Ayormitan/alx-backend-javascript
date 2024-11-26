const readline = require('readline');

// Console for input and output
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display first prompt
console.log('Welcome to Holberton School, what is your name?');

// Capture user input
r1.question('', (name) => {
  console.log('Your name is: ${name}');
  r1.close();
});

// on close, display the exit message
r1.on('close', () => {
  console.log('This important software is now closing');
});