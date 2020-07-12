[题目地址](https://leetcode-cn.com/problems/merge-intervals/)



- :slightly_smiling_face: 第一次练习 2020年4月15日 先排序后合并 有一些小问题需要注意一下
- :smile: 第二次练习 



### 解题方法



解题代码

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        List<int[]> res = new ArrayList<>();
        if (intervals == null || intervals.length == 0) {
            return res.toArray(new int[0][]);
        }
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        int i = 0;
        while(i < intervals.length) {
            int left = intervals[i][0];
            int right = intervals[i][1];
            while(i < intervals.length - 1 && intervals[i + 1][0] <= right) {
                i ++;
                right = Math.max(right, intervals[i][1]);
            }
            res.add(new int[]{left, right});
            i ++;
        }

        return res.toArray(new int[0][]);
    }
}

```



### 易错点

- 易错项 1 
