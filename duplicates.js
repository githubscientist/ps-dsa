/* 

    Problem: Given an array of numbers, remove all the duplicates from the numbers.

    Input: [1, 4, 6, 3, 2, 2, 3, 4, 5, 6, 2];

    Output: [1, 2, 3, 4, 5, 6]
*/

// function removeDuplicates(numbers) {
//     let uniques = [];

//     // iterate the numbers array
//     for (let index = 0; index < numbers.length; index++) {
//         // check if the element does not exist in uniques
//         if (!uniques.includes(numbers[index])) {
//             // if true => push the element to uniques array
//             uniques.push(numbers[index]);
//         }
//     }

//     return uniques;
// }

// console.log(removeDuplicates([1, 4, 6, 3, 2, 2, 3, 4, 5, 6, 2]));

let numbers = [1, 4, 6, 3, 2, 2, 3, 4, 5, 6, 2];

console.log(numbers.reduce((p, c) => {
    if (!p.includes(c)) return [...p, c];
    return p;
}, []));