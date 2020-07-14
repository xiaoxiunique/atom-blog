[题目地址](https://leetcode-cn.com/problems/subtree-of-another-tree/)



- :slightly_smiling_face: 第一次练习 2020年5月7日 是一个简单题，但是做起来还是需要思考一下
- :smile: 第二次练习 2020年5月8日 大概思路还是记得了，还是多加练习，五毒还是很有效的。



### DFS

解题代码

```java
public boolean isSubtree(TreeNode s, TreeNode t) {
    if  (s == null) {
        return false;
    }

    if (isSame(s, t)) {
        return true;
    }

    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

public boolean isSame(TreeNode p, TreeNode q) {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }

    if (p.val != q.val) {
        return false;
    }

    return isSame(p.left, q.left) && isSame(p.right, q.right);
}

```



这种写法我虽然不赞同，但是确实要简洁很多

```java
public boolean isSubtree(TreeNode s, TreeNode t) {

    if (s == null) return false;
    if (isSame(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

private boolean isSame(TreeNode p, TreeNode q) {

    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    if (p.val != q.val) return false;
    return isSame(p.left, q.left) && isSame(p.right, q.right);
}
```



### 易错点

- 易错项 1 
