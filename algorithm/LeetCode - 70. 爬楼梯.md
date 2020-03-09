- 动态规划

### 递归解法

2020年3月9日00:07:06

超出时间限制

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // recursive
    if (n == 1 || n == 2) {
        return n;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
};
```



### 通过数组模拟递归

2020年3月9日00:07:09

数组的每项，相当于缓存值

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // recursive
    let arr = [1, 2];
    for(let i = 2; i < n; i ++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};
```



2020年3月9日12:52:42

```javascript
var climbStairs = function(n) {
  let arr = [1, 2];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n - 1];
};
```

