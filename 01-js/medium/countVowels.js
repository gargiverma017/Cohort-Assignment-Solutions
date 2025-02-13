/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelCount=0;
  const characterArray=str.toLowerCase().split("");
  let vowels=['a','e','i','o','u'];

  characterArray.forEach((character)=>{
    vowels.forEach((vowel)=>{
      if(character==vowel){
        vowelCount++;
      }
    })
  })

  return vowelCount;


}

module.exports = countVowels;