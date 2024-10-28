/*
    9. Given a string, check whether the string is a palindrome or not.

    10. Given a string, check whether the string is a palindrome or not without using any extra space.
*/

// function reverse(word) {
//     if (word === '') return word;
//     return reverse(word.slice(1,)) + word.charAt(0);
// }

// function isPalindrome(word) {
//     return word === reverse(word);
// }

// using two pointers technique
// function isPalindrome(word) {
//     // place the two pointers
//     let first = 0, last = word.length - 1;

//     while (first < last) {
//         if (word[first] !== word[last]) {
//             return false;
//         }

//         first++;
//         last--;
//     }

//     return true;
// }

// let word = 'malayalam';

// if (isPalindrome(word)) {
//     console.log('Palindrome');
// } else {
//     console.log('Not a Palindrome');
// }

/*

    Given a string, find the longest palindrome substring in the string. If there are multiple palindromes of the same length, return the first one.

    Example:

    Input: 'babad'
    Output: 'bab'

    Input: 'cbbdabcbbcba'
    Output: 'abcbbcba'

    Input: 'racecar'
    Output: 'racecar'
*/

// Time Complexity: O(n^3)

function isPalindrome(word) {
    // place the two pointers
    let first = 0, last = word.length - 1;

    while (first < last) {
        if (word[first] !== word[last]) {
            return false;
        }

        first++;
        last--;
    }

    return true;
}

function slice(word, start, end) {
    // create an empty substring
    let sub = '';

    // traverse the string starting from the start index till the end index
    for (; start <= end; start++) {
        // take every character from the string and add it to the sub string
        sub += word.charAt(start);
    }

    // return the substring
    return sub;
}

function findMax(maxLengths) {
    // assume that the first value in the maxLengths is the maximum length
    let max = maxLengths[0];

    // traverse from the second value
    for (let i = 1; i < maxLengths.length; i++) {
        // compare each of the value from the maxLengths array with the assumed max
        if (maxLengths[i] > max) {
            // if the maxLengths[i] is greater than the assumed max
            // then we update the assumed max with the new maxLengths[i]
            max = maxLengths[i];
        }
    }

    // return the maximum value
    return max;
}

function filterLongest(palindromes, maxLength) {
    // iterate the palindromes array
    for (let i = 0; i < palindromes.length; i++) {
        // check if any of the strings length is equal to the maxLength
        if (palindromes[i].length === maxLength) {
            return palindromes[i];
        }
    }
}

function findLongestPalindrome(word) {
    // create an empty array
    let palindromes = [];

    // Find all the substrings of a given string
    for (let start = 0; start < word.length; start++) {
        for (let end = start; end < word.length; end++) {
            // for every substring, check if the string is a palindrome or not
            let sub = slice(word, start, end + 1);

            if (isPalindrome(sub)) {
                // if true => push the string into an array
                palindromes.push(sub);
            }
        }
    }

    // assuming we have an array of palindromes, find the lengths of the strings and filter the first and the longest palindrome.
    // let maxLengths = palindromes.map(sub => sub.length);
    let maxLengths = [];

    for (let i = 0; i < palindromes.length; i++) {
        maxLengths.push(palindromes[i].length);
    }

    // let maxLength = Math.max(...maxLengths);
    let maxLength = findMax(maxLengths);

    // return palindromes.filter(sub => sub.length === maxLength)[0];
    return filterLongest(palindromes, maxLength);
}

let word = 'babad';
console.log(findLongestPalindrome(word));