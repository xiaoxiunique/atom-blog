[题目地址](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/)



- :slightly_smiling_face: 第一次练习 2020年4月3日 听老师讲过用贪心来求解，确实会显得简单很多。
- :smile: 第二次练习 



### 贪心

解题代码

```java
public int maxProfit(int[] prices) {
    int ret = 0;
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            ret += (prices[i] - prices[i - 1]);
    }
    return ret;
}
```





### 动态规划

状态 `dp[i][j]` i 代表第 i 填， j 代表是否持有股票

这题动态规划的解，和第一题动态规划的解一模一样都也是可以求解的

```java
class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int[][] dp = new int[n][2];
        dp[0][0] = 0;
        dp[0][1] = -prices[0];

        for (int i = 1; i < n; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        }
        return dp[n - 1][0];
    }
}
```



### 动态规划 - 优化

上方的动态规划是用一个数组来存储的，但是其实只需要保留中间状态就可以完成了

```java
public int maxProfit(int[] prices) {
    int dp_i_0 = 0, dp_i_1 = Integer.MIN_VALUE;
    for (int i = 0; i < prices.length; i++) {
        int T = dp_i_0, P = prices[i];
        // 当前没有股票有两种情况，昨天也没有，或者是昨天有但是昨天卖了
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + P);
        // 当前有股票有两种情况，昨天就有，和昨天没有，但是买了
        dp_i_1 = Math.max(dp_i_1, T - P);
    }
    return dp_i_0;
}
```



### 易错点

- 易错项 1 
