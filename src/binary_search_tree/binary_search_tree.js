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
    if(this._root === null) {
      return null
    }
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

  remove(data) {
    let found = false
    let parentNode = null
    let currentNode = this._root
    let countChildren
    let replacement
    let replacementParentNode


    while(!found && currentNode) {
      if(data < currentNode.data) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if(data > currentNode.data) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        found = true
      }
    }

    if (found) {
      countChildren = (currentNode.left !== null ? 1 : 0) +
                      (currentNode.right !== null ? 1 : 0)
    } if (currentNode === this._root) {
        switch(countChildren) {
          case 0:
            this._root = null
            break
          case 1:
            this._root = (currentNode.right === null ? currentNode.left : currentNode.right)
            break
          case 2:
            replacement = this._root.left
            while (replacement.right !== null) {
              replacementParentNode = replacement
              replacement = replacement.right
            }
            if (replacementParentNode !== null) {
              replacementParentNode.right = replacement.left
              replacement.right = this._root.right
              replacement.left = this._root.left
            } else {
                replacement.right = this._root.right
            }
            this._root = replacement
        }
  } else {
      switch(countChildren) {
        case 0:
          if(currentNode.data < parentNode.data) {
            parentNode.left = null
          } else {
            parentNode.right = null
          }
          break;
        case 1:
          if(currentNode.data < parentNode) {
            parentNode.left = (currentNode.left === null ? currentNode.right : currentNode.left)
          } else {
            parentNode.right = (currentNode.right === null ? currentNode.left : currentNode.right)
          }
          break;
        case 2:
          replacement = currentNode.left
          replacementParentNode = currentNode

          while (replacement.right !== null) {
            replacementParentNode = replacement
            replacement = replacement.right
          }
          replacement.right = replacement.left
          replacement.right = currentNode.right
          replacement.left = currentNode.left

          if (currentNode.data < parentNode.data) {
            parentNode.left = replacement
          } else {
              parentNode.right = replacement
          }
      }
    }
  }


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

export default BinarySearchTree