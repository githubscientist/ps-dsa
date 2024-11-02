function tSearch(numbers, key) {
    let s = 0;
    let e = numbers.length - 1;

    while (s <= e) {
        let m1 = s + Math.floor((e - s) / 3);
        let m2 = e - Math.floor((e - s) / 3);

        if (key === numbers[m1] || key === numbers[m2]) return true;
        else if (key < numbers[m1]) e = m1 - 1;
        else if (key > numbers[m2]) s = m2 + 1;
        else {
            s = m1 + 1;
            e = m2 - 1;
        }
    }

    return false;
}

let numbers = [12, 23, 35, 48, 56, 79, 80, 100];

console.log(tSearch(numbers, 56));