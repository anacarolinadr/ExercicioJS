// Given a function fn, return a new function that is identical to the original function 
// except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

var once = function(fn) {
    let called = false;
    
    return function(...args) {
        if (called) return undefined;
        called = true;
        return fn(...args);
    };
};

/*Tests
let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1,2,3))
console.log(onceFn(2,2,3))
*/
