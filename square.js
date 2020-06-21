/**
 * Task
Given an integral number, determine if it's a square number:
* In mathematics, a square number or perfect square is an integer that is the square of an integer.
* in other words, it is the product of some integer with itself.
 * 
 * 
 * isSquare(4) = true
 * isSquare(7) = false
 */

const isSquare = (num) => {
    if (num < 0) {
        newNum = (num * -1);
    }
    else if (num >= 0) {
        newNum = num;
    }
    limit = Math.ceil(newNum/ 2 + 2);
    cutOff = Math.ceil(newNum/ 2 + 1);
    for (i = 2; i < limit; i++) {
        if (i == (newNum/ i)) {
            console.log(true);
            break;
        }
        else if (i == cutOff) {
            console.log(false);
            break;
        }
    }
}
isSquare(81);
isSquare(11);
isSquare(-16);
isSquare(-11);
isSquare(-1);
isSquare(-4294836225);