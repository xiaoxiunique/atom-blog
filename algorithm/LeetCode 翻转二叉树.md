[题目地址](https://leetcode-cn.com/problems/invert-binary-tree/description/)



- :smiley: 第一次练习 2020年3月29日 5分钟时间 一次过，没有调试代码，运用递归模板，思路清晰:ox::beer:
- :shit: 第二次练习 



### 递归

解题代码

```java
public TreeNode invertTree(TreeNode root) {
    invert(root);
    return root;
}

private void invert(TreeNode root) {
    // terminator
    if (root == null) {
        return;
    }
    // process current logic
    TreeNode left = root.left;
    root.left = root.right;
    root.right = left;

    // drill down
    invert(root.left);
    invert(root.right);
    // reverse
}
```



### 迭代解法（利用队列）



```java
public TreeNode invertTree(TreeNode root) {
    if (root == null) return null;
    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    queue.add(root);
    while (!queue.isEmpty()) {
        TreeNode current = queue.poll();
        TreeNode temp = current.left;
        current.left = current.right;
        current.right = temp;
        if (current.left != null) queue.add(current.left);
        if (current.right != null) queue.add(current.right);
    }
    return root;
}
```



### 易错点

- 一次过还是需要记录一下的
