import 'babel-register'

import requireInject from 'require-inject'
import sinon from 'sinon'
import test from 'ava'

const stubs = {
  'promisify-function': sinon.stub().returns('promisified')
}
const promisify = requireInject('./src/index', stubs).default

test('promisify-object: promisifies functions in object', t => {
  const obj = {
    a: 'a function',
    b: 'another function',
    c: 'something else'
  }

  promisify(obj, ['a', 'b'])
  t.same(obj, {
    a: 'promisified',
    b: 'promisified',
    c: 'something else'
  })
})

test('promisify-object: promisifies functions', t => {
  const fn = () => {}

  t.is(promisify(fn), 'promisified')
})
