# merge-obj

Merge two objects and concatenate arrays that are values of the same object key

### install

```
  npm install merge-obj --save
```

### Usage

```js
var merge = require('merge-obj');
var object1 = {a: 1, b: [2, 3]};
var object2 = {b: [4, 5], c: 6};

var result = merge(object1, object2);

```


### License

MIT