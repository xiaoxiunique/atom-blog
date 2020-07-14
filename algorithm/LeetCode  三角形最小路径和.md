[题目地址](https://leetcode-cn.com/problems/triangle/)



- :slightly_smiling_face: 第一次练习 2020.04.18 这是一个掉头发的题目，我丢。。。。
- :smile: 第二次练习 2020年7月14日  优化版的动态规划



```java
解题不走
```



### 动态规划

解题代码

```java
    public int minimumTotal(List<List<Integer>> triangle) {
        if (triangle == null && triangle.size() == 0) {
            return 0;
        }

        int r = triangle.size();
        int c = triangle.get(r - 1).size();

        int[][] dp = new int[r][c];

        // 处理[0][0] 特殊节点，因为三角形的顶部就只有一个元素
        dp[0][0] = triangle.get(0).get(0);
        for(int i = 1 ; i < r; i ++) {
            for(int j = 0; j <= i; j ++) {
                if (j == 0) {
                    dp[i][j] = dp[i - 1][j];
                } else if (j == i) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
                }

                dp[i][j] += triangle.get(i).get(j);
            }
        }

        int ret = Integer.MAX_VALUE;
        // 计算出 dp 最后一行的最小值
        for(int i = 0; i < c; i ++)
            ret = Math.min(ret, dp[r - 1][i]);

        return ret;
    }

```



### 优化版的动态规划

将原本需要二维空间表示的状态 转变为一维空间进行表示。

不过目前只能说看懂这个代码没问题，真的自己想要写出这么优秀的代码，还早。

```java
public int minimumTotal(List<List<Integer>> triangle) {
    int[] A = new int[triangle.size() + 1];
    for(int i = triangle.size() - 1; i >= 0; i --) {
        for(int j = 0; j < triangle.get(i).size(); j ++) {
            A[j] = Math.min(A[j], A[j + 1]) + triangle.get(i).get(j);
        }
    }
    return A[0];
}
```



### 易错点

- 易错项 1 
