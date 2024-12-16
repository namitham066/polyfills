// Object Methods:
// Object.assign()
// Object.entries()
// Object.values()




// Object.assign()
if (!Object.assign) {
    Object.assign = function(target, ...sources) {
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
  
      target = Object(target); 
      sources.forEach(function(source) {
        if (source != null) { 
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      });
      return target;
    };
  }
  

//   Object.entries()
if (!Object.entries) {
    Object.entries = function(obj) {
      if (obj == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
  
      var result = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result.push([key, obj[key]]);
        }
      }
      return result;
    };
  }

  
  //Object.values()
  if (!Object.values) {
    Object.values = function(obj) {
      if (obj == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
  
      var result = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result.push(obj[key]);
        }
      }
      return result;
    };
  }

  // Test Objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };


let merged = Object.assign({}, obj1, obj2);
console.log(merged); 

// Test Object.entries()
let entries = Object.entries(obj1);
console.log(entries); 

// Test Object.values()
let values = Object.values(obj1);
console.log(values);
