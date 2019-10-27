// 平衡二叉树概念：
// 根节点的左子树和右子树的高度差不能超过1
// 这棵二叉树的每个子树都符合第一条

// 代码判断一颗树是否为平衡二叉树 (比较深度)
function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

//           a
//     b          c
//  d    e      f   g
//    h    j

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')
var h = new Node('h')
var j = new Node('j')
a.left = b
a.right = c
// b.left = d
b.right = e
c.left = f
c.right = g
// d.right = h
e.right = j


function getDeep(root) {
  if (root === null)  return 0
  var leftDeep = getDeep(root.left)
  var rightDeep = getDeep(root.right)
  return Math.max(leftDeep, rightDeep) + 1
}
console.log(getDeep(a))

function isBalance(root) {
  if (root === null)  return true
  var leftDeep = getDeep(root.left)
  var rightDeep = getDeep(root.right)
  if (Math.abs(leftDeep - rightDeep) > 1) {
    return false
  } else {
    return isBalance(root.left) && isBalance(root.right)
  }
}
console.log(isBalance(a))
