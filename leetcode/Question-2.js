// Question 2 Reverce Of single Array

// let array = [12, 65, 98, 34, 87, 43];

// function Reverce(array) {
//     let left = 0; // left = 12
//     let right = array.length - 1; // right = 5 -> right = 43

//     while (left < right) {
//         let temp = array[left];
//         array[left] = array[right];
//         array[right] = temp;

//         left += 1;
//         right -= 1;
//     }
//     return array;
// };

// const reverce = Reverce(array);
// console.log(reverce);

// space complexcity O[1]
// time complexcity O[n]

let arr = [12, 65, 98, 34, 87, 43];

function reverseArray(a) {
    for (let l = 0, r = a.length - 1; l < r; l++, r--) {
        [a[l], a[r]] = [a[r], a[l]];
        // 0 , 5 = 43 , 12;
    }
    return a;
}

console.log(reverseArray(arr));