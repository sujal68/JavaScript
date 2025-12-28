// Question 1 Find index of sum of two element

let array = [2, 7, 11, 15];
let target = 22;

function sumOfTwoElement(array, target) {
    let record = {}

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let need = target - currentElement;

        if (record[need] !== undefined) {
            return [record[need], i];
        }

        record[currentElement] = i;
    }
};

let result = sumOfTwoElement(array, target);
if (result === undefined) {
    console.log("Element Is Note Found!! To Sum Of Target Elements !");

} else {
    console.log(result);
}