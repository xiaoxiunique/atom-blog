[题目地址](https://leetcode-cn.com/problems/validate-binary-search-tree/)



- 😣 第一次练习  2020年3月29日 不太会，五毒
- :shit: 第二次练习 



### 递归解法

解题代码

```java
public boolean isValidBST(TreeNode root) {
    return helper(root, null, null);
}

private boolean helper(TreeNode node, Integer lower, Integer upper) {
    if (node == null) {
        return true;
    }

    int val = node.val;
    if (lower != null && val <= lower) {
        return false;
    }
    if (upper != null && val >= upper) {
        return false;
    }

    if (!helper(node.right, val, upper)) {
        return false;
    }
    if (!helper(node.left, lower, val)) {
        return false;
    }
    return true;
}

```



### 迭代，深度优先

```java
class Solution {
  LinkedList<TreeNode> stack = new LinkedList();
  LinkedList<Integer> uppers = new LinkedList(),
          lowers = new LinkedList();

  public void update(TreeNode root, Integer lower, Integer upper) {
    stack.add(root);
    lowers.add(lower);
    uppers.add(upper);
  }

  public boolean isValidBST(TreeNode root) {
    Integer lower = null, upper = null, val;
    update(root, lower, upper);

    while (!stack.isEmpty()) {
      root = stack.poll();
      lower = lowers.poll();
      upper = uppers.poll();

      if (root == null) continue;
      val = root.val;
      if (lower != null && val <= lower) return false;
      if (upper != null && val >= upper) return false;
      update(root.right, val, upper);
      update(root.left, lower, val);
    }
    return true;
  }
}
```



### 中序遍历

```java
class Solution {
  public boolean isValidBST(TreeNode root) {
    Stack<TreeNode> stack = new Stack();
    double inorder = - Double.MAX_VALUE;

    while (!stack.isEmpty() || root != null) {
      while (root != null) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      // If next element in inorder traversal
      // is smaller than the previous one
      // that's not BST.
      if (root.val <= inorder) return false;
      inorder = root.val;
      root = root.right;
    }
    return true;
  }
}
```



### 易错点

- 易错项 1 
