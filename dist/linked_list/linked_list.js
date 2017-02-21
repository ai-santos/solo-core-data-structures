"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data, next) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this._length = 0;
  }

  _createClass(LinkedList, [{
    key: "add",
    value: function add(value) {
      if (!value) {
        throw new Error("Please pass in a value!");
      }
      var node = new Node(value);
      if (!this.head) {
        this.head = node;
        this._length += 1;

        return node;
      }
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this._length += 1;
      return node;
    }
  }, {
    key: "searchNodeAt",
    value: function searchNodeAt(position) {
      var currentNode = this.head;
      var length = this._length;
      var count = 1;

      if (length === 0 || position < 1 || position > length) {
        throw new Error("This node position does not exist in this list.");
      }

      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode;
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;