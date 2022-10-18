/*************
Root is the topmost node of the tree
Edge is the link between two nodes
Child is a node that has a parent node
Parent is a node that has an edge to a child node
Leaf is a node that does not have a child node in the tree
Height is the length of the longest path to a leaf
Depth is the length of the path to its root
**************/

class TreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}
