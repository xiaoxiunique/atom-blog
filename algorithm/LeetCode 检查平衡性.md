[题目地址](https://leetcode-cn.com/problems/check-balance-lcci/)



- :slightly_smiling_face: 第一次练习 2020-05-31 [题解](https://leetcode-cn.com/problems/check-balance-lcci/solution/di-gui-shuang-bai-shi-yong-yi-ge-booleanbian-liang/) 用到了剪支的技巧。这个递归自己也没想到。大概知道用高度来做。
- :smile: 第二次练习



### 解题方法

解题代码

```java
class Solution {
    boolean isBalance = true;

    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }

        getDepth(root);
        return isBalance;
    }

    public int getDepth(TreeNode root) {ßß
        if (!isBalance) {
            return 0;
        }
        if (root == null) {
            return 0;
        }

        int left = getDepth(root.left);
        int right = getDepth(root.right);

        if (Math.abs(left - right) > 1) {
            isBalance = false;
        }
        return Math.max(left, right) + 1;
    }
}
```



### 易错点

- 易错项 1

