[题目地址](https://leetcode-cn.com/problems/product-of-array-except-self/)



- :slightly_smiling_face: 第一次练习 2020-06-04 简单求解
- :smile: 第二次练习



### prefix + suffix

- 题目的本质其实就是求解当前元素的「前缀和 * 后缀和」

- 通过两个数组分别求出每个元素的「前缀和」「后缀和」然后再将两个数组相乘就得到结果

解题代码

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        // prefix
        int[] prefix = new int[nums.length];
        prefix[0] = 1;
        for (int i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        // suffix
        int[] suffix = new int[nums.length];
        suffix[nums.length - 1] = 1;
        for (int i = nums.length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }

        int[] result = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            result[i] = prefix[i] * suffix[i];
        }
        return result;
    }

}
```



### 易错点

- 易错项 1

