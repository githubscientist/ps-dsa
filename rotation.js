// let numbers = [3, 5, 4, 1, 2, 6];

// // insert 10 between 5 and 4
// numbers.splice(2, 0, 10);

// // delete 4 from index 3
// numbers.splice(3, 1);

// numbers.splice(2, 1);

// console.log(numbers);

// Given an array and a value k, rotate the array to the right by k steps.
const rotate = (numbers, k) => {

    k = k % numbers.length;

    // run for k rotations
    while (k--) {
        // for every rotation
        // remove the first element from the first index
        let firstElement = numbers.shift();

        // and push the element to the end of the array
        numbers.push(firstElement);
    }

    return numbers;
}

console.log(rotate([3, 5, 4, 1, 2, 6], 12))