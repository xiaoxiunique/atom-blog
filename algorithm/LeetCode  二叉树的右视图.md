[题目地址](https://leetcode-cn.com/problems/binary-tree-right-side-view/)



- :slightly_smiling_face: 第一次练习 2020年4月22日 最开始做的时候没啥思路，但是后面看到题解 DFS、BFS 时，感觉就豁然开朗了
- :smile: 第二次练习 



### BFS

每次去每层的最后一个节点

解题代码

```java
public List<Integer> rightSideView(TreeNode root) {
    // bfs
    List<Integer> retList = new ArrayList<>();

    if (root == null){
        return retList;
    }

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while(!queue.isEmpty()) {
        // 当前层 元素的个数
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            // 处理最后一个元素
            TreeNode E = queue.poll();
            if (E.left != null)
                queue.offer(E.left);
            if (E.right != null)
                queue.offer(E.right);

            if (i == size - 1)
                retList.add(E.val);
        }
    }

    return retList;
}

```





### DFS



### 易错点

- 易错项 1 
