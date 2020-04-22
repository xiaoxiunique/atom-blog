[题目地址](https://leetcode-cn.com/problems/coin-lcci/)



- :slightly_smiling_face: 第一次练习 2020.04.23  知道是动态规划，但是自己没有思考出来。五毒吧
- :smile: 第二次练习 



### 动态规划

解题代码

```java
public int waysToChange(int n) {
    int[][] dp = new int[4][n + 1];
    int[] coins = {1, 5, 10, 24};

    for (int i = 0; i <= n; i++) {
        dp[0][i] = 1;
    }
    for (int i = 0; i < 4; i++) {
        dp[i][0] = 1;
    }

    for (int i = 1; i < 4; i++) {
        for (int j = 1; j <= n; j++) {
            if (j >= coins[i]) {
                dp[i][j] =(dp[i - 1][j] + dp[i][j - coins[i]]) % 1000000007;
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[3][n];
}
```



### 易错点

- 易错项 1 
