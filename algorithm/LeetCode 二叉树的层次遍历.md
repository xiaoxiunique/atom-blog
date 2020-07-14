[题目地址](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)



- :slightly_smiling_face: 第一次练习 2020年3月31日 之前做过多叉树的层次遍历，现在再来做二叉树的层次遍历，就比较简单了

- :smile: 第二次练习 2020年5月13日 过了一个月再来做这个题目，还是比较可以，比较清晰。奥利给。。。。

  后面又练习了一下递归解法，递归的时间要快很多啊。



### 利用队列

解题代码

```java
public List<List<Integer>> levelOrder(TreeNode root) {
        // define queue , ele -> enque
        // loop !queue.isEmpty
        //   queue.poll();
        if (root == null) {
            return new ArrayList<>();
        }

        List<List<Integer>> retLIst = new ArrayList<>();
        Deque<TreeNode> deque = new ArrayDeque<>();
        deque.push(root);
        while (!deque.isEmpty()) {
            List<Integer> curList = new ArrayList<>();
            int size = deque.size();

            for (int i = 0; i < size; i++) {
                TreeNode cur = deque.remove();
                curList.add(cur.val);
                if (cur.left != null)
                    deque.add(cur.left);
                if (cur.right != null)
                    deque.add(cur.right);
            }
            retLIst.add(curList);
        }
        return retLIst;
    }
```



### 递归

这个题还可以使用递归实现，主要就是利用节点的 **层** 的概念，当递归的时候 level 就是二叉树的高度，这样其实也能达到结果输出的那样

```java
class Solution {
    List<List<Integer>> levels = new ArrayList<List<Integer>>();

    public void helper(TreeNode node, int level) {
        // start the current level
        if (levels.size() == level)
            levels.add(new ArrayList<Integer>());

         // fulfil the current level
         levels.get(level).add(node.val);

         // process child nodes for the next level
         if (node.left != null)
            helper(node.left, level + 1);
         if (node.right != null)
            helper(node.right, level + 1);
    }
    
    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root == null) return levels;
        helper(root, 0);
        return levels;
    }
}
```





### 易错点

- 易错项 1 
