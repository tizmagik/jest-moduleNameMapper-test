describe('test', () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  afterEach(() => {
    global.console.log.mockClear();
  });

  it('tests thing', () => {
    const thing = require('thing');
    expect(thing).toBe('thing');
  })

  it('tests nested', () => {
    const nested = require('thing/nested');
    expect(nested).toBe('nested');
    expect(global.console.log).toBeCalledWith('another');
  })
})
