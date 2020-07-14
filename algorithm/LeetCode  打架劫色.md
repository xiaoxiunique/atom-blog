[题目地址](https://leetcode-cn.com/problems/house-robber/)



- :slightly_smiling_face: 第一次练习 2020年4月20日 这个题目，以前自己用本办法实现过，现在用动态规划来实现。。。。
- :smile: 第二次练习 



### 动态规划

动态规划的状态定义，和状态转移方程，真的都特别重要。

```java
public int rob(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    int[] dp = new int[nums.length + 1];
    dp[0] = 0;
    dp[1] = nums[0];

    for (int i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[nums.length];
}

```



### 易错点

- 易错项 1 
