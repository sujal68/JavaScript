// Question - 3 -> Find Duplicate Element on Array 

let array = [1, 4, 6, 4, 1];

function findDuplicate(array) {
    let seen = {};
    let duplicate = [];

    for (let i = 0; i < array.length; i++) {
        if (seen[array[i]] === 1) {
            duplicate.push(array[i]);
        }
        if (seen[array[i]]) {
            seen[array[i]]++;
        } else {
            seen[array[i]] = 1;
        }
    }
    return duplicate;
}

let result = findDuplicate(array);
console.log(result);