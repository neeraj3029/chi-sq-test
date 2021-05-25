
<h1 align="center">
Chi-Sqaured tests
</h1>

<p align="center">

<img src="https://img.shields.io/npm/dm/chi-sq-test?style=flat-square" align="center">

<img src="https://img.shields.io/npm/v/chi-sq-test.svg?style=for-the-badge" align="center">

<img src="https://img.shields.io/npm/l/chi-sq-test?style=flat-square" align="center">

<img src="https://travis-ci.org/neeraj3029/chi-sq-test.svg?branch=main" align="center">
</p>


This package helps run Chi-Squared hypothesis tests for testing distributions on numerical data. Details follow.

### How to install

This library can easily be integrated in to your project manually. Alternatively, the library can be included using npm/GitHub packages.

```console
npm install chi-sq-test
```

### How to use

**To run chi-squared test for a given dataset**


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

const ChiSqTest = require('chi-sq-test');

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


## Chi-square statistics for independence

```console
ChiSqTest.independence(fObs, ddof)
```


<details>
    <summary><b>Documentation</b></summary>
    <ul>
        <li><code>fObs</code>: [2D Array] 2D-Array of observed frequencies of interestcting categories T<sub>ij</sub> = (A<sub>i</sub> ∩ B<sub>j</sub>)
        <br /> 
            &nbsp; &nbsp; &nbsp; <i><b>Default:</b> No default value, essential arg</i>
        </li>
        <li><code>ddof</code>: [number] delta degrees of freedom. <br />
        &nbsp; &nbsp; &nbsp; Effective degrees of freedom = <code>(k - 1).(m - 1) - ddof</code>, where k and m are number of categories in sets A and B respectively.
            <br /> 
            &nbsp; &nbsp; &nbsp; <i><b>Default</b> ddof: 0</i>
        </li>
    </ul>
</details>

#### Example

<details>
<summary>Statement</summary>
We have an email-dataset which is divided in two ways. \
A = {with image, without images} \
B = {Spam, No Spam}

<table style="width:100%">
  <tr>
    <th>fObs(i,j)</th>
    <th>With Images</th>
    <th>Without Images</th>
  </tr>
  <tr>
    <td>Spam</td>
    <td>160</td>
    <td>240</td>
  </tr>
  <tr>
    <td>No Spam</td>
    <td>140</td>
    <td>460</td>
  </tr>
</table>
For the null hypothesis: \
 H<sub>0</sub>: Email spam and image attachment are independent. \
 H<sub>A</sub>: being spam and image attachment are dependent
</details>

```js
const ChiSqTest = require('chi-sq-test');
const obs = [
    [160, 240],
    [140, 460]
];

console.log(
    ChiSqTest.independence(obs, 0)
);

/*
=> { value: 31.746031746031747, pValue: 1.7570790822318827e-8 }
*/
```

**Output**: 

Function ```independence``` returns a JSON object, which contains Chi-Square `value` and the `pValue` for the hypothesis for indpendence.
