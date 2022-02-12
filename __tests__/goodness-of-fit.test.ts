import { QUnit }  from 'qunit';
import { gof } from '../src';

const { test } = QUnit;

test('Value test-1, All data', (assert) => {
  const fObs = [2, 3, 4]; // observed frequencies
  const fExp = [3, 4, 5]; // expected frequencies
  const ddof = 0; // degree of freedom
  assert.deepEqual(
    gof(fObs, fExp, ddof), {
      value: 0.7833333333333332,
      pValue: 0.6759293959125221
    },
    'Goodness Of Fit Test-1'
  );
});

test('Value test-1, Without exp & ddof', (assert) => {
  const fObs = [2,3,4]; // observed frequencies
  assert.deepEqual(
    gof(fObs), {
      value: 0.6666666666666666,
      pValue: 0.7165313783925148
    },
    'Goodness Of Fit Test-2'
  );
});
