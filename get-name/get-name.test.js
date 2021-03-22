const getName = require('./get-name.js');

describe('getName function', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const objectName = getName(spot);
    expect(objectName).toEqual('spot');
  });
});
