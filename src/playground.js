const numbers = [1, 2, 3, 4, 5]

// an array of squares
// [1, 4, 9, 16, 25]

const squares = numbers.map((number) => {
  return number * number
})

console.log(squares)
