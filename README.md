# promisify-object

[![npm](https://img.shields.io/npm/v/promisify-object.svg)](https://www.npmjs.com/package/promisify-object)
[![Build Status](https://travis-ci.org/jcollado/promisify-object.svg?branch=master)](https://travis-ci.org/jcollado/promisify-object)
[![Coverage Status](https://coveralls.io/repos/jcollado/promisify-object/badge.svg?branch=master&service=github)](https://coveralls.io/github/jcollado/promisify-object?branch=master)
[![Dependency Status](https://david-dm.org/jcollado/promisify-object.svg)](https://david-dm.org/jcollado/promisify-object)
[![devDependency Status](https://david-dm.org/jcollado/promisify-object/dev-status.svg)](https://david-dm.org/jcollado/promisify-object#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Promisify functions in a given object

## Installation

The recommended way to install `promisify-object` is as a dependency of a project:

```bash
npm install --save promisify-object
```

## Usage

Promisify methods of a given object:

```node
const fs = require('fs')
const promisify = require('promisify-object')

promisify(fs, ['mkdir', 'readFile'])
```

## Contributing

Any contribution is more than welcome. In particular, if:

- there's something that doesn't work as expected or you have an idea for a nice to have feature, then please submit an issue [here](https://github.com/jcollado/promisify-object/issues/new)
- you know how to fix a problem or improve the code, then please submit a pull request [here](https://github.com/jcollado/promisify-object/compare)
