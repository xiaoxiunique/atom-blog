[题目地址](https://leetcode-cn.com/problems/regular-expression-matching/)



- :slightly_smiling_face: 第一次练习 2020-06-21 ？？？？？？？
- :smile: 第二次练习



### 解题方法

解题代码

```java
    public static boolean isMatch(String s, String p) {
        int ls = s.length(), lp = p.length();
        boolean[][] dp = new boolean[ls + 1][lp + 1];
        dp[0][0] = true;

        for(int j = 2; j <= lp; j ++) {
            dp[0][j] = dp[0][j - 2] && p.charAt(j - 1) == '*';
        }

        for (int i = 1; i <= ls; i++) {
            for (int j = 1; j <= lp; j++) {
                int m = i - 1;
                int n = j - 1;

                if (p.charAt(n) == '*') {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j] &&
                            (s.charAt(m) == p.charAt(n - 1) || p.charAt(n - 1) == '.');
                } else if (s.charAt(m) == p.charAt(n) || p.charAt(n) == '.') {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }

        return dp[ls][lp];
    }

```



### 易错点

- 易错项 1

