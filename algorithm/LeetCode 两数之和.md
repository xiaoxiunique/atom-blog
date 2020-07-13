[题目地址](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)



- 😨 第一次刷题 2020年3月10日
- 😜 第二次刷题 2020年3月11日
- :grin: 第三次刷题 2020年3月17日 还是能记住，现在，知道思路基本就有解。



### **利用 hash 表存储值和索引**

::: warning

以前练习的时候做过，结果现在记不到了💩

:::

```javascript

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(target - nums[i], i);
  }

  return [];
};
```



### 问题集锦

- 在每次的向 Hash 表中添加元素时，不需要再 else 中的逻辑写。直接在 循环的最后写就好

  **推荐写法**

  
