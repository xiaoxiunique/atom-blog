[题目地址](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/solution/)



- 😣 第一次练习 2020年3月28日 层序遍历应该是基础，这题目需要按层遍历，需要在程序编写上存在一些技巧才可以
- :shit: 第二次练习 



### 利用队列进行层序遍历

解题代码

```java
public List<List<Integer>> levelOrder(Node root) {
    if (root == null) {
        return new ArrayList<>();
    }

    List<List<Integer>> retList = new ArrayList<>();

    Queue<Node> queue = new LinkedList<>();
    queue.add(root);

    while(!queue.isEmpty()) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        int size = queue.size();
        for (int i = 0; i < size; i ++) {
            Node node = queue.poll();
            arrayList.add(node.val);
            queue.addAll(node.children);
        }
        retList.add(arrayList);
    }

    return retList;
}
```



### 易错点

- 队列中剩余元素处理，需要以一个变量的形式提前存储

	```java
	int size = queue.size();
	```

	
