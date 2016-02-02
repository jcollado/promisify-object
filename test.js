/* global describe it beforeEach */
import chai from 'chai'
import requireInject from 'require-inject'
import sinon from 'sinon'

const expect = chai.expect

describe('promisify-object', () => {
  let stubs

  beforeEach(() => {
    stubs = {
      'promisify-function': sinon.stub().returns('promisified')
    }
  })

  it('promisifies functions in object', () => {
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

  it('promisifies functions', () => {
    const promisify = requireInject('./src/index', stubs).default

    const fn = () => {}

    const promisified = promisify(fn)
    expect(promisified).to.equal('promisified')
  })
})
