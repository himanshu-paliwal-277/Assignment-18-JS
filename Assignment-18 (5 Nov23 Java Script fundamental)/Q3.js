// Q.3 Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number is positive and similarly for negative and zero also.

// Code:
const num = -2;
const Result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(`${num} is ${Result}`);

// Output
// -2 is Negative