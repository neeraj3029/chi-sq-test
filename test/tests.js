// Qunit = require(QUnit);
const gof = require('../src/good_of_fit.js');
const independence = require('../src/independence.js');

QUnit.module('gof', () => {
  QUnit.test('Value test-1, All data', (assert) => {
    f_obs = [2,3,4]; // observed frequencies 
    f_exp = [3,4,5]; // expected frequencies    
    ddof = 3         // degree of freedom 

    assert.equal(
      gof(f_exp, f_obs, ddof).value, 
      1.0833333333333333,
      'GOF Test-1'
    );
  });

  QUnit.test('Value test-1, Without exp & ddof', (assert) => {
    f_obs = [2,3,4]; // observed frequencies
    assert.equal(
      gof(f_exp).value, 
      0.5,
      'GOF Test-2'
    );
  });

  QUnit.test('Value test-3, Without with exp', (assert) => {
    f_obs = [2,3,4]; // observed frequencies
    assert.equal(
      gof(f_exp, ddof).value, 
      0.5,
      'GOF Test-2'
    );
  });
});
