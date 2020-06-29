[题目地址](https://leetcode-cn.com/problems/kth-largest-element-in-an-array)

- :slightly_smiling_face: 第一次练习 2020-06-29 优先队列
- :smile: 第二次练习

### 优先队列

时间复杂度: O()
空间复杂度: O()

解题代码

```java
    /**
     * 数组中第 k 个大的元素 -> Priority queue
     * @param nums
     * @param k
     * @return
     */
    public int findKthLargest(int[] nums, int k) {
        // 构建一个最小堆
        PriorityQueue<Integer> pq = new PriorityQueue<>(k, Comparator.comparingInt(a -> a));
        // 一次将元素放入堆中
        for (int num : nums) {
            pq.add(num);
        }
        // 一次取出 堆 中 len - k 个元素，剩下的堆顶中的元素，就是我们需要找到的元素
        for (int i = 0; i < nums.length - k; i++) {
            pq.poll();
        }
        return pq.peek();
    }
```

### 易错点

- 易错项 1
