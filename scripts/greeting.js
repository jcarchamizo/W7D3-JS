// We asked how many times to repeat
let repetitions = parseInt(prompt("How many times do you want to enter a greeting and a name?"));

// We validate the entry
while (isNaN(repetitions) || repetitions <= 0) {
  repetitions = parseInt(prompt("Please enter a valid number greater than 0:"));
}

let phrases = [];

for (let i = 1; i <= repetitions; i++) {
  let saludo = prompt(`Enter the greeting #${i} (for example, Hello, Goodbye...):`);
  let nombre = prompt(`Enter the name #${i} (for example, Marga, Carol...):`);
  
  phrases.push(`${greeting} ${name`);
}

