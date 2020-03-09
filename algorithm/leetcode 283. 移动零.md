###  两次循环

2020年3月8日23:20:44

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0; 
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] != 0) {
            nums[index ++] = nums[i];
        }
    }

    while(index < nums.length) {
        nums[index ++] = 0;
    }
};
```



### 双指针解法

2020年3月8日23:30:28

定义两个指针i，j，然后遍历数组，i跟j同时往前走，当遇到0时j停下，i继续往前走。当nums[i]不为0时则将num[i]的元素赋给j的位置，j++，nums[i]被赋值为0

```javascript
var moveZeroes = function(nums) {
    // 双指针 i, j
    let j = 0; 
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] != 0) {
            if (i != j) {
                nums[j] = nums[i];
                nums[i] = 0;
            }
            j ++;
        }
    }
};
```





### 双指针

2020年3月9日12:42:27

```javascript
var moveZeroes = function(nums) {
  // 一次循环完成

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i != j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
  }
};
```



### 两次循环

```javascript
var moveZeroes = function(nums) {
  // 双重循环

  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[index++] = nums[i];
    }
  }

  while (index < nums.length) {
    nums[index++] = 0;
  }
};
```

