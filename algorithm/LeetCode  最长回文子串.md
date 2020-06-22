题目地址



- :slightly_smiling_face: 第一次练习 
- :smile: 第二次练习 



### 暴力法，超过时间限制

解题代码

```java
class Solution {
    public boolean isPalindrome(String s) {
        int len = s.length();
        for(int i = 0 ;i < len / 2; i ++) {
            if(s.charAt(i) != s.charAt(len - i - 1)) {
                return false;
            }
        }
        return true;
    }

    public String longestPalindrome(String s) {
        String ans = "";
        int max = 0;
        for (int i = 0; i < s.length(); i++) {
            for (int j = i; j <= s.length(); j++) {
                String subText = s.substring(i, j);
                if (isPalindrome(subText) && j - i > max) {
                    max = j - i;
                    ans = subText;
                }
            }
        }

        return ans;
    }
}
```



### 动态规划

没理解到。。。。。

```java
public String longestPalindrome(String s) {
        // 特判
        int len = s.length();
        if (len < 2) {
            return s;
        }

        int maxLen = 1;
        int begin = 0;

        // dp[i][j] 表示 s[i, j] 是否是回文串
        boolean[][] dp = new boolean[len][len];
        char[] charArray = s.toCharArray();

        for (int i = 0; i < len; i++) {
            dp[i][i] = true;
        }
        for (int j = 1; j < len; j++) {
            for (int i = 0; i < j; i++) {
                if (charArray[i] != charArray[j]) {
                    dp[i][j] = false;
                } else {
                    if (j - i < 3) {
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i + 1][j - 1];
                    }
                }

                // 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
                if (dp[i][j] && j - i + 1 > maxLen) {
                    maxLen = j - i + 1;
                    begin = i;
                }
            }
        }
        return s.substring(begin, begin + maxLen);
    }
```



### 易错点

- 易错项 1 
