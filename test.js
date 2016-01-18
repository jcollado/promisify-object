/* global describe it */
'use strict'

const chai = require('chai')
const requireInject = require('require-inject')
const sinon = require('sinon')

const expect = chai.expect

describe('promisify-object', function () {
  it('promisifies functions in object', function () {
    const stubs = {
      'promisify-function': sinon.stub().returns('promisified')
    }
    const promisify = requireInject('./index', stubs)

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
})
