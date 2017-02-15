class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  addNode(key, value){
    const node = new Node(key, value)
    node.next = this.head
    this.head = node
  }

  findNode(key) {
    let top = this.head
    while(top != null) {
      if(top.key === key) {
        return top
      }
      top = top.next
    }
    return top
  }

  updateNode(key, value) {
    let node = this.findNode(key)
    node.value = value
  }

  findKey(key) {
    const found = this.findNode(key)
    if(found)
      return found.value
    return null
  }
}

class HashTable {
  constructor() {
    this.storage = []
    this._length = 0
  }

  hashFunction(val){
    let charArray = val.toString().split('')
    const totalSum = charArray.reduce((sum, char) => {
      return sum + char.charCodeAt(0)
    }, 0)
    return totalSum % 1024
  }

  put(key, val) {
    let index = this.hashFunction(key)
    let bucket = this.storage[index]
    if(bucket) {
      const valInLinkedList = bucket.findKey(key)
      if(!valInLinkedList){
        bucket.addNode(key, val)
        this._length++
      } else {
        bucket.updateNode(key, val)
      }
    } else {
      this.storage[index] = new LinkedList()
      let bucket = this.storage[index]
      bucket.addNode(key, val)
      this._length++
    }
    return this
  }

  get(key) {
    let index = this.hashFunction(key)
    console.log('get index:', index)
    let bucket = this.storage[index]
    if(bucket) {
      return bucket.findKey(key)
    }
    return null
  }

  contains(key) {
    let index = this.hashFunction(key)
    let bucket = this.storage[index]
    let node = bucket.findNode(key)
    if(node) {
      if(node.key === key) {
        return true
      }
      return false
    }
    return false
  }

  // iterate(key, val) {

  // }

  size() {
    return this._length
  }

  remove(key) {
    let index = this.hashFunction(key)
    let bucket = this.storage[index]
    let node = bucket.findNode(key)
    if(node) {
      if(node.key === key) {

      }
      return false
    }
    return false
  }

}

// let ht = new HashTable()
// ht.put('aileen', 'super cool')
// console.log('size:: ', ht.size())

export { LinkedList, HashTable }
