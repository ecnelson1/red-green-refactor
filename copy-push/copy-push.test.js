const copyAndPush = require('./copy-push.js');

describe('copyAndPush function', () => {
  it('makes a copy of an array and pushes a new item to the end of the copy', () => {
    const numbers = [1, 2, 3];
    const copyArr = copyAndPush(numbers, 4);
    expect(copyArr).toEqual([1, 2, 3, 4]);
  });
  it('returns original array unchanged', () => {
    const original = [1, 2, 3];
    const copy = copyAndPush(original, 4);
    expect(original).toEqual([1, 2, 3]);
  });
});

