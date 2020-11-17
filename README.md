
# Chi-Sqaured tests

This package helps run Chi-Squared hypothesis tests for testing a distribution for a dataset.

## How to install

This library can easily be integrated in to your project manually. Alternatively, the library can be included using npm/GitHub packages.

```console
npm install chi-sq-test
```

## How to use

To run chi-squared test for a given dataset


```console
ChiSqTest.gof(fObs, fExp, ddof)
```
<details>
    <summary><b>Documentation</b></summary>
    <ul>
        <li><code>fObs</code>: [Array] Array of observed frequencies for each category
        <br /> 
            &nbsp; &nbsp; &nbsp; <i><b>Default:</b> No default value, essential arg</i>
        </li>
        <li><code>fExp</code>: [Array] Array of expected frequencies in each category
        <br /> 
            &nbsp; &nbsp; &nbsp; <i><b>Default:</b> By default all categories are assumed to be equally likely. Expected frequency of each &nbsp;category would be the mean of observed frequencies.</i>
        </li>
        <li><code>ddof</code>: [number] delta degrees of freedom. <br />
        &nbsp; &nbsp; &nbsp; Effective degrees of freedom = <code>k - 1 - ddof</code>, where k is the number of observed frequencies.
            <br /> 
            &nbsp; &nbsp; &nbsp; <i><b>Default</b> ddof: 0</i>
        </li>
    </ul>
    This is somewhat similar to SciPy.
</details>

#### Example:

```js

const ChiSqTest = require('chi-sq-test')

const obs = [2, 3, 4]; // observed frequencies 
const exp = [3, 4, 5]; // expected frequencies    
const ddof = 0;       // delta degree of freedom (Degree Of Freedom  = 3-1 = 2)

const testres1 = ChiSqTest.gof(obs, exp, ddof);
console.log(testres1);

/*
=> { value: 0.7833333333333332, pValue: 0.6759293959125221 }
*/

const testres2 = ChiSqTest.gof(obs); // mean fObs is used as fExp by default
console.log(testres2);

/*
=> { value: 0.6666666666666666, pValue: 0.7165313783925148 }
*/

```

#### Output:
Function ```gof``` returns a JSON object, which contains Chi-Square `value` and the `pValue` for the given dataset.


## To test indpendence between two datasets.

```console
ChiSqTest.independence(fObs, ddof)
```
<details>
    <summary><b>Documentation</b></summary>
    <ul>
        <li><code>fObs</code>: [2D Array] 2D list of observed frequencies</li>
        <li><code>ddof</code>: [number] delta degree of freedom. Default: 0, n: number of bins</li>
    </ul>
</details>
