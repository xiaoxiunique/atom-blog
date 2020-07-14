[题目地址](https://leetcode-cn.com/problems/maximum-subarray/)



- :slightly_smiling_face: 第一次练习 2020.04.20 这个题目动态规划的，不难，但是不太能理解
- :smile: 第二次练习 2020.05.03 其实还是没怎么理解到



### 解题方法



解题代码

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int n = nums.length;

        if (n == 0) {
            return 0;
        }

        int[] dp = new int[nums.length];

        // 定义初始状态
        dp[0] = nums[0];
        int ret = dp[0];

        for(int i = 1; i < n; i ++) {
            dp[i] = Math.max(dp[i - 1], 0) + nums[i];
            ret = Math.max(ret, dp[i]);
        }

        return ret;
    }
}
```



### 易错点

- 易错项 1 
