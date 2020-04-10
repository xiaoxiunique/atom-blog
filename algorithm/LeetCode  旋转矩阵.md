[题目地址](https://leetcode-cn.com/problems/rotate-matrix-lcci/)



- :slightly_smiling_face: 第一次练习 2020年4月7日 这个题感觉有一些数学的知识在里面，没接触过的话，第一次写，估计有点难搞。。。。
- :smile: 第二次练习 



### 两次翻转，便可旋转

解题代码

```java
class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        // 先沿左上，右下对角线进行翻转
        for(int i = 0; i < n - 1; i ++) {
            for(int j = i + 1; j < n ; j ++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // 再对每一行的中心进行翻转
        int mid = n >>> 1;
        for(int i = 0; i < n ; i ++) {
            for(int j = 0; j < mid; j ++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - 1 - j];
                matrix[i][n - j - 1] = temp;
            }
        }
    }
}
```



### 易错点

- 易错项 1 
