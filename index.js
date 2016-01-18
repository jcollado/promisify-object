'use strict'

const promisifyFn = require('promisify-function')

function promisify (obj, fnNames) {
  if (typeof obj === 'function') {
    return promisifyFn(obj)
  }

  fnNames.forEach(function (fnName) {
    obj[fnName] = promisifyFn(obj[fnName])
  })
  return obj
}

module.exports = promisify
