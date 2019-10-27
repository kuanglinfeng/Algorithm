var arr = []

for (var i = 0; i < 10000; i++) {
  arr[i] = Math.floor(Math.random() * 10000)
}

var num = 0
var count = 0

function search(arr, target) {    
  for (var i = 0; i < arr.length; i++) {
    num += 1
    if (arr[i] === target) {
      return true
    }
  }
  return false
}

console.log(search(arr, 1000))
console.log(num)

var root = buildSearchTree(arr)
console.log(searchByTree(root, 1000))
console.log(count)


function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}


function addNode(root, num) {
  if (root === null)  return 
  if (root.val === num) return 
  if (root.val < num) {
    // 目标值比当前节点大
    if (root.right === null) {
      // 如果右侧为空则创建节点
      root.right = new Node(num)
    } else {
      // 否则递归
      addNode(root.right, num)
    }
  } else {
    if (root.left === null) {
      // 如果左侧为空则创建节点
      root.left = new Node(num)
    } else {
      // 否则递归
      addNode(root.left, num)
    }
  }
}

function buildSearchTree(arr) {
  if (arr === null || arr.length === 0) return null
  var root = new Node(arr[0])
  for (var i = 1; i < arr.length; i++) {
    addNode(root, arr[i])
  }
  return root
}


function searchByTree(root, target) {
  count++
  if (root === null)  return false
  if (root.val === target)  return true
  if (root.val > target) {
    return searchByTree(root.left, target)
  } else {
    return searchByTree(root.right, target)
  }
}