/**
 * Write a function that accepts an array of 11 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * 
 * For the UK - 07000 000 000
 * 
 * For the US - (123) 456-7890
 */

const ukUSConverter = (phoneNumber) => {
    let ukCheck = phoneNumber.slice(0, 2);
    let usCheck = phoneNumber.slice(0, 3);
    if (ukCheck[0] == 0 && ukCheck[1] == 7 && phoneNumber.length == 11) {
        let convertedUkPhoneNumber = phoneNumber.map(String);
        let joinedUkPhoneNumber = convertedUkPhoneNumber.join("");
        let ukSubstring = joinedUkPhoneNumber.substring(5, 8);
        let seperatedUkPhoneNumber = joinedUkPhoneNumber.replace(ukSubstring, "  ");
        let ukPhoneNumber = seperatedUkPhoneNumber.slice(0, 6) + ukSubstring + seperatedUkPhoneNumber.slice(6);
        console.log(ukPhoneNumber);
    }
    else if (usCheck[0] == 1 && usCheck[1] == 2 && usCheck[2] == 3 && phoneNumber.length == 10) {
        let convertedUsPhoneNumber = phoneNumber.map(String);
        let joinedUsPhoneNumber = convertedUsPhoneNumber.join("");
        let usSubstring = joinedUsPhoneNumber.substring(3, 6);
        let seperatedUsPhoneNumber = joinedUsPhoneNumber.replace(usSubstring, ") ");
        let usPhoneNumber = "(" + seperatedUsPhoneNumber.slice(0, 5) + usSubstring + "-" + seperatedUsPhoneNumber.slice(5);
        console.log(usPhoneNumber);
    }
    else {
        console.log("The phone number entered is invalid!");
    }
}
ukUSConverter([1, 2, 3, 6, 9, 2, 5, 6, 4, 2]);
ukUSConverter([0, 7, 6, 7, 2, 4, 2, 2, 8, 6, 5]);
ukUSConverter([8, 5, 5, 3, 2, 7, 8, 8, 4, 3, 1]);
ukUSConverter([7, 2, 2, 6, 4, 6, 7, 8,]);