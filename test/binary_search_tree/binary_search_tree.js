import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../../src/binary_search_tree/binary_search_tree'

chai.use(chaiChange)
  let bst

describe('Binary Search Tree', function() {
  beforeEach(function() {
    bst = new BinarySearchTree()
  })

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node with the specified value into the bst', () => {
      bst.insert(13)
      bst.insert(14)
      bst.insert(15)

      expect(bst.contains(13)).to.eql(true)
    })

    it('returns the new node inserted as a root value if the root node is null', () => {
      bst.insert(13)

      expect(bst._root.data).to.eql(13)
    })

    it('traverses the bst in the defined order', () => {
      bst.insert(13)
      bst.insert(14)
      bst.insert(15)
      bst.insert(16)
      let result = bst.traverse('inOrder', (val) => { console.log(val)})

      expect(result).to.eql(13,14,15,16)
    })

    context('count()', () => {
      it('returns the number of nodes in the bst', () => {
        bst.insert(13)
        bst.insert(14)
        bst.insert(15)
        bst.insert(16)

        expect(bst.count()).to.eql(4)
      })
    })

    context('search()', () => {
      it('returns a node object if there are nodes in the bst', () => {
        bst.insert(13)
        bst.insert(14)
        bst.insert(15)
        bst.insert(16)
        bst.search(13)

        expect(bst.search(13).data).to.eql(13)
      })

      it('returns null if there is no root node in the bst', () => {

        expect(bst.search(13)).to.eql(null)
      })
    })
  })

})