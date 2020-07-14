[题目地址](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/)



- :smile: 第一次练习 2020年3月26日  
- :shit: 第二次练习 



### 递归解法

解题代码

```java
    public List<Integer> preorder(Node root) {
        List<Integer> ret = new ArrayList<>();
        subPreOrder(root, ret);
        return ret;
    }

    private void subPreOrder(Node root, List<Integer> ret) {
        if (root == null) {
            return;
        }

        ret.add(root.val);
        List<Node> nodeList = root.children;
        nodeList.forEach(node -> {
            if (node != null) {
                subPreOrder(node, ret);
            }
        });
    }
```



### 基于栈的遍历



