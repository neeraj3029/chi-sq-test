
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
    <summary>Documentation</summary>
    <ul>
        <li><code>fObs</code>: [Array] list of observed frequencies
        <br /> 
            &nbsp; &nbsp; &nbsp; <i>Default: No default value, essential arg</i>
        </li>
        <li><code>fExp</code>: [Array] list of expected frequencies
        <br /> 
            &nbsp; &nbsp; &nbsp; <i>Default: array containing mean of the observed frequencies repeated n times</i>
        </li>
        <li><code>ddof</code>: [number] degree of freedom. 
            <br /> 
            &nbsp; &nbsp; &nbsp; <i>Default: n-1, n: number of bins</i>
        </li>
    </ul>
</details>

## Example:

```js

const ChiSqTest = require('chi-sq-test')

fObs = [2,3,4]; // observed frequencies 
fExp = [3,4,5]; // expected frequencies    
ddof = 3         // degree of freedom 


const testres1 = ChiSqTest.gof(fExp, fObs, ddof);
console.log(testres1);
/*
=> { value: 1.0833333333333333, pValue: 0.7810989584380449 }
*/

const testres2 = ChiSqTest.gof(fObs); // mean fObs is used as fExp by default

console.log(testres2);
/*
=> { value: 0.6666666666666666, pValue: 0.7165313783925148 }
*/

```

#### Output:
Function ```gof``` returns a JSON object, which contains Chi-Square value and the pValue for the given dataset.

```

```

## To test indpendence between two datasets.

```console
ChiSqTest.independence(fObs, ddof)
```
<details>
    <summary>Documentation</summary>
    <ul>
        <li><code>fObs</code>: [2D Array] 2D list of observed frequencies</li>
        <li><code>ddof</code>: [number] degree of freedom. Default: n-1, n: number of bins</li>
    </ul>
</details>
