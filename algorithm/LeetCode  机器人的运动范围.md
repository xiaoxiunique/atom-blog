[题目地址](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)



- :slightly_smiling_face: 第一次练习 2020年4月8日 这种题目，现在还是能想到要用 BFS 来做，但是这个题目有一个什么 `也不能进入行坐标和列坐标的数位之和大于k的格` 这个不是很懂。我丢。。。。
- :smile: 第二次练习 



### BFS

解题代码 [优秀题解](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/mian-shi-ti-13-ji-qi-ren-de-yun-dong-fan-wei-dfs-b/)

```java
public int movingCount(int m, int n, int k) {
    boolean[][] visited = new boolean[m][n];
    int res = 0;
    Queue<int[]> queue = new LinkedList<>();
    queue.add(new int[] {0, 0, 0, 0});
    while (!queue.isEmpty()) {
        int[] x = queue.poll();
        int i = x[0], j = x[1], si = x[2], sj = x[3];
        if (i < 0 || i >= m || j < 0 || j >= n || k < si + sj || visited[i][j])
            continue;
        visited[i][j] = true;
        res ++;
        queue.add(new int[] {i + 1, j, (i + 1) % 10 != 0 ? si + 1 : si - 8, sj});
        queue.add(new int[] {i, j + 1, si, (j + 1) % 10 != 0 ? sj + 1 : sj - 8});
    }
    return res;
}
```



### 易错点

- 易错项 1 
