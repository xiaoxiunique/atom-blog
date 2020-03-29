[题目地址](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)



- 😣 第一次练习 2020年3月29日 不太会做，没有什么思路。五毒神功
- :shit: 第二次练习 



### 递归

解题代码

```java
private TreeNode ret;

public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    recurseTree(root, p, q);
    return ret;
}

private boolean recurseTree(TreeNode curNode, TreeNode p, TreeNode q) {
    if (curNode == null) {
        return false;
    }

    int left = recurseTree(curNode.left, q, p) ? 1 : 0;
    int right = recurseTree(curNode.right, q, p) ? 1 : 0;

    // if the current node is one of p or q
    int mid =(curNode == p || curNode == q) ? 1 : 0;

    if (mid + left + right >= 2) {
        this.ret = curNode;
    }

    return (mid + left + right) > 0;
}

```



### 使用父指针 

官方题解 :notebook:

```java
class Solution {

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

        // Stack for tree traversal
        Deque<TreeNode> stack = new ArrayDeque<>();

        // HashMap for parent pointers
        Map<TreeNode, TreeNode> parent = new HashMap<>();

        parent.put(root, null);
        stack.push(root);

        // Iterate until we find both the nodes p and q
        while (!parent.containsKey(p) || !parent.containsKey(q)) {

            TreeNode node = stack.pop();

            // While traversing the tree, keep saving the parent pointers.
            if (node.left != null) {
                parent.put(node.left, node);
                stack.push(node.left);
            }
            if (node.right != null) {
                parent.put(node.right, node);
                stack.push(node.right);
            }
        }

        // Ancestors set() for node p.
        Set<TreeNode> ancestors = new HashSet<>();

        // Process all ancestors for node p using parent pointers.
        while (p != null) {
            ancestors.add(p);
            p = parent.get(p);
        }

        // The first ancestor of q which appears in
        // p's ancestor set() is their lowest common ancestor.
        while (!ancestors.contains(q))
            q = parent.get(q);
        return q;
    }

}
```



### 易错点

- 易错项 1 
