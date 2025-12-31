// Question 1 Find index of sum of two element

let arr = [2, 7, 8, 9];
let target = 9;

function findindexofsum(array, target) {
    let result = {};

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let need = target - currentNumber;
        // need = 9 - 2 = 7;
        if (result[need] !== undefined) {
            return [result[need], i];
        }

        result[currentNumber] = i;
    }
}

let response = findindexofsum(arr, target);
if (response === undefined) {
    console.log("Element Is Note Found!! To Sum Of Target Elements !");
}
else {
    console.log(response);
}


