const capitalizeAndFilter = require('./cap-filter.js');

describe('capitalizeAndFilter function', () => {
  it('takes an array of strings capitalizes all strings and filters out any string that starts with the letter f.', () => {
    const quotes = ['For king and country', 'This should not get filtered out', 'free your mind', 'random other unremoved quote'];
    const capFillArr = capitalizeAndFilter(quotes);
    expect(capFillArr).toEqual(['THIS SHOULD NOT GET FILTERED OUT', 'RANDOM OTHER UNREMOVED QUOTE']);
  });
});
