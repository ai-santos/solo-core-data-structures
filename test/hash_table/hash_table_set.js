import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../../src/hash_table/hash_table_set'

chai.use(chaiChange)
  let ht

describe('Hash Table implemented as a set', () => {
  beforeEach(() => {
    ht = new HashTable()
  })

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds a key, value pair into the hash table', () => {
      ht.put({'aileen': 'is freaking amazing'})
      ht.put({'aileen2': 'is the bomb dot com'})

      expect(ht.contains({'aileen2': 'is the bomb dot com'})).to.eql(true)
    })
  })

})