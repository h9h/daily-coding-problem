/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i 
of the new array is the product of all the numbers in the original array except 
the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

function listWithoutIndexI(list, idx) {
  return list.filter((_, index) => index !== idx)
}

function productOfList(list) {
  return list.reduce((acc, item) => acc * item, 1)
}

function mapToProductOfOtherNumbers(list){
  return list.map((v, index, list) => productOfList(listWithoutIndexI(list, index)))
}

console.log(mapToProductOfOtherNumbers([]), '[]')
console.log('[120, 60, 40, 30, 24]', mapToProductOfOtherNumbers([1, 2, 3, 4, 5]))
console.log('[2, 3, 6]', mapToProductOfOtherNumbers([3, 2, 1]))

console.log('Alternative mit Division')

function mapToProductOfOtherNumbers2(list) {
  const product = productOfList(list)
  return list.map(item => product / item)
}

console.log(mapToProductOfOtherNumbers2([]), '[]')
console.log('[120, 60, 40, 30, 24]', mapToProductOfOtherNumbers2([1, 2, 3, 4, 5]))
console.log('[2, 3, 6]', mapToProductOfOtherNumbers2([3, 2, 1]))
