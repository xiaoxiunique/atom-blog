[题目地址](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/)



- :slightly_smiling_face: 第一次练习 2020年4月3日 听老师讲过用贪心来求解，确实会显得简单很多。
- :smile: 第二次练习 



### 贪心

解题代码

```java
public int maxProfit(int[] prices) {
    int ret = 0;
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            ret += (prices[i] - prices[i - 1]);
    }
    return ret;
}
```



### 易错点

- 易错项 1 
