let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];

let frequencies = {};

// iterate the original array
for (let i = 0; i < numbers.length; i++) {
    // for each element in the array, create a new entry in the frequencies object
    frequencies[numbers[i]] = 0;
}

for (let i = 0; i < numbers.length; i++) {
    // for each element in the array, create a new entry in the frequencies object
    frequencies[numbers[i]]++;
}

// Problem: Given an array, find and print the frequency of each element in the array.
// console.log('{' + Object.entries(frequencies).map(sub => sub.join(': ')).join(', ') + '}');

// Problem: Given an array, find and print the first non-repeating element in the array.
// iterate the array numbers
// for (let i = 0; i < numbers.length; i++) {
//     // find the first number which has the frequency 1
//     if (frequencies[numbers[i]] === 1) {
//         console.log(numbers[i]);
//         break;
//     }
// }

// Problem: Given an array, remove all the duplicates in the array.
console.log(Object.keys(frequencies).map(num => parseInt(num)));