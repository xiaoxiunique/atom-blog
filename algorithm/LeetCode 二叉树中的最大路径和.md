[题目地址](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)



- :slightly_smiling_face: 第一次练习 2020-06-22 这题基本上算是将递归应用到极致了。awesome
- :smile: 第二次练习



### 递归

解题代码

```java
class Solution {
    int maxSum = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        R(root);
        return maxSum;
    }

    /**
     * 递归计算最大和
     * @param root
     */
    private int R(TreeNode root) {
        if (root == null) {
            return 0;
        }

        // calc left
        int leftSum = Math.max(0, R(root.left));
        // calc right
        int rightSum = Math.max(0, R(root.right));

        maxSum = Math.max(maxSum, (root.val + leftSum + rightSum));
        return root.val + Math.max(leftSum, rightSum);
    }
}
```



### 易错点

- 易错项 1

