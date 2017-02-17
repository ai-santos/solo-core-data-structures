class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this._length = 0;
    this._root = null
  }

  contains(data) {
    let foundNode = false
    let currentNode = this._root

    while(!foundNode && currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
          currentNode = currentNode.right
      } else {
          foundNode = true;
      }
    }
    return foundNode
  }

  insert(data) {
    let node = new Node(data)
    let currentNode

    if (this._root === null) {
      this._root = node
    } else {
        currentNode = this._root

        while(true) {
          if (data < currentNode.data) {
            if (currentNode.left === null) {
              currentNode.left = node
              break
            } else {
                currentNode = currentNode.left
            }
          } else if (data > currentNode.data) {
              if (currentNode.right === null) {
                currentNode.right = node
                break
              } else {
                  currentNode = currentNode.right
                }
             } else {
                break
          }
      }
    }
    this._length++
  }

  search(data) {
    let found = false
    let currentNode = this._root

    while(!found && currentNode) {
      if(data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        currentNode = currentNode.right
      } else {
        found = true
      }
    }
    return currentNode
  }

  // remove() {

  // }

  inOrder(node, myFunc) {
    if (node !== null) {
      this.inOrder(node.left, myFunc)
      myFunc(node.data)
      this.inOrder(node.right, myFunc)
    }
  }

  preOrder(node, myFunc) {
    if (node !== null) {
      myFunc(node.data)
      this.preOrder(node.left, myFunc)
      this.preOrder(node.right, myFunc)
    }
  }

  postOrder(node, myFunc) {
    if (node !== null) {
      this.postOrder(node.left, myFunc)
      this.postOrder(node.right, myFunc)
      myFunc(node.data)
    }
  }

  traverse(order, myFunc) {
    if (order === 'inOrder') {
      this.inOrder(this._root, myFunc)
    }

    if (order === 'preOrder') {
      this.preOrder(this._root, myFunc)
    }

    if (order === 'postOrder') {
      this.postOrder(this._root, myFunc)
    }
  }

  count() {
    return this._length
  }

}

const bst = new BinarySearchTree()
bst.insert(13)
bst.insert(14)
bst.insert(15)
console.log(bst.search(14))
// console.log(bst.count())
// bst.traverse('inOrder', (val) => {
//   console.log(val)
// })
// console.log(bst.contains(13))
// console.log(bst._root.data)

// console.log(JSON.stringify(bst, null, 4))

// export default BinarySearchTree