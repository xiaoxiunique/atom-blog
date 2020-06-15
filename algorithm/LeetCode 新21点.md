[题目地址](https://leetcode-cn.com/problems/new-21-game/)



- :slightly_smiling_face: 第一次练习 2020-06-03 ？？？？？？？
- :smile: 第二次练习



### 动态规划

解题代码，我感觉整体真的。。根本没想到过可以通过动态规划的方式来求解。

```java
class Solution {
    public double new21Game(int N, int K, int W) {
        if (K == 0) {
            return 1.0;
        }
        double[] dp = new double[K + W + 1];
        for (int i = K; i <= N && i < K + W; i++) {
            dp[i] = 1.0;
        }
        dp[K - 1] = 1.0 * Math.min(N - K + 1, W) / W;
        for (int i = K - 2; i >= 0; i--) {
            dp[i] = dp[i + 1] - (dp[i + W + 1] - dp[i + 1]) / W;
        }
        return dp[0];
    }
}
```



### 易错点

- 易错项 1

