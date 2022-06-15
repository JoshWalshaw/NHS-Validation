# NHS Validation

[![npm_version](https://img.shields.io/npm/v/nhs-validation.svg?style=flat-square)](https://www.npmjs.com/package/nhs-validation)
[![vulnerabilities](https://snyk.io/test/npm/nhs-validation/badge.svg)](https://snyk.io/test/npm/nhs-validation)
[![testing](https://github.com/JoshWalshaw/NHS-Validation/actions/workflows/testing.yaml/badge.svg?branch=main)](https://github.com/JoshWalshaw/NHS-Validation/actions/workflows/testing.yaml)
[![install size](https://packagephobia.com/badge?p=nhs-validation)](https://packagephobia.com/result?p=nhs-validation)

A package containing several validation tools useful for working with NHS or UK medical data.


## NHS Numbers
This package allows you to validate if a string provided, has the potential to be a valid NHS Number - as well as generate an example NHS compliant number.

NHS numbers follow a slightly modified version of [Modulus 11](https://www.loc.gov/issn/check.html) algorithm. Specific information on the format for the NHS can be found [here](https://en.wikipedia.org/wiki/NHS_number#Format).

Current basic usage is as follows.

```js
import { NHSNumber } from 'nhs-validation'

const nhsNumber = NHSNumber.generate();

console.log('Is valid? ', NHSNumber.validate(nhsNumber) ); // true
console.log('Is valid? ', NHSNumber.validate('671 668 9966') ); // true
console.log('Is valid? ', NHSNumber.validate('000 000 0001') ); // false
```

## Read / Clinical Codes
TODO - Coming soon
