[题目地址](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)



- 😣 第一次练习 2020年3月29日 二叉树的最小深度就跟最大深度处理不一样了，需要考虑到很多的异常情况。
- :shit: 第二次练习 



### 递归

解题代码

```java
public int minDepth(TreeNode root) {
    if(root == null) {
        return 0;
    }

    if (root.left == null && root.right == null) {
        return 1;
    }

    int min_depth = Integer.MAX_VALUE;
    if (root.left != null) {
        min_depth = Math.min(minDepth(root.left), min_depth);
    }
    if (root.right != null) {
        min_depth = Math.min(minDepth(root.right), min_depth);
    }

    return min_depth + 1;
}
```



### 易错点

- 易错项 1 
