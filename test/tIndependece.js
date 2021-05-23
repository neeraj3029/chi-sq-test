const independence = require("../src/independenceTest.js");

QUnit.module("Independence", () => {
  QUnit.test("Value test-1, All data", (assert) => {
    const obs = [
      [160, 240],
      [140, 460],
    ];

    assert.deepEqual(
      independence(obs), { 
        value: 31.746031746031747, 
        pValue: 1.7570790822318827e-8 },
      "Independence Test-1"
    );
  });
});
