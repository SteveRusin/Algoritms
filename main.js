const array = [1, 2, 5, 6, 8, 10, 15, 19, 25, 28, 29, 32, 35, 41, 46, 48, 50];
const randomArr = shuffle(array);

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const leftPart = arr.slice(0, middle);
    const rightPart = arr.slice(middle);

    return merge(mergeSort(leftPart), mergeSort(rightPart))
}

function merge(left, right) {
    const result = [];
    let poinerLeft = 0;
    let pointerRight = 0;

    while (poinerLeft < left.length && pointerRight < right.length) {
        if (left[poinerLeft] < right[pointerRight]) {
            result.push(left[poinerLeft]);
            poinerLeft++;
        } else {
            result.push(right[pointerRight]);
            pointerRight++;
        }

    }


    return result.concat(left.slice(poinerLeft)).concat(right.slice(pointerRight));
}

console.log(mergeSort(randomArr));

















function swap(arr, fisrtIndx, secondIndx) {
    const temp = arr[fisrtIndx];
    arr[fisrtIndx] = arr[secondIndx];
    arr[secondIndx] = temp;
}





function shuffle(array) {
    array = array.slice();
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
