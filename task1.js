//1
function wordCount(str) {
    let caracterNumber = 0;
    let vowelsNumber = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ' || str[i] == '.') {
            caracterNumber += 1;
        }
        str = str.toLowerCase();
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            vowelsNumber += 1;
        }
    }
    return "there are " + caracterNumber + " words and " + vowelsNumber + " vowels";
}
//2
function sumDistincts(array, array2) {
    let result = array.concat(array2);
    let somme = 0;
    const map = [];
    for (let value of result) {
        if (map.indexOf(value) === -1) {
            map.push(value);
            somme += value;
        }
    }
    return somme;
}