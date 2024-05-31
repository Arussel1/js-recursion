function mergeSort(arr){
    if(arr.length === 0){
        return [];
    }else if(arr.length === 1){
        return arr;
    }
    const leftArr = arr.slice(0,Math.floor(arr.length/2));
    const rightArr = arr.slice(Math.floor(arr.length/2),arr.length);

    return mergeList(mergeSort(leftArr),mergeSort(rightArr));
}

function mergeList(left,right){
    const res = [];
    let leftCounter = 0;
    let rightCounter = 0;
    while(leftCounter < left.length || rightCounter < right.length){
        if(leftCounter >= left.length){
            res.push(right[rightCounter]);
            rightCounter += 1;
        }else if(rightCounter >= right.length){
            res.push(left[leftCounter]);
            leftCounter += 1;
        }else{
            if(right[rightCounter] > left[leftCounter]){
                res.push(left[leftCounter]);
                leftCounter += 1;
            }else{
                res.push(right[rightCounter]);
                rightCounter += 1;
            }
        }
    }
    return res;
}
console.log(mergeSort([]));
console.log(mergeSort([1]));
console.log(mergeSort([2,1]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));