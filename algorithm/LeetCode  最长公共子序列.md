[题目地址](https://leetcode-cn.com/problems/longest-common-subsequence/)



- :slightly_smiling_face: 第一次练习 2020年4月18日 字符串问题总有有一点点理解了
- :smile: 第二次练习 



### DP

解题代码

这里需要特别解释下 `dp[i][j] = dp[i - 1][j - 1] + 1;` 这个代表，如果当前两个字符串的最后的字符是相等的，那么最长的字串就是出去当前，而后前面的部分的最长也就是 `i - 1, j - 1`

```java
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];

        for(int i = 1; i <= m; i ++) {
            for(int j = 1; j <= n; j ++) {
                if(text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        /**
         *   a c
         * a 1 1
         * c 1
         */

        return dp[m][n];
    }

```



### 易错点

- 易错项 1 
