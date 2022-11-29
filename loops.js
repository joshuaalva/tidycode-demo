// while loops
// anytime you need code to repeat a certain number of times

// condition an expression evaluated before each pass through the loop. If this condition evaluates to true. Statement is executed.
// when condition evaluates to false, execution continues with the statement after the while loop.

// let n = 0;

// while (n < 3) {
//     n++;
//     console.log(n); //expected output 3
// }

// {
//   let n = 0;

//   while (n <= 3) {
//     n++;
//   }

//   console.log(n);
// }

// indebugger red dot on the left side is called a break point

// do while loop checks in the end instead of teh beginning
// not really neccesary 

// let result = '';
// let index = 0;

// do {
//     index = index + 1;
//     result = result + index;
// } while (index < 5);

// console.log(result);

// cstyle for loops 
// for ([initialExpression]; [conditionExpression; [incrementExpression]])
//statement 

// {
// let str = ''
// for (let i = 0; i < 10; i++) { // i = i + 2 even numbers
//     str = str + i;
// }
// console.log(str);

// }

// continue statement

// let text = ``;

// for(let index = 0; index < 10; index++) {
//     if (index === 3) {
//         continue;
//     }

//     text = text + index;
// }

// console.log(text);

// bonus loop: recursion 
// recursion: looping data 

function counter (number) {
    console.log(number);
    if(number < 10){
    counter(number + 1);
    }
}

counter(0);

console.log(`<-- codepen workshop -->`)

// 01 Only Odds

function onlyOdds (num) {
    let sum = 0;
    for (let i = num; i >= 1; i--){
      if (i % 2 === 1) {
        sum += i;
      }
    }
    
    return sum;
  }


  
  describe('onlyOdds', () => {
  
    it('is a function', () => {
      expect(typeof onlyOdds).toEqual('function');
    });
  
    it('returns a number', () => {
      let returnedValue = onlyOdds(6);
      expect(typeof returnedValue).toEqual('number');
    });
  
    it('returns the sum of all odd nums between the provided argument and 0', () => {
      let returnedValue = onlyOdds(10);
      expect(returnedValue).toEqual(9 + 7 + 5 + 3 + 1);
    });
  
    it('returns 0 if inputted argument is less than 1', () => {
      let returnedValue = onlyOdds(-5);
      expect(returnedValue).toEqual(0);
    });
  
  });

  // 02 Crazy Caps 

  