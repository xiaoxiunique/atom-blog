[题目地址](https://leetcode-cn.com/problems/sliding-window-maximum/)



- :slightly_smiling_face: 第一次练习  2020年3月17日 暴力大发好:ox::beers:
- :shit: 第二次练习 



### 解题方法



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



### 易错点

- 注意边界情况 判断

  ```javascript
  if (nums.length === 0 || k === 0) {
  	return [];
  }
  ```

  
