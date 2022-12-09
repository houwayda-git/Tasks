/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

function countVowels(myString) {
    let count = 0;
    for (let i = 0; i < muStrung.length; i++) {
        if (myString[i].toLowerCase() === 'a' || myString[i].toLowerCase() === 'e'
            || myString[i].toLowerCase() === 'i' || myString[i].toLowerCase() === 'o' || myString[i].toLowerCase() === 'w') {
            count++;
        }
    }
    return count;
}

/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function asEven(number) {
    if (Math.abs(number) % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

/* You are going to be given a word. Your job is to return the middle character of the word.
 If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.*/

function centerStr(str) {
    let result = false;
    if (str.length % 2 === 0) {
        result = str[str.length / 2] + str[(str.length / 2) - 1];
    }
    return result;
}

/* Very simple, given an integer or a floating-point number, find its opposite. */

function oppositNbr(nbr) {
    return nbr * (-1);
}

/* accum("abcd") -> "A-Bb-Ccc-Dddd" */

function accum(s) {
    let letters = s.split('');
    let words = [];

    for (let i = 0; i < letters.length; i++) {
        words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }

    return words.join('-');
}