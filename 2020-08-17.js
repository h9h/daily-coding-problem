/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

function firstMissingPositiveInteger(list) {
  const len = list.length
  if (len === 0) return 1

  // make a range of first len integers 0...len-1
  const posInts = [...Array(len).keys()]
  list.forEach(item => {
    // switch off each item as index into range
    if (item < len && item > -1) posInts[item] = 0
  })

  // if integer remains in range, it is the wanted int, else it's just len
  const residue = posInts.filter(item => item > 0)
  return residue.length === 0 ? len : residue[0]
}

console.log('[3,4,-1,1] -> 2', firstMissingPositiveInteger([3, 4, -1, 1]))
console.log('[1,2,0] -> 3', firstMissingPositiveInteger([1, 2, 0]))
console.log('[] -> 1', firstMissingPositiveInteger([]))
