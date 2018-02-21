// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)


//       '   #   ' 1       0   2 * n +1
//       '  ###  ' 3       1   2 * n +1
//       ' ##### ' 5       2   2 * n +1
//       '#######' 7       3



function pyramid(n, row = 0, string = '') {
  if (n === row) {
    return
  }

  if(string.length === 2 * (n - 1) + 1) {
    console.log(string)
    return pyramid(n, ++row)
  }

  if(string.length < n - row - 1 || string.length > n + row - 1) {
    string += ' '
    return pyramid(n, row, string)
  } else {
    string += '#'
    return pyramid(n, row, string)
  }
}

module.exports = pyramid;
