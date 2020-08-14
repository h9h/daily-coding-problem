/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

function containsAsSum(list, number){
    if (list.length < 1) return false
    for (let i = 0; i < list.length; i++) {
        [item, ...rest] = list
        if (rest.indexOf(number - item) > 0) return true
        list = rest
    }
    return false
}

console.log("true?", containsAsSum([10, 15, 3, 7], 17))
console.log("false?", containsAsSum([9, 1, 2], 20))
console.log("false?", containsAsSum([], 20))
console.log("true?", containsAsSum([-9, 1, 2], -7))
