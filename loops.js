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
  
//   function exponentiate(base, power) {
//     if (power === 0) {
//       return 1;
//     }
  
//     let result = base;
  
//     while (power > 1) {
//       result *= base;
//       power--;
//     }
  
//     return result;
//   }

// 05 My Slice 

function mySlice(originalString, startIdx, endIdx) {
    if(startIdx === 'undefined' || endIdx === 'undefined') {
      return originalString;
    }
    
    if (startIdx === undefined) {
      startIdx = 0;
    }
    
    if (endIdx === undefined) {
      endIdx = originalString.length;
    }
    
    let slicedString = '';
    
    for (let i = startIdx; i < endIdx; i++) {
      let char = originalString[i];
      slicedString += char;
    }
    
    return slicedString;
  
  }
  
  describe('mySlice', () => {
  
    it('is a function', () => {
      expect(typeof mySlice).toEqual('function');
    });
  
    it('returns a string', () => {
      let returnedValue = mySlice('a piece of pie');
      expect(typeof returnedValue).toEqual('string');
    });
  
    it('returns a new string starting at the startIdx', () => {
      let returnedValue = mySlice('a piece of pie', 2);
      expect(returnedValue).toEqual('piece of pie');
    });
  
    it('returns a new string with the correct starting and ending indices', () => {
      let returnedValue = mySlice('a piece of pie', 2, 7);
      expect(returnedValue).toEqual('piece');
    });
  
    it('returns the original string if no indices are inputted', () => {
      let returnedValue = mySlice('a piece of pie');
      expect(returnedValue).toEqual('a piece of pie');
    });
  
  });

// 06 my index of

function myIndexOf(source, searchValue, startIdx) {

    // if user didn't pass in startIdx, define it by default as 0
    if (startIdx === undefined) {
      startIdx = 0;
    }
  
    /*
      This for loop is tricky to set up!
      Here's the approach: given a source 'Loopy Luna' and a searchValue 'Luna',
      we're going to loop through the source, looking at every substring that's the
      same length as the searchValue:
      Loop
      oopy
      opy
      py L
      ... and so on
      Then we compare each of these substrings to the searchValue. If they match,
      we've found what we're looking for!
      'Luna' is the last substring of length 4 that we could get from the source.
      It doesn't make sense to check any more substrings after Luna, since they would
      would be of length less than 4 (which means they definitely won't match the
      searchValue). That's why our stop condition in the for loop stops the iteration
      before we get to the end of the source string.
    */
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
  
      // get a substring from the source, starting at i, with the same length as the search value
      let substring = source.slice(i, i + searchValue.length);
  
      // if the substring matches the search value...
      if (substring === searchValue) {
  
        // ...return the current index
        return i;
      }
    }
  
    // if we get past the end of the for loop, we never found a match and can return -1
    return -1;
  }
  
    


describe('myIndexOf', () => {

    it('is a function', () => {
      expect(typeof myIndexOf).toEqual('function');
    });
  
    it('returns a number', () => {
      let returnedValue = myIndexOf('i love apples', 'apples');
      expect(typeof returnedValue).toEqual('number');
    });
  
    it('returns the first instance of the searchValue in the source', () => {
      let returnedValue = myIndexOf('here and there', 'here');
      expect(returnedValue).toEqual(0);
    });
  
    it('returns the first instance of the searchValue at or after the startIdx', () => {
      let returnedValue = myIndexOf('here and there', 'here', 4);
      expect(returnedValue).toEqual(10);
    });
  
    it('returns -1 if the searchValue is not in the source', () => {
      let returnedValue = myIndexOf('here and there', 'nowhere');
      expect(returnedValue).toEqual(-1);
    });
  
  });

  // 07 most vowels 


function mostVowels(sentence) {
    let currentWord = '';
    let currentVowelCount = 0;
  
    let maxWord = '';
    let maxVowelCount = 0;
  
    // loop through the entire sentence, character by character
    for (let i = 0; i < sentence.length; i++) {
  
      // save the current character in a variable (optional)
      let char = sentence[i];
  
      // if the current character isn't a space and we're not at the end of the sentence...
      if (char !== ' ' && i !== sentence.length - 1) {
  
        // ...then we're in the middle of a word. concat the char onto the currentWord
        currentWord += char;
  
        // if the char is a vowel...
        if (isVowel(char)) {
  
          // ...increment the count of vowels for the current word
          currentVowelCount += 1;
        }
      }
  
      // else, char is a space, or we're at the end of the sentence. either way we just finished a word.
      else {
  
        // if the vowel count for the just-finished word is greater than the max previously found...
        if (currentVowelCount > maxVowelCount) {
  
          // ...reassign maxVowelCount to the new max
          maxVowelCount = currentVowelCount;
  
          // reassign maxVowel to the new word with the most vowels
          maxWord = currentWord;
        }
  
        // reset the currentWord and currentVowelCount values for the next word
        currentWord = '';
        currentVowelCount = 0;
      }
    }
  
    // return the maxWord after the for loop is finished
    return maxWord;
  
    // isVowel is a helper function that takes a char and returns true if the char is a vowel
    function isVowel(char) {
      let vowels = 'aeiouAEIOU';
  
      if (vowels.indexOf(char) >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  
  describe('mostVowels', () => {
  
    it('is a function', () => {
      expect(typeof mostVowels).toEqual('function');
    });
  
    it('returns a string', () => {
      let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
      expect(typeof returnedValue).toEqual('string');
    });
  
    it('returns the word with the most vowels', () => {
      let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
      expect(returnedValue).toEqual('measure');
    });
  
    it('returns the word with the most vowels even if it\'s the last string in the sentence', () => {
      let returnedValue = mostVowels('Give her hell from us, Peeves.');
      expect(returnedValue).toEqual('Peeves');
    });
  
    it('returns an empty string if none of the inputted words have vowels', () => {
      let returnedValue = mostVowels('why dry my sly lynx?');
      expect(returnedValue).toEqual('');
    });
  
  });

// memo lesson off vscode... bigger commits coming.
  
  