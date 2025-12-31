// Question 5 -> Frequency Find Of Array 

let arr = [1, 2, 3, 2, 4, 1, 2, 5];

function findFrequencyArray(a) {
    let freq = {};

    for (let i = 0; i < a.length; i++) {

        if (freq[a[i]]) {
            freq[a[i]]++;
        } else {
            freq[a[i]] = 1;
        }
    }

    console.log(freq);
}

findFrequencyArray(arr);
