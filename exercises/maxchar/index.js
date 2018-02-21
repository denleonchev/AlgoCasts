// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}

  for (char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  
  let maxOcc = 0
  let maxChar = ''

  for (char in charMap) {
    if (charMap[char] > maxOcc) {
      maxOcc = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
