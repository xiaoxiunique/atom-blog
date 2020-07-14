[题目地址](https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/)



- :slightly_smiling_face: 第一次练习 2020-07-01 这个题一看就知道是动态规划，但是定义状态和状态转移还是需要注意 一不小心就错了
- :smile: 第二次练习



### 动态规划

时间复杂度: O(N * M)
空间复杂度: O(N * M)



```java
    /**
     * 题目为最长重复子数组
     * @param A a
     * @param B b
     * @return 最长重复子数组的长度
     */
    public int findLength(int[] A, int[] B) {
        if (A.length == 0 || B.length == 0) {
            return 0;
        }

        int max = 0;
        int a = A.length;
        int b = B.length;
        int[][] dp = new int[a + 1][b + 1];

        for (int i = 1; i <= a; i++) {
            for (int j = 1; j <= b; j++) {
                if (A[i - 1] == B[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = 0;
                }
                max = Math.max(max, dp[i][j]);
            }
        }
        return max;
    }
```



### 易错点

- 易错项 1
