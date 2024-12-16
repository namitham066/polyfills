// String Methods:
// String.prototype.includes()
// String.prototype.startsWith()
// String.prototype.endsWith()
// String.prototype.repeat()

// String.prototype.includes()
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      if (typeof search !== 'string') {
        throw new TypeError('Search value must be a string');
      }
      start = start || 0;
      return this.indexOf(search, start) !== -1;
    };
  }

//   String.prototype.startsWith()
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, start) {
      start = start || 0;
      return this.slice(start, start + search.length) === search;
    };
  }

//   String.prototype.endsWith()
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
      position = position || this.length;
      var end = position;
      return this.slice(end - searchString.length, end) === searchString;
    };
  }
//   String.prototype.repeat()
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
      if (this == null) {
        throw new TypeError('String.prototype.repeat called on null or undefined');
      }
      if (count < 0) {
        throw new RangeError('Repeat count must be non-negative');
      }
      if (count == Infinity) {
        throw new RangeError('Repeat count must be less than infinity');
      }
  
      count = Math.floor(count); // Ensure count is an integer
      if (count < 1) return '';
  
      var result = '';
      for (var i = 0; i < count; i++) {
        result += this;
      }
      return result;
    };
  }

 

let str = "Hello, World!";

// Test includes()
console.log(str.includes("World")); 
console.log(str.includes("world")); 

// Test startsWith()
console.log(str.startsWith("Hello")); 
console.log(str.startsWith("World", 7));

// Test endsWith()
console.log(str.endsWith("!")); 
console.log(str.endsWith("World", 12)); 

// Test repeat()
console.log("abc".repeat(3)); 
console.log("x".repeat(5)); 
