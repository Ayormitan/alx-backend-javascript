// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should add 1 and 3', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should subtract two number', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 3.7), -5);
  });

  it('should divide 1.2 and 3.7', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 5);
  });

  it('should return error whem deividing with zero', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 'Error');
  });
});
