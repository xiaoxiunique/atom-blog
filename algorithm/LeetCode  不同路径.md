[题目地址](https://leetcode-cn.com/problems/unique-paths/)



- :slightly_smiling_face: 第一次练习 2020年4月18日 听了老师的讲解，自己实现，一次过。🐂🍺
- :smile: 第二次练习 



### 动态规划

- 子问题 - 每个格子的走法等于它右边的格子的步数加下面格子的步数
- 状态 `dp[i][j]`
- 状态转移方程 `dp[i][j] = dp[i + 1][j] + dp[i][j + 1];`

解题代码

```java
public int uniquePaths(int m, int n) {
    /**
         * - sub 每个格子的走法等于它右边的格子的步数加下面格子的步数
         * - 状态
         * - 转移方程
         */
    int[][] dp = new int[m][n];

    // 处理初始状态，将右边的列全部置为 1
    for(int j = 0; j < n; j ++)
        dp[m - 1][j] = 1;
    for(int i = 0; i < m; i ++)
        dp[i][n - 1] = 1;

    // 从右下角开始循环
    for(int i = m - 2; i >= 0; i --) {
        for(int j = n - 2; j >= 0; j --) {
            dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
        }
    }

    return dp[0][0];
}
```



### 易错点

- 易错项 1 
