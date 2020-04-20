[题目地址](https://leetcode-cn.com/problems/unique-paths-ii/)



- :slightly_smiling_face: 第一次练习 2020年4月18日 这个有一个障碍物的问题，就导致按照第一个问题的做法的话不能倒退会有特殊值处理问题，这个时候就需要正向处理了。我丢。。。。
- :smile: 第二次练习 



### 动态规划

解题代码

```java
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        /**
         * - sub 每个格子的走法等于它右边的格子的步数加下面格子的步数
         * - 状态
         * - 转移方程
         */

        int m = obstacleGrid.length, n = obstacleGrid[0].length;

        if (obstacleGrid[0][0] == 1)
            return 0;

        obstacleGrid[0][0] = 1;

        for(int i = 1; i < m; i ++) {
            obstacleGrid[i][0] = (obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1) ? 1 : 0;
        }

        for(int i = 1; i < n; i ++) {
            obstacleGrid[0][i] = (obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1) ? 1 : 0;
        }

        for(int i = 1; i < m; i ++) {
            for(int j = 1; j < n; j ++) {
                if (obstacleGrid[i][j] == 0) {
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                } else {
                    obstacleGrid[i][j] = 0;
                }
            }
        }

        return obstacleGrid[m - 1][n - 1];
    }

```



### 易错点

- 易错项 1 
