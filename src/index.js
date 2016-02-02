import promisifyFn from 'promisify-function'

export default function promisify (obj, fnNames) {
  if (typeof obj === 'function') {
    return promisifyFn(obj)
  }

  fnNames.forEach(fnName => {
    obj[fnName] = promisifyFn(obj[fnName])
  })
  return obj
}
