[题目地址](https://leetcode-cn.com/problems/friend-circles/)



- :slightly_smiling_face: 第一次练习 这个题目可以用 `dfs`，并查集来解决，但是用并查集来处理 效率非常高。。。。非常神奇
- :smile: 第二次练习 



### 并查集

解题代码

```java
class Solution {

    /**
     * 并查集
     */
    static class UnionFind {
        public int count = 0;
        private int[] parent;

        public UnionFind(int n) {
            count = n;
            parent = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }

        public int find(int p) {
            while (p != parent[p]) {
                parent[p] = parent[parent[p]];
                p = parent[p];
            }
            return p;
        }

        public void union(int p, int q) {
            int rootP = find(p);
            int rootQ = find(q);

            if (rootP == rootQ) {
                return;
            }
            parent[rootP] = rootQ;
            count --;
        }
    }



    public int findCircleNum(int[][] M) {
        int n = M.length;
        UnionFind unionFind = new UnionFind(n);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (M[i][j] == 1) {
                    unionFind.union(i, j);
                }
            }
        }

        return unionFind.count;
    }
}
```



### 易错点

- 易错项 1 
