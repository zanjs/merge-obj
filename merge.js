!(function(merge) {
    'use strict';
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(merge);
    } else if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = merge();
    } else {
        window.merge = merge();
    }
})(function() {
    'use strict';

    /**
     * (Copy Objects)
     * 
     * @returns (return Copy Objects)
     */
    function merge() {
        for (var len = arguments.length, arg = Array(len), key = 0; key < len; key++) {
            arg[key] = arguments[key];
        }

        var obj = {};
        for (var i = 0; i < arg.length; i++) {
            for (var key in arg[i]) {
                var curObj = arg[i][key];
                if (isJson(curObj)) {
                    if (isJson(obj[key])) {
                        obj[key] = merge(obj[key], curObj); // obj 此属性已经是对象，则和该对象原来的属性合并
                    } else {
                        obj[key] = merge(curObj); // obj 此属性不是对象，则和该对象原来的属性合并
                    }
                } else if (isArray(curObj)) { //此对象是数组
                    obj[key] = mergeArr(curObj);
                } else {
                    obj[key] = curObj; //属性不是obj
                }
            }
        }
        return obj;
    };

    /**
     * (Copy array)
     * 
     * @param arr (description)
     */
    function mergeArr(arr) {
        var arr2 = [];

        for (var i = 0; i < arr.length; i++) {
            var curObj = arr[i];
            if (isJson(curObj)) {
                arr2[i] = merge(curObj); // 复制对象
            } else if (isArray(curObj)) { //复制数组
                arr2[i] = mergeArr(curObj);
            } else {
                arr2[i] = curObj; //属性不是obj
            }
        }
        return arr2;
    }

    function isJson(obj) {
        return (typeof obj === 'undefined' ? 'undefined' : typeof(obj)) == 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length; //true 是 false不是
    };

    function isArray(arr) {
        return Object.prototype.toString.call(arr).toLowerCase() === '[object array]'; //true 是 false不是
    }
    return merge;
});