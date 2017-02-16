'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.left = null;
  this.right = null;
};

var BinarySearchTree = function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this._root = null;
  }

  _createClass(BinarySearchTree, [{
    key: 'contains',
    value: function contains(data) {
      var foundNode = false;
      var currentNode = this._root;

      while (!foundNode && currentNode) {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          foundNode = true;
        }
      }
      return foundNode;
    }
  }, {
    key: 'insert',
    value: function insert(data) {
      var node = new Node(data);
      var currentNode = void 0;

      if (this._root === null) {
        this._root = node;
      } else {
        currentNode = this._root;

        while (true) {
          if (data < currentNode.data) {
            if (currentNode.left === null) {
              currentNode.left = node;
              break;
            } else {
              currentNode = currentNode.left;
            }
          } else if (data > currentNode.data) {
            if (currentNode.right === null) {
              currentNode.right = node;
              break;
            } else {
              currentNode = currentNode.right;
            }
          } else {
            break;
          }
        }
      }
    }

    // search() {

    // }

    // remove() {

    // }

  }, {
    key: 'inOrder',
    value: function inOrder(node, myFunc) {
      if (node !== null) {
        this.inOrder(node.left, myFunc);
        myFunc(node.data);
        this.inOrder(node.right, myFunc);
      }
    }
  }, {
    key: 'preOrder',
    value: function preOrder(node, myFunc) {
      if (node !== null) {
        myFunc(node.data);
        this.preOrder(node.left, myFunc);
        this.preOrder(node.right, myFunc);
      }
    }
  }, {
    key: 'postOrder',
    value: function postOrder(node, myFunc) {
      if (node !== null) {
        this.postOrder(node.left, myFunc);
        this.postOrder(node.right, myFunc);
        myFunc(node.data);
      }
    }
  }, {
    key: 'traverse',
    value: function traverse(order, myFunc) {
      if (order === 'inOrder') {
        this.inOrder(this._root, myFunc);
      }

      if (order === 'preOrder') {
        this.preOrder(this._root, myFunc);
      }

      if (order === 'postOrder') {
        this.postOrder(this._root, myFunc);
      }
    }

    // count() {

    // }

  }]);

  return BinarySearchTree;
}();

var bst = new BinarySearchTree();
bst.insert(13);
bst.insert(14);
bst.insert(15);
bst.traverse('inOrder', function (val) {
  console.log(val);
});
// console.log(bst.contains(13))
// console.log(bst._root.data)

// console.log(JSON.stringify(bst, null, 4))

// export default BinarySearchTree