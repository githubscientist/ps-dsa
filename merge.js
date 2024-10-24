// Given two sorted arrays, merge the two arrays into a single sorted array.

// function compareFn(a, b) {
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// Algorithm 1: Merge and Sort
// function merge(nums1, nums2) {
//     let mergedArray = [...nums1, ...nums2];

//     mergedArray.sort((a, b) => a - b);

//     return mergedArray;
// }

// console.log(merge([1, 3, 5], [2, 4, 6]));

// function findPosition(nums1, number) {
//     // assume that the pos is nums1.length
//     let pos = nums1.length;

//     // iterate the array and find the pos where
//     // number > nums1[i] and number < nums1[i+1]
//     for (let i = 0; i < nums1.length; i++) {
//         if (number < nums1[i]) return i;
//     }

//     return pos;
// }

// // Algorithm 2: Insertion Sort
// function merge(nums1, nums2) {
//     // assume that nums1 -> largest array
//     // nums2 -> smallest array
//     for (let i = 0; i < nums2.length; i++) {
//         // find the right position in nums1, nums2[i]
//         let pos = findPosition(nums1, nums2[i]);

//         // insert the element nums2[i] in nums1 at pos
//         nums1.splice(pos, 0, nums2[i]);
//     }

//     // return the merged array, nums1
//     return nums1;
// }


// Algorithm 3: Merge Sort
function merge(nums1, nums2) {
    // place the two pointers
    let f = 0, s = 0;

    // create an empty array to store all the merged sorted elements
    let mergedArray = [];

    while (f < nums1.length && s < nums2.length) {
        if (nums1[f] < nums2[s]) {
            mergedArray.push(nums1[f]);
            f++;
        } else {
            mergedArray.push(nums2[s]);
            s++;
        }
    }

    // check if the first array has still elements left to insert into the mergedArray
    while (f < nums1.length) {
        mergedArray.push(nums1[f]);
        f++;
    }

    // check if the second array has still elements left to insert into the mergedArray
    while (s < nums2.length) {
        mergedArray.push(nums2[s]);
        s++;
    }

    return mergedArray;
}

console.log(merge([1, 3, 5], [2, 4, 6]));