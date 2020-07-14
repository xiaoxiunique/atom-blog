[题目地址](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)



- :slightly_smiling_face: 第一次练习 2020年4月24日 掉头发题
- :smile: 第二次练习 



### 解题方法

[参考题解](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/bao-li-jie-fa-fen-zhi-si-xiang-shu-zhuang-shu-zu-b/)

解题代码

```java
public int reversePairs(int[] nums) {
    int len = nums.length;
    if (len < 2) {
        return 0;
    }

    int[] copy = new int[len];
    for (int i = 0; i < len; i++) {
        copy[i] = nums[i];
    }
    int[] temp = new int[len];

    return reversePairs(copy, 0, len - 1, temp);
}

/**
     * nums[left...right] 计算逆序对个数并且排序
     * @param nums
     * @param left
     * @param right
     * @param temp
     * @return
     */
private int reversePairs(int[] nums, int left, int right, int[] temp) {
    if (left == right) {
        return 0;
    }

    int mid = left + (right - left) / 2;
    int leftPairs = reversePairs(nums, left, mid, temp);
    int rightPairs = reversePairs(nums, mid + 1, right, temp);

    // 如果两个数组已经合并，则无需合并，注意这里使用小于等于
    if (nums[mid] <= nums[mid + 1]) {
        return leftPairs + rightPairs;
    }

    int crossPairs = mergeAndCount(nums, left, mid, right, temp);
    return leftPairs + rightPairs + crossPairs;
}


/**
     * nums[left...mid] 有序 nums[mid + 1...right] 有序
     * @param nums
     * @param left
     * @param mid
     * @param right
     * @param temp
     * @return
     */
private int mergeAndCount(int[] nums, int left, int mid, int right, int[] temp) {
    for (int i = left; i <= right; i++) {
        temp[i] = nums[i];
    }

    int i = left, j = mid + 1, count = 0;
    for (int k = left; k <= right; k++) {
        // 有下表访问，判断是否越界
        if (i == mid + 1) {
            nums[k] = temp[j];
            j ++;
        } else if (j == right + 1) {
            nums[k] = temp[i];
            i ++;
        } else if (temp[i] <= temp[j]) {
            nums[k] = temp[i];
            i ++;
        } else {
            nums[k] = temp[j];
            j ++;

            count += (mid - i + 1);
        }
    }
    return count;
}
```



### 易错点

- 易错项 1 
