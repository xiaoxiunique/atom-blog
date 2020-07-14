[题目地址](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/)



- :smile: 第一次练习 2020年3月26日 N叉树的处理和二叉树的处理基本上一直的，明白了二叉树的处理之后，N 叉树就差不多了。只不过可能还需要一些优化的地方 
- :shit: 第二次练习 



### 递归解法

解题代码

```java
    public List<Integer> postorder(Node root) {
        List<Integer> ret = new ArrayList<>();
        subPostOrder(root, ret);
        return ret;
    }

    private void subPostOrder(Node root, List<Integer> ret) {
        if (root == null) {
            return;
        }

        List<Node> nodeList = root.children;
        nodeList.forEach(node -> {
            if (node != null) {
                subPostOrder(node, ret);
            }
        });
        ret.add(root.val);
    }
```



### 基于栈的遍历



