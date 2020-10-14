function recurringCharacter(array){
  let map = new Map();

  for (let i=0; i < array.length; i++){
    if(!map.has(array[i])){
      map.set(array[i],true);
    }else {
      return array[i];
    }
  }
  return undefined;
}//o(n),space complexity:o(n)

function recurringCharacter2(array){
  let map = {};
  for (let i=0; i < array.length; i++){
    if(map[array[i]]!=undefined){
      map[array[i]] = i;
    }else {
      return array[i];
    }
  }
  return undefined;
}//o(n)

console.log(recurringCharacter([2,5,1,2,3,5,1,2,4]));

console.log(recurringCharacter2([2,5,1,2,3,5,1,2,4]));
