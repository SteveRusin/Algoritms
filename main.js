const array = [7, 8, 9, 5, 6, 2, 3, 1, 4];

function boobleSort(arr) {
    const tempArr = arr.slice();
    let saveVal;
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1; j++) {
            let leftVal = tempArr[j];
            let rightVal = tempArr[j + 1];

            if (leftVal > rightVal) {
                saveVal = leftVal;
                tempArr[j] = rightVal;
                tempArr[j + 1] = saveVal;
            } else {
                tempArr[j] = leftVal;
                tempArr[j + 1] = rightVal;
            }



        }
    }
    return tempArr;
}


console.log('​boobleSort(array)', boobleSort(array));
