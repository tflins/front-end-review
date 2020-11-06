/**
 * Node 类
 * 链表中的存储单位
 */
class Node {
  constructor(value) {
    this.value = value // 节点存储的值
    this.next = null // 指针，指向下一个节点
  }
}

/**
 * 链表
 */
class LinkedList {
  constructor() {
    this.length = 0 // 链表长度
    this.head = null // 头结点
  }

  // 在链表尾部添加数据
  append(value) {
    const node = new Node(value)

    // 判断链表是否为空
    if (this.head === null) {
      // 空链表，直接将头结点指向添加的节点
      this.head = node
    } else {
      // 链表不为空，沿着链表节点的尾指针查找，找到最后一个节点的尾指针，将其指向添加的节点
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = node
    }
    this.length++
  }
}

const linkedList = new LinkedList()

for (let i = 0, len = 100; i < len; i++) {
  linkedList.append(i)
}

// 遍历链表
function printLinkedList(linkedList) {
  let node = linkedList.head
  if (linkedList.head === null) {
    console.log('is empty')
    return false
  }
  for (let i = 0, len = linkedList.length; i <= len; i++) {
    console.log(node.value)
    if (node.next !== null) {
      node = node.next
    } else {
      break
    }
  }
}

printLinkedList(linkedList)

// console.log(linkedList)

// console.log(linkedList.head)
