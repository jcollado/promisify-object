/* global describe it beforeEach */
'use strict'

const chai = require('chai')
const requireInject = require('require-inject')
const sinon = require('sinon')

const expect = chai.expect

describe('promisify-object', function () {
  let stubs

  beforeEach(function () {
    stubs = {
      'promisify-function': sinon.stub().returns('promisified')
    }
  })

  it('promisifies functions in object', function () {
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

  it('promisifies functions', function () {
    const promisify = requireInject('./index', stubs)

    const fn = function () {}

    const promisified = promisify(fn)
    expect(promisified).to.equal('promisified')
  })
})
