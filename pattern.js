function printPattern(n) {
    for (let i = 1, stars = 3; i <= n; i++, stars += 2) {
        // for i lines, we should push one star per i
        for (let j = 1; j <= i; j++) {
            console.log('*');
        }

        let line = [];
        for (let j = 1; j <= stars; j++) {
            line.push('*');
        }
        console.log(line.join(''));
    }
}

let n = 4;
printPattern(n);