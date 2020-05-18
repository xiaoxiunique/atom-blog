[题目地址](https://leetcode-cn.com/problems/maximum-product-subarray/)



- :slightly_smiling_face: 第一次练习 2020年4月18日 第一次理解不是很深刻
- :smile: 第二次练习 2020年5月18日 第二次做，理解动态规划，太牛逼了，动态规划的解法。



### 解题方法

先上优秀[题解](https://leetcode-cn.com/problems/maximum-product-subarray/solution/dong-tai-gui-hua-li-jie-wu-hou-xiao-xing-by-liweiw/)

解题代码

```java
class Solution {
    public int maxProduct(int[] nums) {
        int len = nums.length;
        if (len == 0) {
            return 0;
        }

        // dp[i][0] 以 nums[i] 结尾的连续子数组的最小值
        // dp[i][1] 以 nums[i] 结尾的连续子数组的最大值

        int[][] dp = new int[len][2];
        dp[0][0] = nums[0];
        dp[0][1] = nums[0];

        for (int i = 1; i < len; i++) {
            if (nums[i] >= 0) {
                dp[i][0] = Math.min(nums[i], nums[i] * dp[i - 1][0]);
                dp[i][1] = Math.max(nums[i], nums[i] * dp[i - 1][1]);
            } else {
                dp[i][0] = Math.min(nums[i], nums[i] * dp[i - 1][1]);
                dp[i][1] = Math.max(nums[i], nums[i] * dp[i - 1][0]);
            }
        }

        // 只关心最大值 需要遍历
        int res = dp[0][1];
        for (int i = 1; i < len; i++) {
            res = Math.max(res, dp[i][1]);
        }
        return res;
    }
}
```



### 易错点

- 易错项 1 
