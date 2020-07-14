[题目地址](https://leetcode-cn.com/problems/path-sum/)

- :slightly_smiling_face: 第一次练习 2020-07-07
- :smile: 第二次练习



### 解题方法 递归

时间复杂度: O()
空间复杂度: O()

解题代码

```java
    /**
     * - 根节点到叶子节点的路径 DFS
     * - 叶子节点是指没有子节点的节点。root.left == null && root.right == null
     * @param root
     * @param sum
     * @return
     */
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) {
            return false;
        }
        if (root.left == null && root.right == null) {
            return sum - root.val == 0;
        }
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
```

### 易错点

- 易错项 1
