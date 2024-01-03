// Q.1 Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.

/* 
Ternary Operator is a concise way to write a conditional statement like if-else. Ternary Operator takes three operands condition, true value and false value.

Syntax:
condition ? Eexecute if condition true : Execute if condition is false;

Program to check whether the number is even or odd using the ternary operator.
*/

// Code:
const num = 19;
const Result = num % 2 == 0 ? "Even" : "Odd";
console.log(`${num} is ${Result}`);

// Output:
// 19 is Odd