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
var b2 = new Node('x')
var f2 = new Node('f')
var g2 = new Node('g')
var d2 = new Node('d')
var e2 = new Node('e')

a2.left = c2
a2.right = b2

c2.left = f2
c2.right = g2
b2.left = d2
b2.right = e2


// diff的最终目的：新增了什么，修改了什么，删除了什么
// 需要创建一个diff记录，类似以下格式
// {type: '新增', origin: null, now: c2}, {type: '修改', origin: c1, now: c2}，{type: '删除', origin: c2, now: null}
// var diffList = [] 

function diffTree(root1, root2, diffList) {
  if (root1 === root2)  return diffList
  if (root1 === null && root2 !== null) {
    // 新增了节点
    diffList.push({type: '新增', origin: null, now: root2})
  } else if (root1 !== null && root2 === null) {
    // 删除了节点
    diffList.push({type: '删除', origin: root1, now: null})
  } else if (root1.val !== root2.val) {
    // 修改了节点
    diffList.push({type: '修改', origin: root1, now: root2})
    // 当前的节点变了 不代表子节点都变了 所以这里还要对子节点diff
    diffTree(root1.left, root2.left, diffList)
    diffTree(root1.right, root2.right, diffList)
  } else {
    diffTree(root1.left, root2.left, diffList)
    diffTree(root1.right, root2.right, diffList)
  }
}

var diffList = []
diffTree(a1, a2, diffList)
console.log(diffList)


