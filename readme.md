# Algorithms

Problem: Given a number, check if it is a even number or an odd number.

Algorithm 1: Check the divisibility

1. Get the number
2. Check if the number is divisible by 2 (whether it leaves a remainder of 0 when divided by 2)
3. If the number is divisible by 2, then it is an even number
4. If the number is not divisible by 2, then it is an odd number

Algorithm 2: Check the last digit

1. Get the number
2. Find the last digit of the number
3. Check if the last digit is 0, 2, 4, 6, or 8
4. If true => the number is even
5. If false => the number is odd

Algorithm 3: Generate the sequence

1. Get the number
2. Generate a sequence of numbers starting from 0
3. Check if the number is in the sequence
4. If the number is in the sequence, then it is an even number
5. If the number is not in the sequence, then it is an odd number

# Homeworks

1. Given a number, check if it is a prime number or not.
2. Given a number, check if it is a palindrome number or not.
3. Given a number, check if it is a perfect number or not.
4. Given a number, check if it is a happy number or not.
5. Given a number, check if it is a fibonacci number or not.
6. Given a number, check if it is a armstrong number or not.
7. Given two numbers, find the greatest common divisor (GCD) of the two numbers.
8. Given two numbers, find the least common multiple (LCM) of the two numbers.
9. Given a number, find the factorial of the number.
10. Given a number, find the sum of the digits of the number.
11. Given a number, find the reverse of the number.
12. Given a number, find the number of digits in the number.
13. Given a number, find the number of prime factors of the number.
14. Find the nth number in the fibonacci sequence.
15. Find the nth prime number.

## Suggestions

- LCM
- GCD
- Happy number
- nth prime number

Happy Number: A number is called happy if it leads to 1 after a sequence of steps wherein each step number is replaced by the sum of squares of its digit that is if we start with Happy Number and keep replacing it with digits square sum, we reach 1.

Example:

19 is Happy Number,

1^2 + 9^2 = 82 => 8^2 + 2^2 = 68 => 6^2 + 8^2 = 100 => 1^2 + 0^2 + 0^2 = 1

So, 19 is a Happy Number.

Examples: 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100

The numbers which are not Happy are called Unhappy Numbers.

Examples: 2, 3, 4, 5, 6, 8, 9, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30

## Patterns
