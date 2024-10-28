function expandFromCenter(word, start, end) {
    let palindromes = [];

    while (word[start] === word[end] && start >= 0 && end < word.length) {
        palindromes.push(word.slice(start, end + 1));
        start--;
        end++;
    }

    return palindromes;
}

function findLongestPalindrome(word) {
    let oddPalindromes = [];
    let evenPalindromes = [];

    // iterate the string
    for (let i = 0; i < word.length; i++) {
        oddPalindromes = [...oddPalindromes, ...expandFromCenter(word, i, i)];

        if (word[i] === word[i + 1]) {
            evenPalindromes = [...evenPalindromes, ...expandFromCenter(word, i, i + 1)];
        }
    }

    let palindromes = [...oddPalindromes, ...evenPalindromes];
    let maxLength = palindromes.map(sub => sub.length).reduce((p, c) => p > c ? p : c);
    return palindromes.filter(sub => sub.length === maxLength)[0];
}

let word = 'cbbdabcbbcba';
console.log(findLongestPalindrome(word));