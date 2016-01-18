# promisify-object

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
