// Requiring the lodash library
const _ = require("lodash");

var object = { 'cpp': 5, 'java': 8 };

// Use of _.memoize() method
var values = _.memoize(_.values);

// value of object
console.log(values(object));

// Modify the result cache.
values.cache.set(object, ['html', 'css']);
console.log(values(object));