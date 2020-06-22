/**
 * Write function isPalindrome that checks if a string (case insensitive) is a palindrome.
 * 
 * Dad == true
 * Mum == true
 * Dean == false
 */

const isPallindrome = (word) => {
    let middleIndex = (word.length / 2);
    middleIndexAmmended = Math.ceil(middleIndex);
    middleIndexAddOne = (middleIndexAmmended + 1);
    firstHalf = (word.slice(0, middleIndexAmmended));
    secondHalf = (word.slice(middleIndexAmmended));
    secondHalfSplit = secondHalf.split("");
    console.log(secondHalfSplit);
    //counter = "";
    for (let i = 0; i < secondHalfSplit.length; i++) {
        let counter = secondHalfSplit[i];
        return counter;
        //secondHalfReverse = counter.join(" ")
        //return secondHalfReverse;
    }
    console.log(counter);
    if (firstHalf == counter) {
        console.log(true);
    }
    else {
        console.log(false)
    }
}
isPallindrome("hannah");