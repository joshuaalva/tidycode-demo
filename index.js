// console.log('commit for the day!');

// <-- TIDY CODE EXMAPLES --> 

// Style Me Pretty 

// function styleMePretty() {
//     let truth = '';
// function innerBeauty(count) {
// let result = '';
// while(count > 0) {
//   count--;
//     if(count===2) {
//     result += 'Unformatted code';
//     }
// } result += ' is difficult to parse';
// return result;} truth += innerBeauty(5); truth += ' for humans if not for machines';
// return truth;
// }

// describe('styleMePretty', function() {

// it('is a function', function() {
//   expect(typeof styleMePretty).toEqual('function');
// });

// it('returns a string', function() {
//   let returnedValue = styleMePretty();
//   expect(typeof returnedValue).toEqual('string');
// });

// it('returns the correct message', function() {
//   let returnedValue = styleMePretty();
//   expect(returnedValue).toEqual(
//     'Unformatted code is difficult to parse for humans if not for machines'
//   );
// });

// });

// Just In Camel Case 

// function justInCamelCase(undername) {
//     let camelcaseoutput = "";
//       let foundunder = false;
//       for(let i = 0; i<undername.length; i++) {
//       if (undername[i] === "_") {
//         foundunder = true;
//         } else {
//           if (foundunder) {
//           camelcaseoutput += undername[i].toUpperCase();
//         foundunder = false;
//       } else {
//         camelcaseoutput += undername[i];
//         }
//     }
//     }
//         return camelcaseoutput;
//   }
  
//   describe('justInCamelCase', function() {
  
//     it('is a function', function() {
//       expect(typeof justInCamelCase).toEqual('function');
//     });
  
//     it('returns a string', function() {
//       let returnedValue = justInCamelCase('any string value');
//       expect(typeof returnedValue).toEqual('string');
//     });
  
//     it('returns a camelCased string given a string with one underscore', function() {
//       let returnedValue = justInCamelCase('snake_case');
//       expect(returnedValue).toEqual('snakeCase');
//     });
  
//     it('returns a camelCased string given a string with two underscores', function() {
//       let returnedValue = justInCamelCase('underscore_the_point');
//       expect(returnedValue).toEqual('underscoreThePoint');
//     });
  
//     it('returns the inputted string unchanged given a lower-case string with no underscores', function() {
//       let returnedValue = justInCamelCase('lowercase');
//       expect(returnedValue).toEqual('lowercase');
//     });
  
//   });
  

