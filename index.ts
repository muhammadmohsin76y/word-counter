#! /usr/bin/env node
import inquirer from 'inquirer'




const answers: {
   sentence: string
} = await inquirer.prompt([
   {
      name: "sentence",
      type: "input",
      message: "Enter a sentence to count the word:"
   }
])

const words = answers.sentence.trim().split("")

//print the array of words to the console
console.log(words)

// print the word count of the sentance to the console

console.log(`The sentence word count is ${words.length}`);

 