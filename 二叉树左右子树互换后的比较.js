function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

  // 二叉树形
  //       a
  //   c       b
  // f   g   d   e

var a1 = new Node('a')
var c1 = new Node('c')
var b1 = new Node('b')
var f1 = new Node('f')
var g1 = new Node('g')
var d1 = new Node('d')
var e1 = new Node('e')

a1.left = c1
a1.right = b1
c1.left = f1
// c1.right = g1
b1.left = d1
b1.right = e1


var a2 = new Node('a')
var c2 = new Node('c')
var b2 = new Node('b')
var f2 = new Node('f')
var g2 = new Node('g')
var d2 = new Node('d')
var e2 = new Node('e')

// 这里左右互换一下 
a2.right = c2
a2.left = b2

c2.left = f2
// c2.right = g2
b2.left = d2
b2.right = e2


function compareTree(root1, root2) {
  if (root1 === root2)  return true
  if (root1 === null && root2 !== null || root1 !== null && root2 === null) {
    return false
  }
  if (root1.val !== root2.val)  return false
  return (
   compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right)
   || compareTree(root1.left, root2.right) && compareTree(root1.right, root2.left)
  )
}

// 互换后也是 true
console.log( compareTree(a1, a2) )



