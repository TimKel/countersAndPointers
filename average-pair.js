// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let trying = (arr[left] + arr[right]) / 2;
        if(trying === avg){
            console.log("GOAL", arr[left],arr[right], avg)
            return true
        } else if (trying < avg ){
            left++
        } else {
            right--
        }
    }
    return false;
}

