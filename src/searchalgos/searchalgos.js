export function getLinearSearchAnimations (array, val) {
    var animations=[];
    for(var i=0; i<array.length; i++){
        if(array[i]===val){
            animations.push([i,array[i]]);
            return animations;
        } else {
            animations.push([i]);
        }
    }
    return animations;
}

function sortInsertion(array) {
    for(var i = 1; i < array.length; i++){
        var sortVal = array[i];
        while(array[i-1] > sortVal && i>0){
          let temp = array[i];
          array[i] = array[i-1];
          array[i-1] = temp;
          i=i-1;
        }
    }
    return array;
}

function makeBinarySearchAnimations(array, val){
    var animations = [];
    let left = 0;
    let right = array.length-1;
    var mid = 0;
    while(left<=right){
        mid = Math.floor((left+right)/2);
        animations.push([left,right]);
        animations.push([mid]);
        if(array[mid]===val){
            animations.push([mid]);
            return animations;
        }else if(val<array[mid]){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return animations;
}

export function getBinarySearchAnimations (array, val) {
    var sorted_arr = sortInsertion(array);
    return makeBinarySearchAnimations(sorted_arr, val);
}