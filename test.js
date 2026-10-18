// function mergeSortedArrays(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     let result = [];

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++
//         }
//     }

//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     return result;
// }

function mergeSortedArrays(arr1, arr2) { 
    result = [...arr1, ...arr2]
    return result
}

console.log(mergeSortedArrays([1, 2, 3], [3,4, 5, 6]));