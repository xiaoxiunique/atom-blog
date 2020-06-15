[题目地址](https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/)

<img src="https://gitee.com/xiaoxiunique/picgo-image/raw/master/test/20200609090132.png" style="zoom: 67%;" />



- :slightly_smiling_face: 第一次练习 2020-06-09 相比神仙递归，我还是觉得动态规划更加容易理解点。
- :smile: 第二次练习



### 递归 神仙解法

解题代码

```java
public class TranslateNum {

    public int translateNum(int num) {
        if (num < 9) {
            return 1;
        }
        int ba = num % 100;
        if (ba <= 9 || ba >= 26) {
            return translateNum(num / 10);
        } else {
            return translateNum(num / 10) + translateNum(num / 100);
        }
    }
}

```



### 动态规划

```Java
class Solution {
    public int translateNum(int num) {
        if(num < 10) {
            return 1;
        }

        String s = String.valueOf(num);
        int[] dp = new int[s.length()];
        dp[0] = 1;
        if (s.charAt(0) == '1' || (s.charAt(0) == '2' && (int)(s.charAt(1) - '0') < 6)) {
            dp[1] = 2;
        } else {
            dp[1] = 1;
        }

        for (int i = 2; i < s.length(); i++) {
            if (s.charAt(i - 1) == '1' || (s.charAt(i - 1) == '2' && (int)(s.charAt(i) - '0') < 6)) {
                dp[i] = dp[i - 2] + dp[i - 1];
            } else {
                dp[i] = dp[i - 1];
            }
        }

        return dp[s.length() - 1];
    }
}
```



### 易错点

- 易错项 1

