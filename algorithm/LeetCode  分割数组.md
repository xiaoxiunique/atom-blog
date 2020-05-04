[题目地址](https://leetcode-cn.com/problems/partition-array-into-disjoint-intervals/)



- :slightly_smiling_face: 第一次练习 过遍数，这个题目
- :smile: 第二次练习 



### 分割数组

- 运用两个辅助数组，`maxLeft` 从左边开始遍历存储较大的元素，`maxRight` 从右边遍历存储较小的元素
- 而后循环数组的大小，读取得到相交的问题，就可以判定位焦点

解题代码

```java
 // [5, 0, 3, 8, 6]
    public int partitionDisjoint(int[] A) {
        int n = A.length;

        int[] maxLeft = new int[n];
        int[] minRight = new int[n];

        int m = A[0];
        for(int i = 0; i < n; ++i) {
            m = Math.max(m, A[i]);
            maxLeft[i] = m;
        }
        // maxLeft -> [5, 5, 5, 8, 8]

        m = A[n - 1];
        for (int i = n - 1; i >= 0; --i) {
            m = Math.min(m, A[i]);
            minRight[i] = m;
        }
        // minRight -> [0, 0, 3, 6, 6]

        for (int i = 1; 1 < n; ++i) {
            if (maxLeft[i - 1] <= minRight[i])
                return i;
        }

        return -1;
    }
```



### 易错点

- 易错项 1 
