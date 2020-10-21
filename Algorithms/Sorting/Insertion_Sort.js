//best time: o(n)
//worst: o(n^2)
//space: o(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;

  for(let i=1; i < length; i++) {
    const key = array[i];
    let j = i-1;

    while(j>=0 && array[j] > key) {
      array[j+1] = array[j];
      j--;
    }

    array[j+1] = key;
  }
}


function insertionSort1(array) {
  const length = array.length;

  for(let i=1; i < length; i++) {
    const key = array[i];

    for(var j=i-1; j>=0; j--) {
      if(array[j] > key) {
        array[j+1] = array[j];
      } else {
        break;
      }
    }

    array[j+1] = key;
  }
}

function insertionSort2(array) {
  const length = array.length;

  for(let i=1; i < length; i++) {
    if(array[0] > array[i]) {
      array.unshift(array.splice(i,1)[0]);
    } else {
      for(let j=1; j<i; j++) {
        if(array[i] > array[j-1] && array[i] < array[j]) {
          array.unshift(array.splice(i,1)[0]);
        }
      }
    }


  }
}

//insertionSort(numbers);
insertionSort1(numbers);

console.log(numbers);
