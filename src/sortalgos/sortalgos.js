// export const mergeSort = array => {
//     if (array.length == 1) return array;
//     const middleIdx = Math.floor(array.length/2);
//     const firstHalf = mergeSort(array.slice(0, middleIdx));
//     const secondHalf = mergeSort(array.slice(middleIdx));
//     const sortedArray = [];
//     let i=0, j=0;
//     while (i < firstHalf.length && j < secondHalf.length) {
//         if(firstHalf[i] < secondHalf[j]){
//             sortedArray.push(firstHalf[i++]);
//         } else {
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// }

export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function getBubbleSortAnimations (array) {
  var sorted = false;
  var animations = [];
  var consoleText = [];

  while(!sorted){
    sorted = true;
    for(var i=0; i<array.length; i++){
      if(array[i] > array[i+1]){
        let strCT = "Comparing " + array[i] + " with " + array[i+1];
        consoleText.push(strCT);
        let strCT2 = "Swapping " + array[i] + " with " + array[i+1];
        consoleText.push(strCT2);
        let strCT3 = " ";
        consoleText.push(strCT3);
        sorted = false;
        animations.push([i, i+1]);
        animations.push([i, i+1]);
        animations.push([i, array[i+1], i+1, array[i]]);
        let a = array[i];
        array[i] = array[i+1];
        array[i+1] = a;
      }
    }
  }
  let strCT = "Sorting Completed!";
  consoleText.push(strCT);
  return {animations, consoleText};
}

export function getSelectionSortAnimations (array) {
  var animations = [];
  for(var i = 0; i<array.length; i++){
    var minpos = i;
    for(var j = i; j<array.length; j++){
      animations.push([j,minpos]);
      if(array[j] < array[minpos]){
        minpos = j;
      }
    }
    if(minpos !== i) {
      animations.push([minpos, array[i], i, array[minpos]]);
      let temp = array[minpos];
      array[minpos] = array[i];
      array[i] = temp;
    }
  }
  return animations;
}

export function getInsertionSortAnimations (array) {
  var animations = [];
  for(var i = 1; i < array.length; i++){
    var sortVal = array[i];
    while(array[i-1] > sortVal && i>0){
      animations.push([i-1,i]);
      animations.push([i-1,i]);
      animations.push([i-1, array[i], i, array[i-1]]);
      let temp = array[i];
      array[i] = array[i-1];
      array[i-1] = temp;
      i=i-1;
    }
  }
  return animations;
}

export function getQuickSortAnimations (array) {
  let QSinst = new QuickSortAnimator(array);
  return QSinst.getQuickSortAnims();
}

class QuickSortAnimator {
  constructor(array){
    this.QSanimations = [];
    this.mainArr = array;
    this.qsExecs = 0;
    console.log(this.mainArr);
    console.log(this.quickSort(array));
  }
  getQuickSortAnims () {
    console.log("QS Execs: "+this.qsExecs);
    return this.QSanimations;
  }
  quickSort(array){
    this.qsExecs+=1;
    if(array.length === 1) return array;
    const pivot = array[array.length-1];
    const smallItems = [];
    const bigItems = [];
    for(var i=0; i<array.length-1; i++){
      this.QSanimations.push([i,array.length-1]);
      this.QSanimations.push([i,array.length-1]);
      if(array[i]<pivot){
        // this.QSanimations.push([this.mainArr.indexOf(array[i]),pivot,i,array[i]]);
        this.QSanimations.push([this.mainArr.indexOf(array[i]),this.mainArr[this.mainArr.indexOf(array[i])],this.mainArr.indexOf(pivot),pivot]);
        this.QSanimations.push([i,pivot,i,array[i]]);
        smallItems.push(array[i]);
      }else{
        this.QSanimations.push([i,pivot,i,array[i]]);
        // this.QSanimations.push([i,pivot,this.mainArr.indexOf(pivot),array[i]]);
        // this.QSanimations.push([this.mainArr.indexOf(array[i]),array[i],this.mainArr.indexOf(pivot),pivot]);
        // this.QSanimations.push([array[i],pivot]);
        bigItems.push(array[i]);
      }
    }
  
    if(smallItems.length > 0 && bigItems.length > 0){
      return [...this.quickSort(smallItems), pivot, ...this.quickSort(bigItems)];
    } else if(smallItems.length > 0){
      return [...this.quickSort(smallItems), pivot];
    }else{
      return [pivot, ...this.quickSort(bigItems)];
    }
  }
}