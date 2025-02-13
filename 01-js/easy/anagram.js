/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const l1=str1.toLowerCase();
  const l2=str2.toLowerCase();

  if(l1.length!=l2.length){
    return false;
  }
  
  let sorted1=l1.split('').sort().join('');
  let sorted2=l2.split('').sort().join('');

  return sorted1==sorted2;

}

module.exports = isAnagram;
