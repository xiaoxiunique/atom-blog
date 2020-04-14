[题目地址](https://leetcode-cn.com/problems/01-matrix/submissions/)



- :slightly_smiling_face: 第一次练习  2020年4月15日 知道是广度优先搜索，不过还是需要在实现上有一点技巧。
- :smile: 第二次练习 



### 解题方法



解题代码

```java
class Solution {
    public int[][] updateMatrix(int[][] matrix) {
        int row = matrix.length;
        int col = matrix[0].length;

        // 方向数组，对应四个方位的变化
        int[][] vector = new int[][]{{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        Queue<int[]> queue = new LinkedList<>();
        for(int i = 0; i < row; i ++) {
            for(int j = 0; j < col; j ++) {
                if (matrix[i][j] == 0) {
                    queue.add(new int[]{i, j});
                } else {
                    matrix[i][j] = row + col;
                }
            }
        }

        while (!queue.isEmpty()) {
            int[] s = queue.poll();
            // 搜索上下左右四个方向
            for (int[] v : vector) {
                int r = s[0] + v[0];
                int c = s[1] + v[1];
                if (r >= 0 && r < row && c >= 0 && c < col){
                    if (matrix[r][c] >= matrix[s[0]][s[1]] + 1){
                        matrix[r][c] = matrix[s[0]][s[1]] + 1;
                        queue.add(new int[]{r, c});
                    }
                }
            }
        }
        return matrix;
    }
}
```



### 易错点

- 易错项 1 
