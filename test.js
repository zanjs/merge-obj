var merge = require('./merge');
var object1 = {
    a: 1,
    b: [2, 3]
};
var object2 = {
    b: [4, 5],
    c: 6
};

var result = merge(object1, object2);

console.log(result);