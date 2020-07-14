[题目地址](https://leetcode-cn.com/problems/decode-ways/)



- :slightly_smiling_face: 第一次练习 2020.05.27 晕了。。。
- :smile: 第二次练习 



### 动态规划

最近做题的时候，真的晕的很。本来就知道这是一个动态规划的问题 ， 但还是被绕进去了。。 难受

```java
public int numDecodings(String s) {
        char[] arr = s.toCharArray();
        int[] dp = new int[s.length() + 1];
        dp[0] = 1;
        dp[1] = arr[0] == '0' ? 0 : 1;
        if (s.length() <= 1) return dp[1];
        for (int i = 2; i <= s.length(); i++) {
            int n = (arr[i - 2] - '0') * 10 + (arr[i - 1] - '0');
            if (arr[i - 1] == '0' && arr[i - 2] == '0') {
                return 0;
            } else if (arr[i - 2] == '0') {
                dp[i] = dp[i - 1];
            } else if (arr[i - 1] == '0') {
                if (n > 26) return 0;
                dp[i] = dp[i - 2];
            } else if (n > 26) {
                dp[i] = dp[i - 1];
            } else {
                dp[i] = dp[i - 1] + dp[i - 2];
            }
        }
        return dp[dp.length - 1];
    }
```



### 易错点

- 易错项 1 
