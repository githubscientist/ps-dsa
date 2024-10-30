// function bubbleSort(numbers) {
//     let passes = 0;
//     // iterate the array from the first element
//     for (let j = 0; j < numbers.length - 1; j++) {
//         passes++;
//         let swaps = 0;
//         for (let i = 0; i < numbers.length - 1; i++) {
//             // for every pair of elements (numbers[i], numbers[i+1])
//             // check if the first element (i)th index is greater than the second element (i+1)th index
//             if (numbers[i] > numbers[i + 1]) {
//                 // swap the elements
//                 let temp = numbers[i];
//                 numbers[i] = numbers[i + 1];
//                 numbers[i + 1] = temp;
//                 swaps++;
//             }
//         }

//         if (swaps === 0) {
//             break;
//         }

//         console.log(`passes = ${passes}, swaps = ${swaps}`);
//         console.log(numbers.join(' '));
//     }
// }

// function findIndex(numbers, i) {
//     let minValue = numbers[i];
//     let minIndex = i;
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[j] < minValue) {
//             minValue = numbers[j];
//             minIndex = j;
//         }
//     }
//     return minIndex;
// }


// function selectionSort(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         // for every value in the array
//         let minIndex = findIndex(numbers, i);

//         // swap the elements at index i and index minIndex
//         let temp = numbers[i];
//         numbers[i] = numbers[minIndex];
//         numbers[minIndex] = temp
//     }
// }

// function insertionSort(numbers) {
//     // for every iteration
//     console.log(`Iteration Begins: ${numbers.join(' ')}`);

//     for (let i = 0; i < numbers.length; i++) {
//         let box = i;
//         let boxValue = numbers[box];
//         // At each iteration
//         console.log(`For iteration ${i + 1}, we have box = ${box}, boxValue = ${boxValue}`);

//         // iterate from box-1 to 0
//         for (let j = box - 1; j >= 0; j--) {
//             console.log(`After shift: ${numbers.slice(0, box).join(' ') + ' [ ] ' + numbers.slice(box + 1,).join(' ')}`);
//             if (boxValue < numbers[j]) {
//                 // do a shift
//                 numbers[j + 1] = numbers[j];
//                 // update the box index
//                 box = j;
//             } else {
//                 break;
//             }
//         }
//         console.log(`After shift: ${numbers.slice(0, box).join(' ') + ' [ ] ' + numbers.slice(box + 1,).join(' ')}`);

//         // insert the boxValue at box
//         numbers[box] = boxValue;

//         console.log(`After shift: ${numbers.slice(0, box).join(' ')}` + `${' [ ' + boxValue + ' ] '}` + `${numbers.slice(box + 1,).join(' ')}`);
//     }
// }

// function countingSort(numbers) {
//     let frequencies = {};

//     for (let i = 0; i < numbers.length; i++) {
//         frequencies[numbers[i]] = 0;
//     }

//     console.log(frequencies);

//     for (let i = 0; i < numbers.length; i++) {
//         frequencies[numbers[i]]++;
//     }

//     console.log(frequencies);

//     // console.log(Object.entries(frequencies).map(sub => (sub[0] + ', ').repeat(sub[1])).join(' '));

//     numbers = [];

//     for (let key in frequencies) {
//         for (let i = 1; i <= frequencies[key]; i++) {
//             numbers.push(key);
//         }
//     }

//     console.log(numbers.map(num => Number(num)));
// }

function merge(numbers, lstart, lend, rstart, rend) {
    let merged = [];
    let leftIndex = lstart;
    let rightIndex = rstart;

    while (leftIndex <= lend && rightIndex <= rend) {
        if (numbers[leftIndex] < numbers[rightIndex]) {
            merged.push(numbers[leftIndex]);
            leftIndex++;
        } else {
            merged.push(numbers[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex <= lend) {
        merged.push(numbers[leftIndex]);
        leftIndex++;
    }

    while (rightIndex <= rend) {
        merged.push(numbers[rightIndex]);
        rightIndex++;
    }

    for (let i = 0; i < merged.length; i++) {
        numbers[lstart + i] = merged[i];
    }
}

function mergeSort(numbers, start, end) {
    if (start < end) {
        // find the middle element
        let middle = Math.floor((start + end) / 2);

        mergeSort(numbers, start, middle);
        mergeSort(numbers, middle + 1, end);
        merge(numbers, start, middle, middle + 1, end);
    }
}


let numbers = [6, 3, 4, 2, 5, 8, 1, 7];
mergeSort(numbers, 0, numbers.length - 1);
console.log(numbers);