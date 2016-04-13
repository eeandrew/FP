var _ = require('ramda');
var addFourNumbers = (a,b,c,d) => a+b+c+d;

var curriedAddFourNumbers = _.curry(addFourNumbers);

var addThreeNumbers = curriedAddFourNumbers(0);

var addTwoNumbers = addThreeNumbers(0);

//add four numbers
console.log(curriedAddFourNumbers(1,2,3,4));

//add three numbers
console.log(addThreeNumbers(1,2,3));

//add two numbers
console.log(addTwoNumbers(1,2));