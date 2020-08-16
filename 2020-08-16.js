/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }

  serialise() {
    return JSON.stringify({
      val: this.val,
      left: this.left ? this.left.serialise() : null,
      right: this.right ? this.right.serialise() : null,
    })
  }
}

function deserialise(string) {
  if (!string) return null

  const json = JSON.parse(string) //typeof string === 'string' ? JSON.parse(string) : string
  return new Node(json.val, deserialise(json.left), deserialise(json.right))
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))


console.log(node.serialise())
console.log(deserialise(node.serialise()))
console.log(deserialise(node.serialise()).left.left.val)