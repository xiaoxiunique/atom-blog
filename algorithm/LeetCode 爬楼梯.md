- 😮 第一次刷题 2020年3月9日 
- :shit: 第二次刷题 2020年3月11日 相对来说还可以，下一次可以尝试一下老师的三个变量的操作方法。
- :sweat_smile: 第三次刷题 2020年3月29日 记得到了，不过还是没有用三个变量的方法，可能还是因为懒吧。
- :smile: 第二次刷题 2020年4月18日 一个月后再次遇到这个题，成功三个变量的方式，以前用这种方式还有点绕，现在感觉很简单了，可能这就是在进步吧。



:::tip

这题以前做过，现在在做的时候还是比较容易:ox::beer:

:::



### 递归解法

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



### 保存中间变量求解

```java
public int climbStairs(int n) {
    if (n <= 2)
        return n;

    int i = 1, j = 2, cur = 0;
    for(int k = 2; k < n ; k ++) {
        cur = i + j;
        i = j;
        j = cur;
    }
    return cur;
}
```

