[题目地址](https://leetcode-cn.com/problems/the-masseuse-lcci/)

- 😣 第一次练习 2020 年 3 月 24 日 整理思路还是有的，知道是动态规划问题，不过编码上确实有点问题
- :shit: 第二次练习

### 动态规划

```java
class Solution {
    public int massage(int[] nums) {
        int len = nums.length;
        if (len == 0){
            return 0;
        }
        if (len == 1) {
            return nums[0];
        }
        int[] dp = new int[len];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; i ++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return dp[len - 1];
    }
}
```

更加精妙的做法

```java
class Solution {
    public int massage(int[] nums) {
        int a = 0, b = 0;
        for (int i = 0; i < nums.length; i++) {
            int c = Math.max(b, a + nums[i]);
            a = b;
            b = c;
        }
        return b;
    }
}
```

### 易错点

- loop 的终结条件是 nums.length 而不是 nums.length - 1

- 求解 Max 时，也需要注意

  ```java
  for (int i = 2; i < nums.length; i ++) {
   dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  ```
