[题目地址](https://leetcode-cn.com/problems/subtree-of-another-tree/)



- :slightly_smiling_face: 第一次练习 2020/05/07 题目是简单题，但是这个递归思路可能一般还是想不到
- :smile: 第二次练习 2020年5月11日 还可以，还是能记住递归，多练习吧



### DFS

解题代码

```java
public boolean isSubtree(TreeNode s, TreeNode t) {
    if (s == null){
        return false;
    }

    if (isSame(s, t)) {
        return true;
    }

    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

private boolean isSame(TreeNode p, TreeNode q) {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }
    if (q.val != p.val) {
        return false;
    }

    return isSame(p.left, q.left) && isSame(p.right, q.right);
}

```



### 易错点

- 易错项 1 
