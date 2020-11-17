
# Chi-Sqaured tests

This package helps run Chi-Squared hypothesis tests for testing a distribution for a dataset.

## How to install

This library can easily be integrated in to your project manually. Alternatively, the library can be included using npm/GitHub packages.

```
npm install chi-sq-test
```

## How to use

To run chi-squared test for a given dataset


```ChiSqTest.gof(f_obs, f_exp, ddof)```
<details>
    <summary>Documentation</summary>
    <ul>
        <li><code>f_obs</code>: [Array] list of observed frequencies</li>
        <li><code>f_exp</code>: [Array] list of expected frequencies</li>
        <li><code>ddof</code>: [number] degree of freedom. Default: n-1, n: number of bins</li>
    </ul>
</details>

## Example:
```
const ChiSqTest = require('chi-sq-test')

f_obs = [2,3,4]; // observed frequencies 
f_exp = [3,4,5]; // expected frequencies    
ddof = 3         // degree of freedom 


const testres = ChiSqTest.gof(f_exp, f_obs, ddof);
const testres = ChiSqTest.gof(f_obs);

/*
    When just f_obs is given, it is assumed that the expected frequencies 
    are uniform and given by the mean of the observed frequencies (Like SciPy).
*/
```

Output:
Function ```gof``` returns a JSON object, which contains Chi-Square value and the pValue for the given dataset.

```
{ 
    value: 1.0833333, // Chi-Square value
    pValue: 0.781098958, // p-value 
}
```

## To test indpendence between two datasets.

```ChiSqTest.independence(f_obs, ddof)```
<details>
    <summary>Documentation</summary>
    <ul>
        <li><code>f_obs</code>: [2D Array] 2D list of observed frequencies</li>
        <li><code>ddof</code>: [number] degree of freedom. Default: n-1, n: number of bins</li>
    </ul>
</details>

