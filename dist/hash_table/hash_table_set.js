"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashTable = function () {
  function HashTable() {
    _classCallCheck(this, HashTable);

    this.table = new Array(12);
  }

  _createClass(HashTable, [{
    key: "put",
    value: function put(input) {
      this.table[this.hashFunction(input, 5)] = input;
    }
  }, {
    key: "contains",
    value: function contains(input) {
      return !!this.table[this.hashFunction(input, 12)];
    }
  }, {
    key: "hashFunction",
    value: function hashFunction(input, max) {
      var num = 0;
      for (var i = 0; i < input.length; i++) {
        num = num + input.charCodeAt(i) * i;
      }
      return num % max;
    }
  }]);

  return HashTable;
}();

// const ht = new HashTable()
// ht.put({'aileen': 'is freaking amazing'})
// ht.put({'aileen2': 'is freaking amazing'})


// console.log(ht)


exports.default = HashTable;