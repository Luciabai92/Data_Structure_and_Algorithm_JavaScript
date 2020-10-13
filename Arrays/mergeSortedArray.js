//merge two sorted array
function mergeSortedArrays(array1, array2){
  let i = 0, j = 0, k = 0;
  const mergedArray = [];

  length1 = array1.length;
  length2 = array2.length;

  while (j!= length1 && k!= length2) {
    if(array1[j] <= array2[k]) {
      mergedArray[i] = array1[j];
      j++
    }else {
      mergedArray[i] = array2[k];
      k++
    }
    i++
  }

  while (j != length1) {
    mergedArray[i] = array1[j];
    j++;
    i++;
  }

  while (k != length2) {
    mergedArray[i] = array2[k];
    k++;
    i++;
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31],[4,6,30]));
