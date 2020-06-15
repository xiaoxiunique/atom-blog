[题目地址](https://leetcode-cn.com/problems/satisfiability-of-equality-equations/solution/deng-shi-fang-cheng-de-ke-man-zu-xing-by-leetcode-/)



- :slightly_smiling_face: 第一次练习 2020-06-08 增强了对 UnionFind 数据结构的理解。回顾了一下之前学习的内容
- :smile: 第二次练习



### 并查集

解题代码

```java
public class EquationsPossible {
    public boolean equationsPossible(String[] equations) {
        UnionFind unionFind = new UnionFind(26);

        // union
        for (String equation : equations) {
            char[] word = equation.toCharArray();
            if (word[1] == '=') {
                unionFind.union(word[0] - 'a', word[3] - 'a');
            }
        }

        // check
        for (String equation : equations) {
            char[] word = equation.toCharArray();
            if (word[1] == '!') {
                if (unionFind.find(word[0] - 'a') == unionFind.find(word[3] - 'a')) {
                    return false;
                }
            }
        }

        return true;
    }

    public static class UnionFind {
        private int count = 0;
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
}

```



### 易错点

- 易错项 1

