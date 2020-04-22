[题目地址](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)



- :slightly_smiling_face: 第一次练习 2020年4月22日 这个题，很早以前自己就做过了，但是那个时候用的是一种笨办法，现在用动态规划的思路求解，感觉真的是精妙很多
- :smile: 第二次练习 2020年4月22日 晚上再来练习这个题，第二次 算是孰能生巧吧。加油。。。。奥利给。。。



### 动态规划

解题代码

```java
public int maxProfit(int[] prices) {
    int n = prices.length;
    int[][] dp = new int[n][2];

    // 第一天 没有持有为 0
    dp[0][0] = 0;

    // 第一天持有，说明买了股票
    dp[0][1] = -prices[0];

    for (int i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[n - 1][0];
}

```



### 以前自己的解法


```java

public class maxProfit {
    public int maxProfit(int[] prices) {
        int total = 0;
        int begin = 0;
        int end = 0;
        boolean flag = false;
        for(int i = 0; i < prices.length - 1; i++){

            if(prices[i] < prices[i + 1] && !flag){
                begin = i;
                flag = true;
            }

            if(prices[i] > prices[i + 1] && flag){
                end = i;
                flag = false;
                total  = total + (prices[end] - prices[begin]);
            }
        }
        if(flag)
            total = total + (prices[prices.length - 1] - prices[begin]);

        return total;
    }

    public static void main(String[] args) {
        int[] arr = {7,1,5,3,6,4};
        System.out.println((new maxProfit()).maxProfit(arr));
    }
}

```