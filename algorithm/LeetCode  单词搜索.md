[题目地址](https://leetcode-cn.com/problems/word-search/)



- :slightly_smiling_face: 第一次练习 2020年4月27日 回溯法，精妙到还是精妙，就是不太好理解。。。我丢。。。。
- :smile: 第二次练习 



### 解题方法

[题解](https://leetcode-cn.com/problems/word-search/solution/zai-er-wei-ping-mian-shang-shi-yong-hui-su-fa-pyth/)

解题代码

```java
private boolean[][] marked;

//        x-1,y
// x,y-1   x,y    x,y+1
//        x+1,y
private int[][] direction = {{-1, 0}, {0, -1}, {0, 1}, {1, 0}};

// 行
private int m;
// 列
private int n;

private String word;
private char[][] board;

public boolean exist(char[][] board, String word) {
    m = board.length;
    if (m == 0) {
        return false;
    }
    n = board[0].length;
    marked = new boolean[m][n];
    this.word = word;
    this.board = board;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

private boolean dfs(int i, int j, int start) {
    // 最后一位
    if (start == word.length() - 1) {
        return board[i][j] == word.charAt(start);
    }

    if (board[i][j] == word.charAt(start)) {
        marked[i][j] = true;
        // 获取四个方向的值
        for (int k = 0; k < 4; k++) {
            int x = i + direction[k][0];
            int y = j + direction[k][1];

            if (x >= 0 && x < m && y >= 0 && y < n) {
                if (!marked[x][y]) {
                    if (dfs(x, y, start + 1)) {
                        return true;
                    }
                }
            }
        }
        marked[i][j] = false;
    }
    return false;
}



```



### 易错点

- 这个题要多练习，易错的地方还是挺多的。
