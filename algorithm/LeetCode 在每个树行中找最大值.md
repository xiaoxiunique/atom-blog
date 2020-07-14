[题目地址](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description)



- :slightly_smiling_face: 第一次练习 2020年4月1日 这是一个典型的层序遍历的题目，基本上就按照模板套就可以了。唯一需要注意一点的是需要处理一下只有一个节点的情况。
- :smile: 第二次练习 



### BFS

解题代码

```java
private List<I nteger> retList;

public List<Integer> largestValues(TreeNode root) {
    retList = new ArrayList<>();
    if (root == null) {
        return new ArrayList<>();
    }
    Deque<TreeNode> deque = new ArrayDeque<>();
    deque.addLast(root);

    while (!deque.isEmpty()) {
        int size = deque.size();
        int max = deque.peek().val;
        for (int i = 0; i < size; i++) {
            TreeNode del = deque.remove();
            max = Math.max(del.val, max);
            if (del.left != null)
                deque.add(del.left);
            if (del.right != null)
                deque.add(del.right);
        }
        retList.add(max);
    }
    return retList;
}


```



### 易错点

- 易错项 1 
