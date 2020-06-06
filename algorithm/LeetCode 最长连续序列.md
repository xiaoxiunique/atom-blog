[题目地址](https://leetcode-cn.com/problems/longest-consecutive-sequence/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china)



- :slightly_smiling_face: 第一次练习 2020-06-06 自己想到的是结合 hash + 滑动窗口来做。但是看了官方的题解。 官方的题解确实更加精妙一点。:cow::beers:
- :smile: 第二次练习



### 解题方法

[解题代码](https://leetcode-cn.com/problems/longest-consecutive-sequence/solution/zui-chang-lian-xu-xu-lie-by-leetcode-solution/)

```java
class Solution {
    public int longestConsecutive(int[] nums) {
        HashSet hash = new HashSet();
        for (int num : nums) {
            hash.add(num);
        }

        int max = 0;
        for (int num : nums) {
            if (hash.contains(num - 1)) {
                continue;
            }

            int curMax = 1;
            int curNum = num;
            while(hash.contains(curNum + 1)) {
                curMax ++;
                curNum ++;
            }
            max = Math.max(curMax, max);
        }

        return max;
    }

}
```



### 易错点

- 易错项 1

