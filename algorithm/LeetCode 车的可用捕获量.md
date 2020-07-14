[题目地址](https://leetcode-cn.com/problems/available-captures-for-rook/)



- :slightly_smiling_face: 第一次练习 2020年3月26日 有一点思路，但是编码还是挺困难的，主要的是思路，官方题解思路更好，这里可以直接先看，在看中学习。学习期代码技巧
- :shit: 第二次练习 



### 利用两个数组模拟方向

解题代码

```java
class Solution {
    public int numRookCaptures(char[][] board) {
        int cnt = 0, st = 0, ed = 0;
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};

        for (int i = 0; i < 8; ++ i) {
            for (int j = 0; j < 8; ++ j) {
                if ('R' == board[i][j]) {
                    st = i;
                    ed = j;
                    break;
                }
            }
        }

        for (int i = 0; i < 4;  ++ i) {
            for (int step = 0; ;  ++ step) {
                int tx = st + step * dx[i];
                int ty = ed + step * dy[i];
                if (tx < 0 || tx >= 8 || ty < 0 || ty >=8 || 'B' == board[tx][ty]) {
                    break;
                }

                if ('p' == board[tx][ty]) {
                    cnt ++;
                    break;
                }
            }
        }
        return cnt;
    }
}
```



### 易错点

- 需要进行的是 字符比较，而不是字符串比较 不能使用 equals 方法

- 代码技巧 使用两个数组来模拟方向

  ```java
  int[] dx = {0, 1, 0, -1};
  int[] dy = {1, 0, -1, 0};
  ```

  
