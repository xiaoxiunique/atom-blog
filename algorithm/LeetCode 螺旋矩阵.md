[题目地址](https://leetcode-cn.com/problems/spiral-matrix/)



- :slightly_smiling_face: 第一次练习 2020-06-05 大概能想到那个方向上的思路。但是让自己来写。真正的代码实现上还是有一点问题的。
- :smile: 第二次练习



### 迭代打印

时间复杂度：O(h * n)

空间复杂度：O (n)

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> ret = new ArrayList<>();
        if (matrix == null || matrix.length == 0) {
            return ret;
        }

        int top = 0;
        int left = 0;
        int bottom = matrix.length - 1;
        int right = matrix[0].length - 1;

        // 赋值上 下 左 右 边界
        while (true) {
            // right
            for (int i = left; i <= right; i++) {
                ret.add(matrix[top][i]);
            }
            if (++top > bottom) {
                break;
            }

            for (int i = top; i <= bottom; i++) {
                ret.add(matrix[i][right]);
            }
            if (--right < left) {
                break;
            }

            for (int i = right; i >= left; i--) {
                ret.add(matrix[bottom][i]);
            }
            if (--bottom < top) {
                break;
            }

            for (int i = bottom; i >= top; i--) {
                ret.add(matrix[i][left]);
            }
            if (++left > right) {
                break;
            }
        }
        return ret;
    }
}
```



这个是要返回数组。需要控制一下

```java
     public int[] spiralOrder(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return new int[0];
        }

        int top = 0;
        int left = 0;
        int bottom = matrix.length - 1;
        int right = matrix[0].length - 1;

        int[] ret = new int[(right + 1) * (bottom + 1)];
        int idx = 0;

        // 赋值上 下 左 右 边界
        while (true) {
            // right
            for (int i = left; i <= right; i++) {
                ret[idx ++] = (matrix[top][i]);
            }
            if (++top > bottom) {
                break;
            }

            for (int i = top; i <= bottom; i++) {
                ret[idx ++] = matrix[i][right];
            }
            if (--right < left) {
                break;
            }

            for (int i = right; i >= left; i--) {
                ret[idx ++] = matrix[bottom][i];
            }
            if (--bottom < top) {
                break;
            }

            for (int i = bottom; i >= top; i--) {
                ret[idx ++] = matrix[i][left];
            }
            if (++left > right) {
                break;
            }
        }
        return ret;
    }

```



### 易错点

- 易错项 1

