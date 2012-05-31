
var assert = require('assert')
var ref = require('../')

describe('types', function () {

  describe('refType()', function () {

    it('should coerce string types', function () {
      var intPtr = ref.refType('int')
      assert.equal(2, intPtr.indirection)
      assert.equal(intPtr.size, ref.types.int.size)
    })

  })

  describe('size', function () {
    Object.keys(ref.types).forEach(function (name) {
      if (name === 'void') return
      it('sizeof(' + name + ') should be >= 1', function () {
        var type = ref.types[name]
        assert.equal('number', typeof type.size)
        assert(type.size >= 1)
      })
    })
  })

  describe('alignment', function () {
    Object.keys(ref.types).forEach(function (name) {
      if (name === 'void') return
      it('alignof(' + name + ') should be >= 1', function () {
        var type = ref.types[name]
        assert.equal('number', typeof type.alignment)
        assert(type.alignment >= 1)
      })
    })
  })

})
