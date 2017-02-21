'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectedGraph = function () {
  function DirectedGraph() {
    _classCallCheck(this, DirectedGraph);

    this.vertices = [];
    this.directions = [];
  }

  _createClass(DirectedGraph, [{
    key: 'addVertex',
    value: function addVertex(vertex) {
      this.vertices.push(vertex);
    }
  }, {
    key: 'hasVertex',
    value: function hasVertex(vertex) {
      var foundVertex = this.vertices.find(function (content) {
        return content === vertex;
      });
      return foundVertex !== undefined;
    }
  }, {
    key: 'addDirection',
    value: function addDirection(vertex1, vertex2, weight) {
      this.directions.push({ vertices: { vertex1: vertex1, vertex2: vertex2 }, weight: weight });
    }
  }, {
    key: 'searchForConnectedVertices',
    value: function searchForConnectedVertices(search) {
      return this.directions.filter(function (direction) {
        return search === direction.vertices.vertex1;
      }).map(function (direction) {
        return direction.vertices.vertex2;
      });
    }
  }, {
    key: 'searchForDirection',
    value: function searchForDirection(search) {
      return this.directions.find(function (direction) {
        return JSON.stringify(direction.vertices) === JSON.stringify(search);
      });
    }
  }, {
    key: 'findAllDirections',
    value: function findAllDirections(search) {
      return this.directions.filter(function (direction) {
        if (direction.vertices.vertex1 === search || direction.vertices.vertex2 === search) return direction;
      });
    }
  }, {
    key: 'hasDirection',
    value: function hasDirection(vertex1, vertex2) {
      var search = { vertex1: vertex1, vertex2: vertex2 };
      var match = this.searchForDirection(search);

      return match !== undefined;
    }
  }, {
    key: 'getDirectionWeight',
    value: function getDirectionWeight(vertex1, vertex2) {
      var search = { vertex1: vertex1, vertex2: vertex2 };
      var match = this.searchForDirection(search);

      return match.weight;
    }
  }, {
    key: 'visit',
    value: function visit(vertex, callback) {
      var vertices = this.searchForConnectedVertices(vertex);

      callback(vertex);
      vertices.forEach(callback);
    }
  }, {
    key: 'findPaths',
    value: function findPaths(vertex1, vertex2, lastDirection) {
      var _this = this;

      var vertexDirections = this.findAllDirections(vertex1);
      var paths = [];

      vertexDirections.forEach(function (direction) {
        if (direction.vertices.vertex2 === vertex2) {
          paths.push(direction);
        } else {
          if (JSON.stringify(lastDirection) !== JSON.stringify(direction)) {
            var newPath = { direction: direction, path: _this.findPaths(direction.vertices.vertex2, vertex2, direction) };
            paths.push(newPath);
          }
        }
      });

      return paths;
    }
  }, {
    key: 'findShortestPath',
    value: function findShortestPath(vertex1, vertex2) {
      var paths = this.findPaths(vertex1, vertex2, null);

      var shortestPath = {
        direction: null,
        weight: null
      };

      var checkSubPaths = function checkSubPaths(path, currentWeight) {
        var pathString = [];
        var pathWeight = currentWeight;
        if (path.path) {
          path.path.forEach(function (path2) {
            pathWeight += path2.weight;
            var subPaths = checkSubPaths(path2, pathWeight);
            pathString.push(path2.vertices, subPaths);
          });
        }
        return pathString;
      };

      paths.forEach(function (path) {
        if (path.weight) {
          console.log('path.weight', path.weight);
          if (typeof shortestPath.weight === 'number') {
            if (path.weight < shortestPath.weight) {
              shortestPath.direction = [path.vertices];
              shortestPath.weight = path.weight;
            } else if (path.weight === shortestPath.weight) {
              shortestPath.direction = [shortestPath.direction, path.vertices];
              shortestPath.weight = path.weight;
            }
          } else {
            console.log('shortestPath.weight is not a number', path.weight);
            shortestPath.direction = [path.vertices];
            shortestPath.weight = path.weight;
          }
        } else {
          (function () {
            console.log('else', path.direction);
            var pathWeight = path.direction.weight;
            var pathString = [path.direction.vertices];
            path.path.forEach(function (path2) {
              if (path2.path) {
                pathString.push(path2.vertices, checkSubPaths(path2));
              }
              console.log('path2', path2);
              pathString.push(path2.vertices);
              pathWeight += path2.weight;
            });
            if (typeof shortestPath.weight === 'number') {
              console.log('shortestPAth.weight', shortestPath.weight);
              if (pathWeight < shortestPath.weight) {
                shortestPath.direction = pathString;
                shortestPath.weight = pathWeight;
                console.log('pathWeight< shortestPath.weight', shortestPath.weight);
              } else if (pathWeight === shortestPath.weight) {
                console.log('Got into if statement!!!');
                shortestPath.direction = [shortestPath.direction, pathString];
                shortestPath.weight = pathWeight;
              }
            } else {
              console.log('no weight + long path', pathString, pathWeight);
              shortestPath.direction = pathString;
              shortestPath.weight = pathWeight;
            }
          })();
        }
      });

      return shortestPath.direction;
    }
  }, {
    key: 'removeDirection',
    value: function removeDirection(vertex1, vertex2) {
      var search = { vertex1: vertex1, vertex2: vertex2 };
      var match = this.searchForDirection(search);
      var matchIndex = this.directions.findIndex(function (direction) {
        return match === direction;
      });

      return this.directions.splice(matchIndex, 1);
    }
  }, {
    key: 'getSeparatedVertices',
    value: function getSeparatedVertices() {
      var _this2 = this;

      return this.vertices.filter(function (vertex) {
        var connections = _this2.searchForConnectedVertices(vertex);
        if (connections.length === 0) return vertex;
      });
    }
  }, {
    key: 'removeVertex',
    value: function removeVertex(vertex) {
      var _this3 = this;

      var vertexDirections = this.findAllDirections(vertex);
      var vertexIndex = this.vertices.indexOf(function (vertex) {
        return vertex === vertex;
      });

      vertexDirections.forEach(function (direction) {
        return _this3.removeDirection(direction.vertices);
      });
      this.vertices.splice(vertexIndex, 1);
    }
  }, {
    key: 'count',
    value: function count() {
      return this.vertices.length;
    }
  }]);

  return DirectedGraph;
}();

exports.default = DirectedGraph;