[题目地址](https://leetcode-cn.com/problems/game-of-life/solution/si-lu-jian-dan-yi-dong-zhu-xing-jie-shi-by-jerry_n/)



- :slightly_smiling_face: 第一次练习 2020年4月2日 不会做，我丢。。。 看了一下人家的[题解](https://leetcode-cn.com/problems/game-of-life/solution/si-lu-jian-dan-yi-dong-zhu-xing-jie-shi-by-jerry_n/)，理解了一下思路。自己临摹了一份
  - 用二进制的 00 01 10 11 表示题目中给出的四种状态
  - 状态
    - 00 死的，下一轮还是死的
    - 01 死的，下一轮活了
    - 10 ，活的，下一轮死了
    - 11 活的，下一轮继续活着
  - 奖励一个 x 轴，y轴的方向数组，分别遍历周围的八个位置 使用 & 运算进行处理，如果是 1 就 + 1
  - 通过周围的细胞，改变当前位置的状态
  - 处理完毕之后，统一除以2 得到最后的结果 board >>= 1 
- :smile: 第二次练习 



### 解题方法

解题代码

```java

    int[] dx = {-1, 1, 0, 0, -1, -1, 1, 1};
    int[] dy = {0, 0, -1, 1, -1, 1, -1, 1};

    int[][] board;
    int m, n;
    public void gameOfLife(int[][] board) {
        this.board = board;
        if (board == null || board.length == 0 || board[0] == null || board[0].length == 0)
            return;

        this.m = board.length;
        this.n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {

                // 拿到当前位置周围活细胞数量
                int cnt = countAlive(i, j);
                // 1. 活细胞周围八个位置有两个或三个活细胞，下一轮继续活
                if (board[i][j] == 1 && (cnt == 2 || cnt == 3))
                    board[i][j] = 3;
                // 2. 细胞本来死的，周围有三个活着的，下一轮复活了
                if (board[i][j] == 0 && cnt == 3)
                    board[i][j] = 2;
            }
        }

        // 更新结果
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // 右移 1 就是除以 2
                board[i][j] >>= 1;
            }
        }

    }

    private int countAlive(int x, int y) {
        int cnt = 0;
        for (int i = 0; i < 8; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n)
                continue;
            // 如果这个位置是 0，代表是死的，之前死或者之后死都不会算进去
            // 如果这个位置是 1， 并且还没有遍历到，需要算进去
            // 如果这个位置是 2， 代表是活的，并且之前是死的，不需要算进去
            // 如果这个位置是 3， 代表是活的，修改过了，并且之前是或的，需要算进去
            cnt += (board[nx][ny] & 1);
        }
        return cnt;
    }

```



### 易错点

- 易错项 1 
