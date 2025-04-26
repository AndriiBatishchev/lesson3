import chalk from "chalk";

//Note:   "type": "module",  into package.json 
//Note:   .gitignore file + 'node_modules/' line 

//Task
// Виведіть в консоль довільний кольоровий текст з використанням цієї бібліотеки.

console.log(chalk.italic.red('Hello', chalk.underline.bgBlue('world') + '!'));