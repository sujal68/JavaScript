// Question 5 -> Frequency Find Of String 

let str = "programming";

function findFrequencyString(s) {
    let freq = {};

    for (let i = 0; i < s.length; i++) {

        if (freq[s[i]]) {
            freq[s[i]]++;
        } else {
            freq[s[i]] = 1;
        }
    }

    console.log(freq);
}

findFrequencyString(str);
