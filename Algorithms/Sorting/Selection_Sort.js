//time: o(n^2)
//space: o(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  for(let i = 0; i < length; i++) {
    //set current index as min
    let min = i;
    let temp = array[i];
    //search for if any number lower than temp
    for(let j = i+1; j < length; j++) {
      if(array[min] > array[j]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}

selectionSort(numbers);
console.log(numbers);
