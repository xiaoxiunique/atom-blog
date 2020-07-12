[题目地址](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)



- 😣 第一次练习 2020年3月29日 不太会做，没有什么思路。五毒神功
- :shit: 第二次练习 2020.05.10 思路还是懂了一些。还是要持续练习才行
- 第三次练习 2020年5月11日 算更加懂了一些了吧



### 递归

解题代码

```java
private TreeNode ret;

public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    recurseTree(root, p, q);
    return ret;
}

private boolean recurseTree(TreeNode curNode, TreeNode p, TreeNode q) {
    if (curNode == null) {
        return false;
    }

    int left = recurseTree(curNode.left, q, p) ? 1 : 0;
    int right = recurseTree(curNode.right, q, p) ? 1 : 0;

    // if the current node is one of p or q
    int mid =(curNode == p || curNode == q) ? 1 : 0;

    if (mid + left + right >= 2) {
        this.ret = curNode;
    }

    return (mid + left + right) > 0;
}

```



### 使用父指针 

官方题解 :notebook:

```java
class Solution {

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

        // Stack for tree traversal
        Deque<TreeNode> stack = new ArrayDeque<>();

        // HashMap for parent pointers
        Map<TreeNode, TreeNode> parent = new HashMap<>();

        parent.put(root, null);
        stack.push(root);

        // Iterate until we find both the nodes p and q
        while (!parent.containsKey(p) || !parent.containsKey(q)) {

            TreeNode node = stack.pop();

            // While traversing the tree, keep saving the parent pointers.
            if (node.left != null) {
                parent.put(node.left, node);
                stack.push(node.left);
            }
            if (node.right != null) {
                parent.put(node.right, node);
                stack.push(node.right);
            }
        }

        // Ancestors set() for node p.
        Set<TreeNode> ancestors = new HashSet<>();

        // Process all ancestors for node p using parent pointers.
        while (p != null) {
            ancestors.add(p);
            p = parent.get(p);
        }

        // The first ancestor of q which appears in
        // p's ancestor set() is their lowest common ancestor.
        while (!ancestors.contains(q))
            q = parent.get(q);
        return q;
    }

}
```



### 递归

- 如果给定的两个节点的值都小于根节点的值，那么最近的共同祖先一定在左子树
- 如果给定的两个节点的值都大于根节点的值，那么最近的共同祖先一定在右子树
- 如果一个大于等于、一个小于等于根节点的值，那么当前根节点就是最近的共同祖先了

```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == p || root == q) {
        return root;
    }

    Stack<TreeNode> stack = new Stack<TreeNode>();

    // 中序遍历，判断两个节点是否在左子树
    TreeNode cur = root.left;
    boolean pLeft = false;
    boolean qLeft = false;
    while (cur != null || !stack.isEmpty()) {
        while(cur != null) {
            stack.push(cur);
            cur = cur.left;
        }

        // 节点位空就出栈
        cur = stack.pop();
        // 判断是否等于 p 节点
        if (cur == p) {
            pLeft = true;
        }
        // 判断是否等于 q 节点
        if (cur == q) {
            qLeft = true;
        }
        if (pLeft && qLeft) {
            break;
        }

        // 考虑右子树
        cur = cur.right;
    }

    // 两个节点都在左子树
    if (pLeft && qLeft) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (!pLeft && !qLeft) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
}

```



### 易错点

- 易错项 1 
