[题目地址](https://leetcode-cn.com/problems/coin-change/)



- :slightly_smiling_face: 第一次练习 2020年4月3日 这个没有思路，直接看的题解。我丢。。。。

	理解了题解之后，讲一下自己的思路

	- 我们需要得到 amount 所需要的的最小的硬币数，其实可以换一个角度，我们想要得到 amount 所需硬币数，我们只需要得到 amount - 1的硬币数 + 1 就能得到我们需要的结果。

- :smile: 第二次练习 

### 题解

假设你是个土豪，你有1，5，10，20，50，100的钞票，你要凑出666买瓶水喝，依据生活经验，我们一般采取这样的策略：能用100就用100的，否则就用50的，依此类推，在这种策略下，666=100*6 + 50 1 + 10 1 + 51 + 11, 一共用了10张钞票。

这种策略就称为 **贪心策略** ：贪心策略是在当前情况下做出最好的选择，根据需要凑出的金额来进行贪心，但是，如果我们换一组钞票面值，比如 1， 5， 11，我们要凑出15的时候， 贪心策略就会出错：

15 = 11 * 1 + 1 * 4 (贪心策略）
15 = 5 * 3（正确策略）
贪心策略哪里出错了？
**鼠目寸光**

重新分析刚刚的例子。w=15时，我们如果取11，接下来就面对w=4的情况；如果取5，则接下来面对w=10的情况。我们发现这些问题都有相同的形式：“给定w，凑出w所用的最少钞票是多少张？” 接下来，我们用f(n)来表示“凑出n所需的最少钞票数量”。　　
那么，如果我们取了11，最后的代价（用掉的钞票总数）是多少呢？**明显 ，它的意义是：利用11来凑出15，付出的代价等于f(4)加上自己这一张钞票**

### 动态规划

解题代码

```java
public int coinChange(int[] coins, int amount) {
    // 自底向上的动态规划
    if (coins.length == 0) {
        return -1;
    }

    // memo[n] 的值： 表示的凑成总金额为n所需要的最小的硬币的个数
    int[] memo = new int[amount + 1];
    memo[0] = 0;
    for (int i = 1, i < amount ; i ++) {
        int min = Integer.MAX_VALUE;
        for (int j = 0; j < coins.length ; j ++) {
            if (i - coins[j] >= 0 && memo[i - coins[j]] < min) {
                min = memo[i - coins[j]] + 1;
            }
        }
        memo[i] = min;
    }

    return memo[amount] == Integer.MAX_VALUE ? -1 : memo[amount];
}
```





### 贪心 + 剪枝

等我等级够了，再去了解吧。先<u>粘贴</u>一份代码

![image-20200403010054587](https://gitee.com/xiaoxiunique/picgo-image/raw/master/image-20200403010054587.png)

```java
class Solution {
    int ans=Integer.MAX_VALUE;
    public int coinChange(int[] coins, int amount) {
        Arrays.sort(coins);
        dfs(coins,coins.length-1,amount,0);
        return ans==Integer.MAX_VALUE?-1:ans;
    }
    public void dfs(int[] coins,int index,int amount,int cnt){
        if(index<0){
            return;
        }
        for(int c=amount/coins[index];c>=0;c--){
            int na=amount-c*coins[index];
            int ncnt=cnt+c;
            if(na==0){
                ans=Math.min(ans,ncnt);
                break;//剪枝1
            }
            if(ncnt+1>=ans){
                break; //剪枝2
            }
            dfs(coins,index-1,na,ncnt);
        }
    }
}
```



### 易错点

- 就是不容易想到
