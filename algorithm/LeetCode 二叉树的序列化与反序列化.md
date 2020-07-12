[题目地址](https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/)



- 😣 第一次练习 2020年3月29日04:21:11 太累了，题解都不想看了，后面再看吧
- :shit: 第二次练习 



### 深度优先遍历

解题代码

```java

// Encodes a tree to a single string.
public String serialize(TreeNode root) {
    return rserialize(root, "");
}

private String rserialize(TreeNode root, String s) {
    if (root == null) {
        s += "null,";
    } else {
        s += root.val + ",";
        s = rserialize(root.left, s);
        s = rserialize(root.right, s);
    }
    return s;
}

public TreeNode rdeserialize(List<String> l) {
    // Recursive deserialization.
    if (l.get(0).equals("null")) {
        l.remove(0);
        return null;
    }

    TreeNode root = new TreeNode(Integer.valueOf(l.get(0)));
    l.remove(0);
    root.left = rdeserialize(l);
    root.right = rdeserialize(l);

    return root;
}

// Decodes your encoded data to tree.
public TreeNode deserialize(String data) {
    String[] data_array = data.split(",");
    List<String> data_list = new LinkedList<String>(Arrays.asList(data_array));
    return rdeserialize(data_list);
}

```



### 易错点

- 易错项 1 
