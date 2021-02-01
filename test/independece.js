const independence = require('../src/independence.js');

QUnit.module('Independence', () => {
  QUnit.test('Value test-1, All data', (assert) => {
    const obs = [
      [160, 240],
      [140, 460]
    ];

    assert.equal(
      independence(obs).value, 
      63974343.6853002,
      'Independence Test-1'
    );
  });
});