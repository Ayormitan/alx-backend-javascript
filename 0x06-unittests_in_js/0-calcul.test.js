const assert = require('assert');
const calculateNumber = require('./0-calcul.js');


describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 2.3), 4);
    assert.strictEqual(calculateNumber(1.5, 2.5), 4);
    assert.strictEqual(calculateNumber(-1.5, -2.5), -4);
  });

  it('should handle edge cases', () => {
    assert.strictEqual(calculateNumber(0.5, 0.4), 1);
    assert.strictEqual(calculateNumber(1.49, 1.51), 3);
    assert.strictEqual(calculateNumber(-0.5, -0.4), -1);
  });
});
