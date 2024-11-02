/* 

    Problem: Given a sorted array of elements with only 0s and 1s, find the number of 1's in the array.

    For Example:

    Input: [0, 0, 0, 0, 1, 1, 1, 1, 1]
    Output: 5

    Input: [0, 0, 0, 0]
    Output: 0

    Input: [1, 1, 1, 1]
    Output: 4

    Input: [0, 0, 0, 1, 1, 1]
    Output: 3

*/

function lSearch(numbers) {
    let comparisons = 0;
    let ones = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) ones++;
        comparisons++;
    }
    console.log(comparisons);
    return ones;
}

function bSearch(numbers) {
    // set the pointers
    let s = 0;
    let e = numbers.length - 1;
    let comparisons = 0;

    while (s <= e) {
        comparisons++;
        // calculate the middle index
        let m = Math.floor((s + e) / 2);

        // check if the middle value is 1 and middle-1 is 0
        if (numbers[m] === 1 && numbers[m - 1] === 0) {
            console.log(comparisons);
            return numbers.length - m;
        }
        else if (numbers[m] === 1 && numbers[m - 1] === 1) e = m - 1;
        else if (numbers[m] === 0 && numbers[m + 1] === 1) {
            console.log(comparisons);
            return numbers.length - m - 1;
        }
        else if (numbers[m] === 0 && numbers[m + 1] === 0) s = m + 1;
        else if (m === 0 && numbers[m] === 1) {
            console.log(comparisons);
            return numbers.length;
        }
        else {
            console.log(comparisons);
            return 0;
        }
    }
}

// console.log(bSearch([0, 0, 0, 0, 1, 1, 1, 1, 1]))
// console.log(Math.log2(9))
// console.log(bSearch([0, 0, 0, 0]))
// console.log(Math.log2(4))
// console.log(bSearch([1, 1, 1, 1]))
// console.log(Math.log2(4))
// console.log(bSearch([0, 0, 0, 1, 1, 1]))
// console.log(Math.log2(6))

console.log(lSearch([0, 0, 0, 0, 1, 1, 1, 1, 1]))
console.log(Math.log2(9))
console.log(lSearch([0, 0, 0, 0]))
console.log(Math.log2(4))
console.log(lSearch([1, 1, 1, 1]))
console.log(Math.log2(4))
console.log(lSearch([0, 0, 0, 1, 1, 1]))
console.log(Math.log2(6))