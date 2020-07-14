[题目地址](https://leetcode-cn.com/problems/3sum-closest/)



- :slightly_smiling_face: 第一次练习 2020-06-24 和三数之和有点类似，双指针
- :smile: 第二次练习



### 双指针

解题代码

```java
class Solution {
    /**
     * 1. 先将数组排序
     * @param nums
     * @param target
     * @return
     */
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int ans = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < nums.length; i++) {
            int start = i + 1, end = nums.length - 1;
            while(start < end) {
                int sum = nums[start] + nums[end] + nums[i];
                if (Math.abs(target - sum) < Math.abs(target - ans)) {
                    ans = sum;
                }

                if (sum > target) {
                    end --;
                } else if(sum < target) {
                    start ++;
                } else {
                    return ans;
                }
            }
        }

        return ans;
    }
}
```



### 易错点

- 易错项 1

