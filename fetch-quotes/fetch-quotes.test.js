const fetchQuote = require('./fetch-quotes.js');

describe('fetchQuote function', () => {
  it('return a single quote item with the name, tex, and image properties.', async() => {
    const quote = await fetchQuote();
    expect(quote).toEqual(expect.objectContaining({ name: expect.any(String), text: expect.any(String), image: expect.any(String) }));
  });

});
