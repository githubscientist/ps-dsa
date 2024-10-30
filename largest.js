function findKLargest(numbers, k) {
    for (let j = 0; j < k; j++) {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                numbers[i] = numbers[i] + numbers[i + 1];
                numbers[i + 1] = numbers[i] - numbers[i + 1];
                numbers[i] = numbers[i] - numbers[i + 1];
            }
        }
    }

    return numbers[numbers.length - k];
}

let numbers = [4, 6, 2, 7, 3, 1, 5];
let k = 6;

console.log(findKLargest(numbers, k));