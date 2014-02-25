'use strict';

(function(exports) {

  var StackMap = (function() {
    var stack = [];

    function add(key, value) {
      stack.push({
        key: key,
        value: value
      });
    }

    function get(key) {
      for (var i = 0; i < stack.length; i++) {
        if (key == stack[i].key) {
          return stack[i];
        }
      }
    }

    function keys() {
      var keys = [];
      for (var i = 0; i < stack.length; i++) {
        keys.push(stack[i].key);
      }
      return keys;
    }

    function top() {
      return stack[stack.length - 1];
    }

    function pop() {
      var obj = top();

      remove(obj.key);

      return obj;
    }

    function remove(key) {
      var idx = -1;
      for (var i = 0; i < stack.length; i++) {
        if (key == stack[i].key) {
          idx = i;
          break;
        }
      }
      return stack.splice(idx, 1)[0];
    }

    function removeTop() {
      return stack.splice(stack.length - 1, 1)[0];
    }

    function length() {
      return stack.length;
    }

    return {
      push: add,
      pop: pop,
      length: length
    };
  })();

  var Miamed = exports.Miamed || {};

  Miamed.StackMap = StackMap;

  exports.Miamed = Miamed;
})(window);
