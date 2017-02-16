import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../../src/binary_search_tree/binary_search_tree'

chai.use(chaiChange)
  let bst

describe.only('Binary Search Tree', function() {
  beforeEach(function() {
    bst = new BinarySearchTree()
  })

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node with the specified value into the tree', () => {
      bst.insert(13)
      bst.insert(14)
      bst.insert(15)

      expect(bst.contains(13)).to.eql(true)
    })

    it('returns the new node inserted as a root value if the root node is null', () => {
      bst.insert(13)

      expect(bst._root.data).to.eql(13)
    })

    it('traverses the tree in the defined order', () => {
      bst.insert(13)
      bst.insert(14)
      bst.insert(15)
      bst.insert(16)

      expect(bst.traverse('inOrder', (val) => { console.log(val)})).to.eql(13,14,15,16)
    })
  })

})