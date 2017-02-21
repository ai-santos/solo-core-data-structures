'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

    this._length = 0;
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
      this._length++;
    }
  }, {
    key: 'search',
    value: function search(data) {
      if (this._root === null) {
        return null;
      }
      var found = false;
      var currentNode = this._root;

      while (!found && currentNode) {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          found = true;
        }
      }
      return currentNode;
    }
  }, {
    key: 'remove',
    value: function remove(data) {
      var found = false;
      var parentNode = null;
      var currentNode = this._root;
      var countChildren = void 0;
      var replacement = void 0;
      var replacementParentNode = void 0;

      while (!found && currentNode) {
        if (data < currentNode.data) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else {
          found = true;
        }
      }

      if (found) {
        countChildren = (currentNode.left !== null ? 1 : 0) + (currentNode.right !== null ? 1 : 0);
      }if (currentNode === this._root) {
        switch (countChildren) {
          case 0:
            this._root = null;
            break;
          case 1:
            this._root = currentNode.right === null ? currentNode.left : currentNode.right;
            break;
          case 2:
            replacement = this._root.left;
            while (replacement.right !== null) {
              replacementParentNode = replacement;
              replacement = replacement.right;
            }
            if (replacementParentNode !== null) {
              replacementParentNode.right = replacement.left;
              replacement.right = this._root.right;
              replacement.left = this._root.left;
            } else {
              replacement.right = this._root.right;
            }
            this._root = replacement;
        }
      } else {
        switch (countChildren) {
          case 0:
            if (currentNode.data < parentNode.data) {
              parentNode.left = null;
            } else {
              parentNode.right = null;
            }
            break;
          case 1:
            if (currentNode.data < parentNode) {
              parentNode.left = currentNode.left === null ? currentNode.right : currentNode.left;
            } else {
              parentNode.right = currentNode.right === null ? currentNode.left : currentNode.right;
            }
            break;
          case 2:
            replacement = currentNode.left;
            replacementParentNode = currentNode;

            while (replacement.right !== null) {
              replacementParentNode = replacement;
              replacement = replacement.right;
            }
            replacement.right = replacement.left;
            replacement.right = currentNode.right;
            replacement.left = currentNode.left;

            if (currentNode.data < parentNode.data) {
              parentNode.left = replacement;
            } else {
              parentNode.right = replacement;
            }
        }
      }
    }
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
  }, {
    key: 'count',
    value: function count() {
      return this._length;
    }
  }]);

  return BinarySearchTree;
}();

exports.default = BinarySearchTree;