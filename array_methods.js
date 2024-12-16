//array methods

// Array.prototype.includes()

if (!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
      return this.indexOf(element) !== -1;
    };
  }
  
//Array.prototype.find()
if (!Array.prototype.find) {
  Array.prototype.find = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var array = Object(this);
    var len = array.length >>> 0;  

    for (var i = 0; i < len; i++) {
      if (callback.call(thisArg, array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  };
}

//Array.prototype.map()
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    var array = Object(this);
    var len = array.length >>> 0;  
    var result = new Array(len);
    
    for (var i = 0; i < len; i++) {
      if (i in array) {
        result[i] = callback.call(thisArg, array[i], i, array);
      }
    }
    return result;
  };
}


// Array.prototype.reduce()
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, initialValue) {
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var array = Object(this);
    var len = array.length >>> 0;  
    var index = 0;
    var value;

    if (arguments.length > 1) {
      value = initialValue;
    } else {
      while (index < len && !(index in array)) {
        index++;
      }
      if (index === len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = array[index++];
    }

    for (; index < len; index++) {
      if (index in array) {
        value = callback(value, array[index], index, array);
      }
    }
    return value;
  };
}

// Array.prototype.filter()
if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.filter called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var array = Object(this);
    var len = array.length >>> 0;  
    var result = [];
    
    for (var i = 0; i < len; i++) {
      if (i in array) {
        var value = array[i];
        if (callback.call(thisArg, value, i, array)) {
          result.push(value);
        }
      }
    }
    return result;
  };
}
