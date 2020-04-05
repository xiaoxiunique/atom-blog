[题目地址](https://leetcode-cn.com/problems/trapping-rain-water/)



- 😣 第一次练习 2020年3月23日 这个题，还是没啥思路的，按照题解的暴力解法解出来后还是没有什么思路，这个题目的难度为困难，希望等到后面再回过头来看，能有一个比较好的理解
- :smile: 第二次练习 2020年4月4日 再次来根据暴力法的思路来解决，感觉理解起来便容易了。





### 暴力法



```java
class Solution {
    public int trap(int[] height) {
        int ret = 0, size = height.length;

        for(int i = 1; i < size - 1; i ++) {
            int maxLeft = 0, maxRight = 0;
            for (int j = i; j >= 0; j --) {
                maxLeft = Math.max(maxLeft, height[j]);
            }
            for (int j = i; j < size; j ++) {
                maxRight = Math.max(maxRight, height[j]);
            }
            ret += Math.min(maxRight, maxLeft) - height[i];
        }
        return ret;
    }
}
```



### 动态规划

### 利用栈



### 易错点

- 循环中需要注意的点还是挺过的，边界问题。
