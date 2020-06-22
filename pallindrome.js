/**
 * Write function isPalindrome that checks if a string (case insensitive) is a palindrome.
 * 
 * Dad == true
 * Mum == true
 * Dean == false
 */

const isPallindrome = (word) => {
    let middleIndex = Math.ceil(word.length / 2);
    let middleIndexMinusOne = (middleIndex - 1);
    let firstHalf = (word.slice(0, middleIndex));
    let wordLength = word.length;
    let originalSecondHalf = "";
        if (wordLength % 2 != 0) {
            let letters = (word.slice(middleIndexMinusOne));
            originalSecondHalf += letters;
        }
        else {
            let letters = (word.slice(middleIndex));
            originalSecondHalf += letters;
        }
    let secondHalfSplit = originalSecondHalf.split("");
    let reversedSecondHalf = secondHalfSplit.reverse();
    let secondHalf = reversedSecondHalf.join("");
    if (firstHalf == secondHalf) {
        console.log(true);
    }
    else {
        console.log(false)
    }
}
isPallindrome("hannah");
isPallindrome("adam");
isPallindrome("jacob");
isPallindrome("emmanuel");
isPallindrome("repaper");
isPallindrome("mum");