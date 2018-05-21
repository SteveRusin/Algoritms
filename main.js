const array = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(arr, target, start, end) {
    const middleInx = Math.floor((start + end) / 2);
    const middle = arr[middleInx];

    if (target === middle) {
        return middleInx;
    } else if (target > middle) {
        return binarySearch(arr, target, middleInx + 1, end);
    } else if (target < middle) {
        return binarySearch(arr, target, start, middleInx - 1);
    }

    return -1;
}


console.log('binarySearch(array)', binarySearch(array, 8, 0, array.length - 1));
