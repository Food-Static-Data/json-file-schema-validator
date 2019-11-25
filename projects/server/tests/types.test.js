/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { typesFile } = require('@files')
const types = require(typesFile)
const { schema, example } = require('./examples/types')

describe('types data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of types', () => {
    expect(types).not.toBe('')
  })
})

try {
  describe('types json schema testing', () => {
    it('validates type json schema', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
