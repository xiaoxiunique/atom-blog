[题目地址](https://leetcode-cn.com/problems/symmetric-tree/)



- :slightly_smiling_face: 第一次练习 2020.05.31 这是一个简单题，但是如果你没有思路的话，还是真的很难想的出来的。不过如果有思路肯定就会觉得很简单了。
- :smile: 第二次练习 



### 递归

解题代码

```java
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if (root == null) {
            return true;
        }

        return cmp(root.left, root.right);
    }


    public boolean cmp(TreeNode left, TreeNode right) {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null || left.val != right.val) {
            return false;
        }

        return cmp(left.left, right.right) && cmp(left.right, right.left);
    }
}
```



### 易错点

- 易错项 1 
