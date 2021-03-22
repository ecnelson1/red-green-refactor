const copyAndPush = require('./copy-push.js');

describe('copyAndPush function', () => {
  it('makes a copy of an array and pushes a new item to the end of the copy', () => {
    const numbers = [1, 2, 3];
    const copyArr = copyAndPush(numbers, 4);
    expect(copyArr).toEqual([1, 2, 3, 4]);
  });
});
