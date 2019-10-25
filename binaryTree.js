function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
var g = new Node('g')
  // 二叉树形
  //       a
  //   c       b
  // f   g   d   e

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

// 二叉树的深度优先搜索（和前序遍历的顺序是一样的）
function depthFirstSearch(root, target) {
  if (root === null)  return false
  if (root.val === target)  return true
  var left = deepSearch(root.left, target)
  var right = deepSearch(root.right, target)
  return left || right 
}

// console.log( depthFirstSearch(a, 'g') )


// 二叉树的广度优先搜索Breadth-first search
function breadthFirstSearch(rootList, target) {
  if (rootList === null || rootList.length === 0) return false 
  var childList = []
  for (var i = 0; i < rootList.length; i++) {
    console.log(rootList[i].val)
    if (rootList[i] !== null && rootList[i].val === target) {
      return true
    } else {
      childList.push(rootList[i].left)
      childList.push(rootList[i].right)
    }
  }
  return breadthFirstSearch(childList, target)
}

console.log( breadthFirstSearch([a], 'f') )



