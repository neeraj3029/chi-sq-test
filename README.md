

**How to install**

This library can easily be integrated in to your project manually. Alternatively, the library can be included using npm.

```
npm install chi-sq-test
```

**How to use**

To run chi-squared test for a given dataset


```ChiSqTest(f_exp, f_obs, params)```

Example:
```
const ChiSqTest = require('chi-sq-test')

f_obs = [2,3,4]; // observed frequencies 
f_exp = [3,4,5]; // expected frequencies    
ddof = 3         // degree of freedom 


const testres = ChiSqTest.gof(f_exp, f_obs, ddof);
const testres = ChiSqTest.gof(f_obs);

/*
    When just f_obs is given, it is assumed that the expected frequencies are uniform and given by the mean of the observed frequencies (Like SciPy).
*/
```

Output:
Function ```gof``` returns a JSON object, which contains Chi-Square value and the pValue for the given dataset.

```
{ 
    value: 0.21890104, // Chi-Square value
    pValue: 1.0833333, // p-value 
}
```


**Testing independence of two datasets:**

// Todo

