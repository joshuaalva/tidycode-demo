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

  // YOUR CODE BELOW
function crazyCaps(originalString) {
    let crazyString = '';
  
    for (let i = 0; i < originalString.length; i++) {
      
      let char = originalString[i];
      
      if (i % 2 === 0) {
  
        crazyString += char;
      }
  
      else {
  
        char = char.toUpperCase();
  
        crazyString += char;
      }
    }
    return crazyString;
  }
  
  
  
  
  describe('crazyCaps', () => {
  
    it('is a function', () => {
      expect(typeof crazyCaps).toEqual('function');
    });
  
    it('returns a string', () => {
      let returnedValue = crazyCaps('any value');
      expect(typeof returnedValue).toEqual('string');
    });
  
    it('returns a string with alternating lower-case and upper-case letters', () => {
      let returnedValue = crazyCaps('this is crazy');
      expect(returnedValue).toEqual('tHiS Is cRaZy');
    });
  
  });

  // 03 Bacteria Time 

  // YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    if(targetNum < currentNum){
      return `targetNum must be larger than currentNum`
    }
    
    let numMinutes = 0; 
    
    while(currentNum < targetNum){
      currentNum *= 2;
      numMinutes += 20;
    }
    
    return numMinutes;
  }
  
  console.log(bacteriaTime(1, 8));
  
  describe('bacteriaTime', () => {
  
    it('is a function', () => {
      expect(typeof bacteriaTime).toEqual('function');
    });
  
    it('returns the number of minutes required to reach the target', () => {
      let returnedValue = bacteriaTime(1, 8);
      expect(returnedValue).toEqual(60);
    });
  
    it('returns the number of minutes required to reach a large target', () => {
      let returnedValue = bacteriaTime(3, 6000);
      expect(returnedValue).toEqual(220);
    });
  
    it('returns a string warning if the targetNum is invalid', () => {
      let returnedValue = bacteriaTime(100, 50);
      expect(returnedValue).toEqual('targetNum must be larger than currentNum');
    });
  
  });

  
  // 04 Exponentiate

  // YOUR CODE BELOW
function exponentiate(base, power){
    let result = 1;
    
    for(let i = 0; i < power; i++) {
      result *= base;
    }
    
    return result;
  }
  
  describe('exponentiate', () => {
  
    it('is a function', () => {
      expect(typeof exponentiate).toEqual('function');
    });
  
    it('returns a number', () => {
      let returnedValue = exponentiate(1, 1);
      expect(typeof returnedValue).toEqual('number');
    });
  
    it('returns the value of the first num raised to the second', () => {
      let returnedValue = exponentiate(3, 6);
      expect(returnedValue).toEqual(Math.pow(3, 6));
    });
  
    it('returns 1 if the power is 0', () => {
      let returnedValue = exponentiate(20, 0);
      expect(returnedValue).toEqual(1);
    });
  
  });

  // 04 exponentiate using a while loop
  
  