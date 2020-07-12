[题目地址](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)



- :slightly_smiling_face: 第一次练习 2020-06-28 滑动窗口的典型题目了，看到连续，最小。
- :smile: 第二次练习



### 滑动窗口

时间复杂度：O(n)

空间复杂度：O(1)

```java
 /**
     * 长度最小的子数组, 滑动窗口求解
     * @param s
     * @param nums
     * @return
     */
    public int minSubArrayLen(int s, int[] nums) {
        int n = nums.length;
        if (n == 0) {
            return 0;
        }

        int left = 0;
        int right = 0;
        int sum = 0;
        int min = Integer.MAX_VALUE;

        while(right < n) {
            sum += nums[right];
            right ++;

            while(sum >= s) {
                min = Math.min(min, right - left);
                sum -= nums[left];
                left ++;
            }
        }

        return min == Integer.MAX_VALUE ? 0 : min;
    }
```



### 易错点

- 易错项 1

