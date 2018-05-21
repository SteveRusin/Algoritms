const array = [7, 8, 9, 5, 6, 2, 3, 1, 4];

function quickSort(arr, leftInx, rightIndx) {
    let left;

    if (arr.length > 1) {
        leftInx = leftInx ? leftInx : 0;
        rightIndx = rightIndx ? rightIndx : arr.length - 1;

        left = doPartition(arr, leftInx, rightIndx);

        if (leftInx < left - 1) {
            quickSort(arr, leftInx, left - 1);
        }

        if(left < rightIndx) {
            quickSort(arr, left, rightIndx);
        }
    }

    return arr;
}


console.log('​quickSort(array)', quickSort(array));


function swap(item, firstIndex, secondIndex) {
    const temp = item[firstIndex];
    item[firstIndex] = item[secondIndex];
    item[secondIndex] = temp;
}

function doPartition(arr, leftInx, rightIndx) {
    const pivotIndex = Math.floor((leftInx + rightIndx) / 2);
    const pivot = arr[pivotIndex];


    while (leftInx <= rightIndx) {
        while (arr[leftInx] < pivot) {
            leftInx++;
        }

        while (arr[rightIndx] > pivot) {
            rightIndx--;
        }

        if (leftInx <= rightIndx) {
            swap(arr, leftInx, rightIndx);
            leftInx++;
            rightIndx--;
        }
    }

    return leftInx;
}
