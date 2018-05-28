const array = [1, 2, 5, 6, 8, 10, 15, 19, 25, 28, 29, 32, 35, 41, 46, 48, 50];

function interpolationSearch(arr, searchValue) {
    let min = 0;
    let max = arr.length - 1;
    let distance;
    let valRange;
    let fraction;
    let estimatePos;

    while (min < max && searchValue >= arr[min] && searchValue <= arr[max]) {
        distance = searchValue - arr[min];
        valRange = arr[max] - arr[min];
        fraction = distance / valRange;
        estimatePos = Math.floor(fraction * max);

        if(arr[estimatePos] === searchValue){
            return estimatePos;
        }

        if(arr[estimatePos] < searchValue){
            min = estimatePos + 1;
        }else{
            max = estimatePos - 1;
        }
    }
    return -1;
    
}


console.log(interpolationSearch(array, 48));
