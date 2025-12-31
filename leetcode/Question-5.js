// Question 5 -> Frequency Find Of String 

let str = "programming";

function findFrequencyString(s) {
    let freq = {};

    for (let i = 0; i < s.length; i++) {

        let ch = s[i];

        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

    console.log(freq);
}

findFrequencyString(str);
