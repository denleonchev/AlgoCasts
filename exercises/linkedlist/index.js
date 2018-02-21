// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data
    this.next = node
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let currentNode = this.head
    while (currentNode) {
      counter++
      currentNode = currentNode.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if(!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      if(!currentNode.next) {
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if(!this.head) {
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    if(!this.head) {
      return
    }

    if(!this.head.next) {
      this.head = null
      return
    }

    let prev = null
    let node = this.head
    while(node.next) {
      prev = node
      node = node.next

    }
    prev.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if(last) {
      last.next = new Node(data)
    } else {
      this.head =  new Node(data)
    }
  }

  getAt(n) {
    let counter = 0
    let node = this.head
    while (node) {
      if(counter === n) {
        return node
      }
      node = node.next
      counter ++
    }
    return null
  }

  removeAt(n) {
    if (!this.head) {
      return
    }
    if (n === 0) {
      this.head = this.head.next
      return
    }
    const prev = this.getAt(n - 1)
    if (!prev || !prev.next) {
      return
    }

    prev.next = prev.next.next
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data)
      return
    }

    if(index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const prev = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, prev.next)
    prev.next = node
  }
}

module.exports = { Node, LinkedList };
