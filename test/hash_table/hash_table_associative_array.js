import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { LinkedList, HashTable} from '../../src/hash_table/hash_table_associative_array'

chai.use(chaiChange)
  let ht

describe('hash table as an associative array', function() {
  beforeEach(function() {
    ht = new HashTable()
  })

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds a key value pair to the hash table', () => {
      ht.put('aileen', 'is super cool')
      ht.put('aileen2', 'is awesome')
      ht.put('aileen3', 'is the bomb dot com')

      expect(ht.get('aileen3')).to.eql('is the bomb dot com')
    })
  })

  context('contains()', () => {
    it('returns true if the hash table contains the key', () => {
      ht.put('aileen', 'is super cool')
      ht.put('aileen2', 'is awesome')
      ht.put('aileen3', 'is the bomb dot com')

      expect(ht.contains('aileen3')).to.be.true
    })
  })

  context('size()', () => {
    it('returns the number of key-value pairs in the hash table', () => {
      ht.put('aileen', 'is super cool')
      ht.put('aileen2', 'is awesome')
      ht.put('aileen3', 'is the bomb dot com')

      expect(ht.size()).to.eql(3)
    })
  })

  context('remove()', () => {
    it('removes a key-value pair when passed a key', () => {
      let testingHash = ht.hashFunction('fppqvt')
      let testingDiff = ht.hashFunction('aileen3')
      console.log(testingHash, testingDiff)
      ht.put('aadqer', 'is super cool')
      ht.put('fppqvt', 'is awesome')
      ht.put('aileen3', 'is the bomb dot com')
      ht.remove('fppqvt')

      expect(ht.size()).to.eql(2)
    })
  })

})