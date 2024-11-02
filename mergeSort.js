function merge(numbers, lstart, lend, rstart, rend) {
    let merged = [], left = lstart;

    while (lstart <= lend && rstart <= rend) {
        if (numbers[lstart] < numbers[rstart]) {
            merged.push(numbers[lstart]);
            lstart++;
        } else {
            merged.push(numbers[rstart]);
            rstart++;
        }
    }

    while (lstart <= lend) {
        merged.push(numbers[lstart]);
        lstart++;
    }

    while (rstart <= rend) {
        merged.push(numbers[rstart]);
        rstart++;
    }

    // merging is done and let's copy back to the numbers array the  merged array elements
    for (let i = 0; i < merged.length; i++) {
        numbers[left + i] = merged[i];
    }
}

function mergeSort(numbers, start, end) {
    if (start === end) {
        return;
    }

    // to do a partition
    // find the middle index
    let middle = Math.floor((start + end) / 2);
    mergeSort(numbers, start, middle);
    mergeSort(numbers, middle + 1, end);
    merge(numbers, start, middle, middle + 1, end);
}

let numbers = [4, 1, 3, 8, 2, 7, 6, 5];
let n = numbers.length;
mergeSort(numbers, 0, n - 1);

console.log(numbers);