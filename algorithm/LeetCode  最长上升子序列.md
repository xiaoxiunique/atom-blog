[题目地址](https://leetcode-cn.com/problems/longest-increasing-subsequence/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 看了一些介绍的[题解](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/dong-tai-gui-hua-she-ji-zui-chang-di-zeng-zi-xu-lie)来看的，但是我感觉题解的东西我还没怎么看明白。我丢。。。。
- :smile: 第二次练习 



### 动态规划

解题代码

```java
public int lengthOfLIS(int[] nums) {
    int[] dp = new int[nums.length];
    // 初始化为 1, 所有的单个元素都可以认为是一个子序列
    Arrays.fill(dp, 1);
    for (int i = 0; i < nums.length; i++)
        for (int j = 0; j < i; j++)
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1);

    int ret = 0;
    for (int i = 0; i < dp.length; i++) {
        ret = Math.max(ret, dp[i]);
    }
    return ret;
}
```



### 易错点

- 易错项 1 
