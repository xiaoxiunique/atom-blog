[题目地址](https://leetcode-cn.com/problems/linked-list-in-binary-tree/)



- :slightly_smiling_face: 第一次练习 2020-05-31也有自己的递归思路，但是还是跟他们的思路差挺多的。我是想直接一次递归。结果不正确。整体思路差不多
- :smile: 第二次练习



### 解题方法

解题代码

```java
    public boolean isSubPath(ListNode head, TreeNode root) {
        if (head == null) {
            return true;
        }
        if (root == null) {
            return false;
        }

        // 先判断当前结点，如果当前结点不对，再判断子树。
        return isSub(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
    }

    private boolean isSub(ListNode head, TreeNode root) {
        if (head == null) {
            return true;
        }
        if (root == null || head.val != root.val) {
            return false;
        }
        // 如果结点值相同就考虑下一个
        return isSub(head.next, root.left) || isSub(head.next, root.right);
    }

```



### 易错点

- 易错项 1

