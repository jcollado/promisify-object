import 'babel-register'

import chai from 'chai'
import requireInject from 'require-inject'
import sinon from 'sinon'
import test from 'ava'

const expect = chai.expect

let stubs

test.beforeEach(() => {
  stubs = {
    'promisify-function': sinon.stub().returns('promisified')
  }
})

test('promisify-object: promisifies functions in object', () => {
  const promisify = requireInject('./src/index', stubs).default

  const obj = {
    a: 'a function',
    b: 'another function',
    c: 'something else'
  }

  promisify(obj, ['a', 'b'])
  expect(obj).to.deep.equal({
    a: 'promisified',
    b: 'promisified',
    c: 'something else'
  })
})

test('promisify-object: promisifies functions', () => {
  const promisify = requireInject('./src/index', stubs).default

  const fn = () => {}

  const promisified = promisify(fn)
  expect(promisified).to.equal('promisified')
})
