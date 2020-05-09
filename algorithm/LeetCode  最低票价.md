[题目地址](https://leetcode-cn.com/problems/minimum-cost-for-tickets/)



- :slightly_smiling_face: 第一次练习 2020年5月6日 像这种最值问题一看就需要用动态规划的办法来解决。就没有然后了。。。。我丢。。。 [优秀题解](https://leetcode-cn.com/problems/minimum-cost-for-tickets/solution/java-dong-tai-gui-hua-si-lu-bu-zou-cong-hou-xiang-/)
- :smile: 第二次练习 2020年5月8日 今天学习了另外一种自底向上的写法， 感觉更加容易理解一些



### 动态规划

- 今天如果不需要出门， 那么今天就需要买票
- 如果今天需要出门，则需要买几天的票？
  - 看往后最多 30 天内需不需要出门
    - 30 天内没有出行，那么就只需要买今天就行
    - 有出门的（不同决策）



解题代码

```java
public int mincostTickets(int[] days, int[] costs) {
    int len = days.length, maxDay = days[len - 1], minDay = days[0];
    int[] dp = new int[maxDay + 31];

    // 只看 minDay -> maxDay，次区间外都不需要出门
    for(int d = maxDay, i = len - 1; d >= minDay; d --) {
        // i 表示 days 的索引
        if (d == days[i]) {
            dp[d] = min(dp[d + 1] + costs[0], dp[d + 7] + costs[1], dp[d + 30] + costs[2]);
            i --;
        } else {
            // 不需要出门
            dp[d] = dp[d + 1];
        }
    }

    return dp[minDay];
}

```





```java
    public int mincostTickets(int[] days, int[] costs) {
        if (days == null || costs ==null || days.length == 0 || costs.length == 0) {
            return 0;
        }
        int len = days.length;

        // 定义状态，dp[i] 等于每一天所需要花费的最小金额
        int[] dp = new int[days[len - 1] + 1];

        // 定义初始状态, 第 0 天肯定不需要买票
        dp[0] = 0;

        // 标记需要出行的天数
        for (int i = 0; i < days.length; i++) {
            dp[days[i]] = Integer.MAX_VALUE;
        }

        for (int i = 1; i < dp.length; i++) {
            // 如果当天不需要出行
            if (dp[i] == 0) {
                // 则 当天所需要花费的金额，等于前一天需要花费的金额
                dp[i] = dp[i - 1];
                continue;
            }

            // 当天需要买票，直接购买一天, 那么当天所需要花费的金额等于前一天的最小金额 + cost[0]
            int a = dp[i - 1] + costs[0];

            // 如果已经超过 7天， 那么就是7天前花费的钱dp[i - 7] 加上7天前买了一张 7 天的票
            int b = i > 7 ? dp[i - 7] + costs[1] : costs[1];

            // 30 天同理
            int c = i > 30 ? dp[i - 30] + costs[2] : costs[2];

            dp[i] = min(a, b, c);
        }
        return dp[days[len - 1]];
    }

    public int min(int a, int b, int c) {
        return Math.min(a, Math.min(b, c));
    }

```



### 易错点

- 易错项 1 
