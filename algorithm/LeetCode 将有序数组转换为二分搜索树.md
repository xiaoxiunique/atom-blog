[题目地址](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)



- :slightly_smiling_face: 第一次练习 2020-07-04
- :smile: 第二次练习



### 递归

时间复杂度: O(n)
空间复杂度: O(1)

解题代码

```java
class Solution {
    /**
     * 将一个有序数组转化为 二分搜索树
     * - 有序数据
     * - 二分搜索树  [left node] < [root node] < [right node]
     * - 必须要转换为一课高度平衡的树
     * - 数组的中间节点就是 树的 根节点
     * @param nums
     * @return
     */
    public TreeNode sortedArrayToBST(int[] nums) {
       return dfs(nums, 0, nums.length - 1);
    }

    public TreeNode dfs(int[] nums, int left, int right) {
        if (left > right){
            return null;
        }

        int mid = left + (right - left) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = dfs(nums, left, mid - 1);
        root.right = dfs(nums, mid + 1, right);
        return root;
    }
}
```

### 易错点

- 易错项 1
