// Question - 3 -> Find Duplicate Element on Array 

let array = [1, 2, 3, 4, 5, 2, 5, 4, 1];

function findAllDuplicates(arr) {
    let seen = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {

        if (seen[arr[i]] === 1) {
            duplicates.push(arr[i]);
        }

        if (seen[arr[i]]) {
            seen[arr[i]]++;
        } else {
            seen[arr[i]] = 1;
        }
    }

    return duplicates;
}

console.log("The Duplicate Element", findAllDuplicates(array));
