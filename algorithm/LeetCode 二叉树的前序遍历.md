[题目地址](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/)



- :smile: 第一次练习 2020年3月26日 因为有了中序遍历的书写基础，所以前序遍历还是挺简单的 这可能就是五毒的魅力吧 :ox::beer:
- :shit: 第二次练习 



### 递归解法

解题代码

```java
public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> ret = new ArrayList<>();
        subPreOrderTraversal(root, ret);
        return ret;
    }

    private void subPreOrderTraversal(TreeNode root, List<Integer> ret) {
        if (root == null) {
            return;
        }

        ret.add(root.val);
        if (root.left != null) {
            subPreOrderTraversal(root.left, ret);
        }
        if (root.right != null) {
            subPreOrderTraversal(root.right, ret);
        }
    }
```



### 基于栈的遍历



### 易错点

- 需要注意前序排序的性质
