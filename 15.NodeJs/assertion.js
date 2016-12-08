// Nodejs 断言库 
// 内部使用，简单的测试

const assert = require('assert');
/** assert || assert.ok */


// assert(true);
// assert(1);
// assert(false);
// assert(0);
// assert(false, 'my own msg');

/** assert.deepEqual */ 
// WARNING: This does not throw an AssertionError!
// not test object prototypes、symbols、non-enumerable properties
// assert.deepEqual(Error('a'), Error('b'));

// assert.deepEqual({a:1}, {a:'1'});
// assert.deepStrictEqual({a:1}, {a:'1'});
// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   SyntaxError
// );

// assert.fail(1, 2, '', '>'); //抛出 AssertionError

// assert.ifError(new Error());
// assert.deepEqual({a:1}, {a:1});

// assert.throws(
//   () => {
//     throw new Error('Wrong 123');
//   },
//   function(err) {
//     if ( (err instanceof Error) && /value/.test(err) ) {
//       return true;
//     }
//   },
//   'unexpected error'
// );

assert.throws(myFunction, 'missing foo', 'did not throw with expected message');