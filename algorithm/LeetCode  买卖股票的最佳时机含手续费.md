[题目地址](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)



- :slightly_smiling_face: 第一次练习 2020年4月23日 动态规划，和第一题，第二题差不多，只不多添加了手续费，作相应的处理就好。这里做了第一题和第二题，现在做的时候还是比较轻松的。

  

- :smile: 第二次练习 



### 动态规划

解题代码

```java
public int maxProfit(int[] prices, int fee) {
    int n = prices.length;
    int[][] dp = new int[n][2];

    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (int i = 1; i < n; i++) {
        // 这里需要减手续费 - fee
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
}
```



动态规划 简化 双100

```java
public int maxProfit(int[] prices, int fee) {
    int dp_i_0 = 0, dp_i_1 = Integer.MIN_VALUE;
    for (int i = 0; i < prices.length; i++) {
        int T = dp_i_0;
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, T - prices[i] - fee);
    }
    return dp_i_0;
}
```



### 易错点

- 易错项 1 
