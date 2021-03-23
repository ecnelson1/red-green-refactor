const fetchQuote = require('./fetch-quotes.js');

describe('fetchQuote function', () => {
  it('return a single quote item with the name, image, and text properties.', () => {
    const quote = fetchQuote();
    expect(quote).toEqual(expect.objectContaining({ name: '', image:'', text: '' }));
  });

});
