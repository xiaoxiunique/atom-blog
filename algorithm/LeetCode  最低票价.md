[题目地址](https://leetcode-cn.com/problems/minimum-cost-for-tickets/)



- :slightly_smiling_face: 第一次练习 2020年5月6日 像这种最值问题一看就需要用动态规划的办法来解决。就没有然后了。。。。我丢。。。 [优秀题解](https://leetcode-cn.com/problems/minimum-cost-for-tickets/solution/java-dong-tai-gui-hua-si-lu-bu-zou-cong-hou-xiang-/)
- :smile: 第二次练习 



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



### 易错点

- 易错项 1 
