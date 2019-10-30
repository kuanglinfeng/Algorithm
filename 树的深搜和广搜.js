//       a
// c     f     b
//           d   e

function Node(val) {
  this.val = val
  this.children = []
}
var a = new Node('a')
var b = new Node('b')
var c = new Node('c')
var d = new Node('d')
var e = new Node('e')
var f = new Node('f')
a.children.push(c)
a.children.push(f)
a.children.push(b)
b.children.push(d)
b.children.push(e)

function deepSearch(root, target) {
  if (root === null)  return false
  
  if (root.val === target)  return true

  var result = false
  for (var i = 0; i < root.children.length; i++) {
    result |= deepSearch(root.children[i], target)
  }
  return result ? true : false
}


// console.log(deepSearch(a, 'c'))

function bfs(roots, target) {
  if (roots === null || roots.length === 0) return false
  var childNodes = []
  for (var i = 0; i < roots.length; i++) {
    if (roots[i].val === target) {
      return true
    } else {
      childNodes.push(...roots[i].children)
    }
  }
  return bfs(childNodes, target)
}

// console.log(bfs([a], 'a'))