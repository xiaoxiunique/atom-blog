[题目地址](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)



- :smile: 第一次练习 2020年3月29日 一次通过 :ox::beer: 有了递归模板之后，做递归题思路清晰很多
- :shit: 第二次练习 



### 解题方法



解题代码

```java
public int maxDepth(TreeNode root) {
    return depth(0, root);
}

private int depth(int i, TreeNode root) {
    // terminator
    if (root == null) {
        return i;
    }

    // process current logic
    int leftI = depth(i + 1, root.left);
    int rightI = depth(i + 1, root.right);
    // drill down

    // reverse
    return Math.max(leftI, rightI);
}

```



### 递归

官方迭代解法，记录一下

```java
import javafx.util.Pair;
import java.lang.Math;

class Solution {
  public int maxDepth(TreeNode root) {
    Queue<Pair<TreeNode, Integer>> stack = new LinkedList<>();
    if (root != null) {
      stack.add(new Pair(root, 1));
    }

    int depth = 0;
    while (!stack.isEmpty()) {
      Pair<TreeNode, Integer> current = stack.poll();
      root = current.getKey();
      int current_depth = current.getValue();
      if (root != null) {
        depth = Math.max(depth, current_depth);
        stack.add(new Pair(root.left, current_depth + 1));
        stack.add(new Pair(root.right, current_depth + 1));
      }
    }
    return depth;
  }
};
```



### 易错点

- 易错项 1 
