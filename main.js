const array = [7, 8, 9, 5, 6, 2, 3, 1, 4];

function insertionSort(arr) {
    const tempArr = arr.slice();

    for (var i = 0; i < arr.length; i++) {
        const unsortedItem = tempArr[i];

        for (var j = i - 1; j >= 0 && tempArr[j] > unsortedItem; j--) {
            tempArr[j + 1] = tempArr[j];
        }

        tempArr[j + 1] = unsortedItem;

    }
    return tempArr;
}


console.log('​insertionSort(array)', insertionSort(array));
