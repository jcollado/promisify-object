'use strict'

const promisifyFn = require('promisify-function')

function promisify (obj, fnNames) {
  fnNames.forEach(function (fnName) {
    obj[fnName] = promisifyFn(obj[fnName])
  })
}

module.exports = promisify
