'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key, value) {
  _classCallCheck(this, Node);

  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
  }

  _createClass(LinkedList, [{
    key: 'addNode',
    value: function addNode(key, value) {
      var node = new Node(key, value);
      if (this.head) {
        var temp = void 0;
        node.next = this.head;
        temp = this.head;
        this.head = node;
        console.log(temp);
        temp.prev = this.head;
      } else {
        this.head = node;
      }
    }
  }, {
    key: 'findNode',
    value: function findNode(key) {
      var top = this.head;
      while (top != null) {
        if (top.key === key) {
          return top;
        }
        top = top.next;
      }
      return top;
    }
  }, {
    key: 'updateNode',
    value: function updateNode(key, value) {
      var node = this.findNode(key);
      node.value = value;
    }
  }, {
    key: 'findKey',
    value: function findKey(key) {
      var found = this.findNode(key);
      if (found) return found.value;
      return null;
    }
  }]);

  return LinkedList;
}();

var HashTable = function () {
  function HashTable() {
    _classCallCheck(this, HashTable);

    this.storage = [];
    this._length = 0;
  }

  _createClass(HashTable, [{
    key: 'hashFunction',
    value: function hashFunction(val) {
      var charArray = val.toString().split('');
      var totalSum = charArray.reduce(function (sum, char) {
        return sum + char.charCodeAt(0);
      }, 0);
      return totalSum % 1024;
    }
  }, {
    key: 'put',
    value: function put(key, val) {
      var index = this.hashFunction(key);
      var bucket = this.storage[index];
      if (bucket) {
        var valInLinkedList = bucket.findKey(key);
        if (!valInLinkedList) {
          bucket.addNode(key, val);
          this._length++;
        } else {
          bucket.updateNode(key, val);
        }
      } else {
        this.storage[index] = new LinkedList();
        var _bucket = this.storage[index];
        _bucket.addNode(key, val);
        this._length++;
      }
      return this;
    }
  }, {
    key: 'get',
    value: function get(key) {
      var index = this.hashFunction(key);
      console.log('get index:', index);
      var bucket = this.storage[index];
      if (bucket) {
        return bucket.findKey(key);
      }
      return null;
    }
  }, {
    key: 'contains',
    value: function contains(key) {
      var index = this.hashFunction(key);
      var bucket = this.storage[index];
      var node = bucket.findNode(key);
      if (node) {
        if (node.key === key) {
          return true;
        }
        return false;
      }
      return false;
    }
  }, {
    key: 'iterate',
    value: function iterate(callback) {}
  }, {
    key: 'size',
    value: function size() {
      return this._length;
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      var index = this.hashFunction(key);
      var bucket = this.storage[index];
      var node = bucket.findNode(key);
      if (node) {
        if (node.key === key) {
          console.log(node);
          console.log(node.prev.next);
          node.prev.next = node.next;
          this._length--;
        } else {
          throw new Error('This key does not exist');
        }
      } else {
        throw new Error('This key does not exist');
      }
    }
  }]);

  return HashTable;
}();

// let ht = new HashTable()
// ht.put('aileen', 'super cool')
// console.log('size:: ', ht.size())

exports.LinkedList = LinkedList;
exports.HashTable = HashTable;