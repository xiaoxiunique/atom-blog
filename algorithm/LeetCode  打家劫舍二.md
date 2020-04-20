[题目地址](https://leetcode-cn.com/problems/house-robber-ii/)



- :slightly_smiling_face: 第一次练习 2020年4月20日 这个题，自己之前在一年前做过，还是算比较巧妙的吧。
- :smile: 第二次练习 



### 动态规划

因为题目是一个环状，所以此时会附加一个额外的条件，就是头尾不能同时打家劫舍，所以只需要判断偷第一家和不偷第一家的值，谁最大就好啦

解题代码

```java
public int rob(int[] nums) {
    if (nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }

    return Math.max(rec_rob(nums, 0), rec_rob(nums, 1));
}

public int rec_rob(int[] nums, int index) {
    int[] arr = new int[nums.length - 1];
    arr[0] = nums[index];
    arr[1] = Math.max(nums[index], nums[index + 1]);
    for (int i = 2; i < arr.length; i++) {
        arr[i] = Math.max(nums[index + i] + arr[i - 2], arr[i - 1]);
    }
    return arr[nums.length - 2];
}

```



### 易错点

- 易错项 1 
