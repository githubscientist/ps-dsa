// let word1 = 'apple';
// let word2 = "apple is a fruit.";
// let word3 = `apple is a fruit and
// eating every day an apple keeps the doctor away.`;
// let word4 = new String('apple');

// console.log(typeof word1, typeof word2, typeof word3, word4);

// let word = 'apple';

// console.log(word[3]);

// String traversals
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// let i = 0;
// while (i < word.length) {
//     console.log(word[i]);
//     i++;
// }

// let i = 0;
// do {
//     console.log(word[i]);
//     i++;
// } while (i < word.length);

// for (let index in word) {
//     console.log(word[index]);
// }

// for (let char of word) {
//     console.log(char);
// }

// Recursion: is a function that calls itself.

// Problem: Print the word 'apple' for 3 times

// function printChars(word, count, times) {
//     // base case
//     if (count === times) return;

//     console.log(word);
//     printChars(word, count + 1, times);
// }


// let word = 'apple';
// printChars(word, 0, 3);

// function printChars(word, times) {
//     // base case
//     if (times === 0) return;

//     console.log(word);
//     printChars(word, times - 1);
// }


// let word = 'apple';
// printChars(word, 5);

/*
    Recursion Tree


    printChars()
        - console.log(word)
        - printChars()
            - console.log(word)
            - printChars()
                ...
                ...

*/

// Problem: Reverse the string
// function reverse(word) {
//     // create an empty string
//     let reversedString = '';

//     // iterate the original string from last character to first character
//     for (let i = word.length - 1; i >= 0; i--) {
//         reversedString += word[i];
//     }

//     console.log(reversedString);
// }

// two pointers
// function reverse(word) {
//     // convert string to an array
//     let chars = word.split('');

//     // place the two pointers
//     let first = 0;
//     let last = word.length - 1;

//     while (first < last) {
//         // swap the characters pointed by the pointers
//         let char = chars[first];
//         chars[first] = chars[last];
//         chars[last] = char;

//         // update the pointers
//         first++;
//         last--;
//     }

//     console.log(chars.join(''));
// }

function reverse(word) {
    if (word === '') return word;
    return reverse(word.slice(1,)) + word.charAt(0);
}

let word = 'apple';
console.log(reverse(word));

/*

    reverse('apple')
        - word = 'apple'
        - check if word === ''; False
        - return reverse('pple') + 'a'
                    - word = 'pple'
                    - check if word === ''; False
                    - return reverse('ple') + 'p'
                             - word = 'ple'
                             - check if word === ''; False
                             - return reverse('le') + 'p'
                                        - word = 'le'
                                        - check if word === ''; False
                                        - return reverse('e') + 'l'
                                                    - word = 'e'
                                                    - check if word === ''; False
                                                    - return reverse('') + 'e'
                                                                - word = ''
                                                                - check if word === ''; True
                                                                - return word
                                                    - return 'e' + 'l'
                                        - return 'e' + 'l'

    reverse('apple')
        - word = 'apple'
        - check if word === ''; False
        - return 'elppa'
                                        
*/