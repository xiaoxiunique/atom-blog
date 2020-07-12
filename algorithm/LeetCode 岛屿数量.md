[题目地址](https://leetcode-cn.com/problems/number-of-islands/)



- :slightly_smiling_face: 第一次练习 2020年4月1日 这个科目听老师讲过，所以直接看的老师。我丢。。。

  这里主要记录一下思路

  - 循环二维数组，如果遇到岛屿 那么 count ++ 
  - 在count ++ 完成之后，需要对这个点的 上下左右 进行深度优先遍历将其与的岛屿都重置为 0，递归进行

- :smile: 第二次练习 2020年4月20日 每日一题遇到这个，自己还是能完整的做出来，不过有一个小问题就是需要先 DFS， 然后在 ++



### 深度优先遍历

解题代码

```java
    int n = 0;int m = 0;
    public int numIslands(char[][] grid) {
        int count = 0;
        n = grid.length;
        if (n == 0) {
            return 0;
        }
        m = grid[0].length;
        for (int i = 0; i < n; i++) {
           for (int j = 0; j < m ; j ++) {
               if (grid[i][j] == '1') {
                   DFSMarking(grid, i, j);
                   ++count;
               }
           }
        }
        return count;
    }

    private void DFSMarking(char[][] grid, int i, int j) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] != '1')
            return;
        grid[i][j] = '0';
        DFSMarking(grid, i + 1, j);
        DFSMarking(grid, i - 1, j);
        DFSMarking(grid, i, j + 1);
        DFSMarking(grid, i, j - 1);
    }

```



### 易错点

- 易错项 1 
