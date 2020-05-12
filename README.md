# Common Child

[![Build Status](https://travis-ci.com/boivlad/common-child.svg?branch=feature%2FMSVLAD-116)](https://travis-ci.com/boivlad/common-child)
## [Task](./common-child.pdf)
## How to test:
1. Clone this repository
2. `npm intsall`
3. `npm test`
## How to use:
1. Clone this repository
2. `npm intsall`
3. Example:
```javascript
const { commonChild, commonChildParse } = require('./src/index');
commonChild("HARRY", "SALLY"); //return 2
commonChildParse("HARRY SALLY"); //return 2 
```
 It should return the longest string which is a common child of the input strings.
