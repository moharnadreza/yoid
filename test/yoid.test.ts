import { yoid } from '../src';

describe('yoid()', () => {
  it('Should be truthy.', () => {
    expect(yoid()).toBeTruthy();
  });

  it('Should return a string.', () => {
    expect(typeof yoid()).toBe('string');
  });
});
