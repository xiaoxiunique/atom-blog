[题目地址](https://leetcode-cn.com/problems/binary-search-tree-iterator/)



- :slightly_smiling_face: 第一次练习 2020-05-31 没有认证审题。题目说的事二分搜索树 其实就是在提示 中序遍历是有序的。
- :smile: 第二次练习



### 中序遍历

解题代码

```java
class BSTIterator {

    ArrayList<Integer> nodeOrders;
    int index;

    public BSTIterator(TreeNode root) {
        this.nodeOrders  = new ArrayList<>();
        this.index = -1;
        inorder(root);
    }

    /**
     * 中序遍历
     * @param root
     */
    private void inorder(TreeNode root) {
        if (root == null) {
            return;
        }
        inorder(root.left);
        nodeOrders.add(root.val);
        inorder(root.right);
    }


    /** @return the next smallest number */
    public int next() {
        return this.nodeOrders.get(++this.index);
    }
    
    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return this.index + 1 < this.nodeOrders.size();
    }
}
```



### 易错点

- 易错项 1

