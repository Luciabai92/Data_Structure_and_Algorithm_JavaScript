class myHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)*i)%this.data.length;
    }
    return hash;
  }//o(1)

  set(key,value){
    let address = this._hash(key);
    if (!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
  }//o(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0]===key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }//o(1) or o(n)when hash collision

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]){
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHash = new myHashTable(50);
myHash.set('grapes',10000);
myHash.set('apples',20000);
console.log(myHash.get('grapes'));
console.log(myHash.keys());
