:::tip

因为二叉树的层序遍历等， 相关代码还是比较的固定，所以这里记录一下模板，下次在遇到相关层序遍历的问题的时候，直接就不用考虑其他，就可以直接套用模板就可以了。:ox::beers:

:::



简单的层序遍历，不需要考虑其他问题的话

```java
public void dfs(TreeNode root) {
    if (root == null) {
        return;
    }
    
    Deque<TreeNode> deque = new ArrayDeque<>();
    deque.add(root);
    while(!deque.isEmpty()) {
        TreeNode delNode = deque.remove();
        // 对当前做相应的处理
        if (root.left != null) {
            deque.add(root.left)
        }
        if (root.right != null) {
            deque.add(root.right);
        }
    }
}
```





如果题目中需要对层做几种处理的话，那么代码需要简单的变动一下，因为上面的代码不能够单独体现一层的概念。

这里主要是通过提前记录这层需要处理的元素个数  int size = deque.size() 后面 loop 就是这一层需要处理的元素了

```java
public void dfs(TreeNode root) { 
    if (root == null) {
        return;
    }
    
    Deque<TreeNode> deque = new ArrayDeque<>();
    deque.add(root);
    while(!deque.isEmpty()) {
        // 记录当前需要处理的元素个数
        int size = deque.size();
        for(int i = 0 ; i < size ; i ++) {
            TreeNode delNode = deque.remove();
            // 对当前层相应的处理
            if(root.left != null) {
                deque.add(root.left);
            }
            if (root.right != null) {
                deque.add(root.right);
            }
        }
    }
}
```

