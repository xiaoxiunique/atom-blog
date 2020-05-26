[题目地址](https://leetcode-cn.com/problems/find-the-duplicate-number/)



- :slightly_smiling_face: 第一次练习 2020.05.26 肯定是这题太简单了,自己一下就做出来了.....​ :cow::beer:
- :smile: 第二次练习 



### Hash 表

解题代码

```java
class Solution {
    public int findDuplicate(int[] nums) {
        int n = nums.length;
        int[] aux = new int[n];

        for (int i = 0; i < nums.length; i++) {

            if (aux[nums[i]] != 0) {
                return nums[i];
            }

            aux[nums[i]] ++;
        }
        return -1;
    }
}

```





### 二分法

这里的二分法 虽然时间效率上还是挺低的,但是这种思路,是特别精妙的

```java
    public int findDuplicate(int[] nums) {
        int n = nums.length;
        int left = 1;
        int right = n - 1;

        while(left < right) {
            int mid = (left + right) >>> 1;
            int cnt = 0;

            for(int num: nums)
                if (num <= mid)
                    cnt ++;

            // 根据抽屉原理，小于等于 4 的个数如果严格大于 4 个
            // 此时重复元素一定出现在 [1, 4] 区间里
            if (cnt > mid) {
                // 重复数据位于 [left, right]
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
```



### 易错点

- 易错项 1 
