/**
 * Promisify functions in an object
 * @module  promisify-object
 */
import promisifyFn from 'promisify-function'

/**
 * Promisify functions in an object
 * @param {Object} obj - An object that contains some functions
 * @param {Array} fnNames - Names of the functions to promisify
 */
export default function promisify (obj, fnNames) {
  if (typeof obj === 'function') {
    return promisifyFn(obj)
  }

  fnNames.forEach((fnName) => {
    obj[fnName] = promisifyFn(obj[fnName])
  })
  return obj
}
