[题目地址](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/)



- 😣 第一次练习 2020年3月26日 思路还记得 就是不太会写了
- :shit: 第二次练习 



### 递归解法

解题代码

```java
 public List<Integer> inorderTraversal(TreeNode root) {
        if (root == null) {
            return new ArrayList<>();
        }

        List<Integer> ret = new ArrayList<>();
        subInOrderTraversal(root, ret);
        return ret;
    }

    private void subInOrderTraversal(TreeNode root, List<Integer> ret) {
        if (root == null) {
            return;
        }

        if (root.left != null) {
            subInOrderTraversal(root.left, ret);
        }
        ret.add(root.val);

        if (root.right != null) {
            subInOrderTraversal(root.right, ret);
        }
    }
```



### 基于栈的遍历



### 易错点

- 需要注意中序排序的性质
