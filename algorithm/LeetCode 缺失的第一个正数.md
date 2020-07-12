[题目地址](https://leetcode-cn.com/problems/first-missing-positive/)



- :slightly_smiling_face: 第一次练习 2020-06-27 看了题解，精妙
- :smile: 第二次练习



### 原地 Hash

解题代码

```java
class Solution {
 /**
     * 只看大于 0 并且小于 len 的数，将这个数字移动到 val - 1 的位置处
     * @param nums
     * @return
     */
    public int firstMissingPositive(int[] nums) {
        int len = nums.length;

        // 循环数组元素，交换元素的位置 num[i] -> num[i] - 1
        for (int i = 0; i < nums.length; i++) {

            // 我们需要查看的元素只需要限定在 [0...len] , 交换的前提还需要判断，要交换的位置不等于当前位置的值 num[num[i] - 1] != nums[i]
            while (nums[i] > 0 && nums[i] < len && nums[nums[i] - 1] != nums[i]) {

                // 交换元素位置
                swap(nums, i, nums[i] - 1);
            }
        }

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }

        return len + 1;
    }

    private void swap(int[] nums, int p, int q) {
        int t = nums[p];
        nums[p] = nums[q];
        nums[q] = t;
    }
}
```



### 易错点

- 易错项 1

