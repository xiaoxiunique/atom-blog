[题目地址](https://leetcode-cn.com/problems/sliding-window-maximum/)



- :slightly_smiling_face: 第一次练习  2020年3月17日 暴力大发好:ox::beers:
- :shit: 第二次练习  2020年3月28日 相隔 10 天再来回顾，使用双端循环队列的方式来求解。看了题解，整个人都是晕的。先记录下吧



### 暴力大发

解题代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) {
        return [];
    }

    let arr = [];
    // 暴力
    for (let i = 0 ; i <= nums.length - k; i ++) {
        let max = -Number.MAX_VALUE;
        for (let j = i; j < i + k; j ++) {
            max = Math.max(max, nums[j]);
        }
        arr.push(max);
    }

    return arr;
};
```





### 双端队列

```java
{

    ArrayDeque<Integer> dep = new ArrayDeque<>();
    int[] nums;

    public int[] maxSlidingWindow(int[] nums, int k) {
        int len = nums.length;
        if (len * k == 0) {
            return new int[0];
        }
        if (k == 1) {
            return nums;
        }

        // Init deque and output
        this.nums = nums;
        int max_idx = 0;
        for (int i = 0; i < k; i++) {
            clean_queue(i, k);
            dep.addLast(i);
            // compute max in nums[:k]
            if (nums[i] > nums[max_idx]) {
                max_idx = i;
            }
        }

        int[] output = new int[len - k + 1];
        output[0] = nums[max_idx];

        // build output
        for (int i = k; i < len; i++) {
            clean_queue(i, k);
            dep.addLast(i);
            output[i - k + 1] = nums[dep.getFirst()];
        }

        return output;
    }

    private void clean_queue(int i, int k) {
        if (!dep.isEmpty() && dep.getFirst() == i - k) {
            dep.removeFirst();
        }

        // remove from dep indexes of all elements
        // while are smaller than current element nums[i]
        while(!dep.isEmpty() && nums[i] > nums[dep.getLast()]) {
            dep.removeLast();
        }
    }
}
```



### 易错点

- 注意边界情况 判断

  ```javascript
  if (nums.length === 0 || k === 0) {
  	return [];
  }
  ```

  
