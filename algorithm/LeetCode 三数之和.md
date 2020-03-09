LeetCode 三数之和

2020年3月9日00:37:14

https://leetcode-cn.com/problems/3sum/submissions/

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];

    if (nums.length < 3) 
        return result;

    nums.sort((x, y) => x - y);
    for (let i = 0; i < nums.length - 1; i ++) {
        if (nums[i] > 0) 
            break;

        if (i > 0 && nums[i] == nums[i - 1])
            continue;

        let l = i + 1, r = nums.length - 1;

        while(l < r) {
            let sum = nums[l] + nums[r] + nums[i];

            if (sum == 0) {
                result.push([nums[i], nums[l], nums[r]]);
                
                while(l < r && nums[l] == nums[l + 1])
                    l ++;
                while(l < r && nums[r] == nums[r - 1])
                    r --;
                l ++;
                r --;
            } else if (sum > 0) 
                r --;
            else if (sum < 0) 
                l ++;
        }

    }

    return result;

};
```





2020年3月9日13:05:43

```javascript

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  if (nums.length < 3) {
    return result;
  }

  nums.sort((x, y) => x - y);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }

    // 排重
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        result.push([nums[i], nums[l], nums[r]]);

        while (l < r && nums[l] == nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      }
    }
  }
  return result;
};
```

