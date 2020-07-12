[题目地址](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)



- 😣 第一次练习 2020年3月29日 这题确实没什么思路，秉承不纠结的原则，直接看[题解](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/cong-qian-xu-he-zhong-xu-bian-li-xu-lie-gou-zao-er/)。抄了一下代码之后理解了下感觉好很多了 
- :smile: 第二次练习 2020年3月29日 默写代码 五毒第二掌



### 递归解法

解题代码

核心点，**前序遍历的第一个节点为根节点**，可以根据这个根节点找到中序遍历的根节点，这样就可以将数分为两个部分 left tree，right tree ，递归便可得到结果

```java
int preIdx = 0;
int[] preorder;
int[] inorder;
HashMap<Integer, Integer> idxMap = new HashMap<>();

public TreeNode buildTree(int[] preorder, int[] inorder) {
    this.preorder = preorder;
    this.inorder = inorder;

    // build a hashmap value -> its index
    int idx = 0;
    for (int val : inorder) {
        idxMap.put(val, idx ++);
    }

    return helper(0, inorder.length);
}

private TreeNode helper(int inLeft, int inRight) {
    if (inLeft == inRight) {
        return null;
    }

    // 构建根节点
    int rootVal = preorder[preIdx];
    TreeNode root = new TreeNode(rootVal);

    // 获取得到根节点在中序遍历中的位置
    int index = idxMap.get(rootVal);

    preIdx++;

    // 在中序遍历中 index 的左侧便是左子树，右侧便是右子树
    root.left = helper(inLeft, index);
    root.right = helper(index + 1, inRight);
    return root;
}

```



### 易错点

- 易错项 1 
