const array = [1, 2, 5, 6, 8, 10, 15, 19, 25, 28, 29, 32, 35, 41, 46, 48, 50];
const randomArr = shuffle(array);

function shellSort(arr, searchValue) {
    let gap = Math.floor(arr.length / 2);

    for (let i = 0; i + gap < arr.length && gap >= 1; i++, gap = gap / 2) {
        if (arr[i] > arr[i + gap]) {
            
            swap(arr, i, i + gap);

            for (let j = i; arr[j] > arr[j + gap] && gap === 1; j--) {
                swap(arr, j, j + gap)
            }

        }
    }

    return arr;
}


console.log(shellSort(array, 48));

















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
