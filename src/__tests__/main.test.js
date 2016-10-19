const thing = require('thing');
const nested = require('thing/nested');

describe('test', () => {
  it('runs', () => {
    expect(true);
    expect(thing).toBe('thing');
    expect(nested).toBe('nested');
  })
})
