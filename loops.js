// while loops
// anytime you need code to repeat a certain number of times

// condition an expression evaluated before each pass through the loop. If this condition evaluates to true. Statement is executed.
// when condition evaluates to false, execution continues with the statement after the while loop.

// let n = 0;

// while (n < 3) {
//     n++;
//     console.log(n); //expected output 3
// }

{
  let n = 0;

  while (n <= 3) {
    n++;
  }

  console.log(n);
}

// indebugger red dot on the left side is called a break point

// do while loop checks in the end instead of teh beginning
// not really neccesary 

let result = '';
let index = 0;

do {
    index = index + 1;
    result = result + index;
} while (index < 5);

console.log(result);

// cstyle for loops 
// for ([initialExpression]; [conditionExpression; [incrementExpression]])
//statement 

{
let str = ''
for (let i = 0; i < 10; i++) {
    str = str + i;
}
console.log(str);

}

// daily log