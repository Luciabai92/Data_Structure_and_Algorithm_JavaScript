//least efficient
//time: o(n^2)
//space: o(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for(let i = 0; i < length-1; i++) {
    for(let j = 0; j < length-1; j++) {
      if(array[j] > array[j+1]) {
        //swap numbers
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
