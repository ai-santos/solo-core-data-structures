class HashTable {
  constructor() {
    this.table = new Array(12)
  }

  put(input) {
    this.table[this.hashFunction(input, 5)] = input
  }

  contains(input) {
    return !!this.table[this.hashFunction(input, 12)]
  }

  hashFunction(input, max) {
    let num = 0;
    for(let i = 0; i < input.length; i++) {
      num = num + input.charCodeAt(i) * i
    }
    return num % max
  }
}

// const ht = new HashTable()
// ht.put({'aileen': 'is freaking amazing'})
// ht.put({'aileen2': 'is freaking amazing'})


// console.log(ht)
export default HashTable
