// Question - 4 -> password validation - uppercase , lowercase , symbol , number and 6 langth |

let password = prompt("Enter your password:");

function validatePassword(pass) {

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (pass.length < 6) {
        console.log("Password too short!");
        return;
    }

    for (let i = 0; i < pass.length; i++) {

        let ch = pass[i];

        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = true;
        }
        else if (ch >= 'a' && ch <= 'z') {
            hasLower = true;
        }
        else if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
        else {
            hasSymbol = true;
        }
    }

    if (hasUpper && hasLower && hasNumber && hasSymbol) {
        console.log("Valid Password ✅");
    }
    else {
        console.log("Invalid Password ❌");
    }
}

validatePassword(password);
