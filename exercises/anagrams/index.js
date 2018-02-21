// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  debugger;
  stringA = stringA.replace(/[\W]/g, '').toLowerCase()
  stringB = stringB.replace(/[\W]/g, '').toLowerCase()
  const getCharMap = (string)  => {
    const charMap = {}

    for (char of string) {
      if(charMap[char]) {
        charMap[char] ++
      } else {
        charMap[char] = 1
      }
    }

    return charMap
  }

  const stringAMap = getCharMap(stringA)
  const stringBMap = getCharMap(stringB)

  if(Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
    return false
  }

  for (char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) {
      return false
    }
  }
  return true
}

module.exports = anagrams;
