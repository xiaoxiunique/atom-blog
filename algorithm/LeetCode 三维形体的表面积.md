[题目地址](https://leetcode-cn.com/problems/surface-area-of-3d-shapes/)



- 😣 第一次练习 2020年3月25日 这个题目主要是方法，一般很难想得到。所以就没有必要纠结了，直接看题解就好。
- :shit: 第二次练习 



计算出单个柱体的所有面积，然后减去相交部分的面积



解题代码

```java
class Solution {
    public int surfaceArea(int[][] grid) {
        int n = grid.length, area = 0;
        for (int i = 0; i < n ; i ++) {
            for (int j = 0; j < n; j ++) {
                int level = grid[i][j];
                if (level > 0) {
                    // 一个柱体中：2个底面 + 所有的正方体都贡献了4个侧表面积
                    area += (level << 2) + 2;
                    // 减掉 i 与 i - 1 相贴的两份表面积
                    area -= i > 0 ? Math.min(level, grid[i - 1][j]) << 1 : 0;
                    // 减掉 j 与 j - 1 相贴的两份表面积
                    area -= j > 0 ? Math.min(level, grid[i][j - 1]) << 1 : 0;
                }
            }
        }
        return area;
    }
}
```



### 易错点

- 这里面运用到了很多位运算符，需要注意用法，不注意就会出错
