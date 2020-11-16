

How to install

How to use

To run chi-squared test for a given dataset, 

-> ChiSqTest(f_exp, f_obs, params) 

Example:

ChiSqTest(f_exp, f_obs)

ChiSqTest(f_exp)

ChiSqTest(f_exp, f_obs, 4)


To test independence of two datasets:

Create nested list of the tabular data.
Add type: 'indpendence' attribute in params.

ChiSqTest(f_exp, params)

