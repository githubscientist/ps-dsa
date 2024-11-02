// const lSearch = (numbers, key) => {
//     // iterate the numbers array
//     for (let i = 0; i < numbers.length; i++) {
//         // for each of the element from the array, 
//         // check and compare if the element from the array is equal to the key or not
//         if (key === numbers[i]) {
//             return true;
//         }
//     }

//     // If there was no single match at all, 
//     return false;
// }

function bSearch(numbers, key) {
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        // calculate the middle index
        let middle = Math.floor(start + ((end - start) / 2));
        // let middle = Math.floor((start + end) / 2);

        //  check if the middle value is equal to key
        if (numbers[middle] === key) return true;
        else if (numbers[middle] < key) start = middle + 1;
        else if (numbers[middle] > key) end = middle - 1;
    }
    return false;
}

let numbers = [4, 3, 2, 6, 8, 1, 5, 7];

numbers.sort((a, b) => a - b);


console.log(bSearch(numbers, 5));