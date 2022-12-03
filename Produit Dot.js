//task 1
function dot_product(v1, v2) {
    let prod = (v1[0] * v2[0]) + (v1[1] * v2[1]);
    if (prod == 0) {
        return true;
    } else {
        return false;
    }
}

function scalaireProd(array) {
    let result = [];
    for (let i = 0; i < array.length; i = i + 2) {
        let vector1 = array[i];
        let vector2 = array[i + 1];
        result.push(dot_product(vector1, vector2));
    }
    return result;
}


//task 2
function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}