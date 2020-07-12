[题目地址](https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/li-qing-si-lu-wei-shi-yao-yong-bfs-ru-he-xie-bfs-d/)



- 😣 第一次练习 2020年3月29日 五毒第一毒，先留个映像吧，现在的每日一题越来越难了。[优秀题解](https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/li-qing-si-lu-wei-shi-yao-yong-bfs-ru-he-xie-bfs-d/)
- :shit: 第二次练习 



### 广度优先遍历

解题代码

```java
{
    public int maxDistance(int[][] grid) {
        int N = grid.length;

        Queue<int[]> queue = new ArrayDeque<>();

        // 将所有陆地格子加入队列
        enqueAllLandBox(grid, queue);

        // 如果地图上只有 陆地或海洋，就返回 -1
        if (queue.isEmpty() || queue.size() == N * N) {
            return -1;
        }

        int distance = -1;
        while(!queue.isEmpty()) {
            distance ++;
            // 这里一口气取出 n 个节点，以实现层序遍历
            int n = queue.size();

            for (int i = 0 ; i < n ; i ++) {
                int[] cell = queue.poll();
                int r = cell[0];
                int c = cell[1];

                // 遍历上方单元格
                if (r - 1 >= 0 && grid[r - 1][c] == 0) {
                    grid[r - 1][c] = 2;
                    queue.add(new int[]{r - 1, c});
                }

                // 遍历下方单元格
                if (r + 1 < N && grid[r + 1][c] == 0) {
                    grid[r + 1][c] = 2;
                    queue.add(new int[]{r + 1, c});
                }

                // 遍历左边单元格
                if (c - 1 >= 0 && grid[r][c - 1] == 0) {
                    grid[r][c - 1] = 2;
                    queue.add(new int[] {r, c - 1});
                }

                // 遍历右边单元格
                if (c + 1 < N && grid[r][c + 1] == 0) {
                    grid[r][c + 1] = 2;
                    queue.add(new int[]{r, c + 1});
                }
            }
        }

        return distance;
    }

    private void enqueAllLandBox(int[][] grid, Queue<int[]> queue) {
        int n = grid.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    queue.add(new int[]{i, j});
                }
            }
        }
    }
}
```



### 易错点

- 
