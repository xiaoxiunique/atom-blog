[题目地址](https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/)



- :slightly_smiling_face: 第一次练习 2020-06-01 题目简单，还是比较好理解
- :smile: 第二次练习



### 解题方法

时间复杂度：O(N) 

空间复杂度：O(N)

```java
class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> res = new ArrayList<>();

        int max = findMax(candies);
        for (int i = 0; i < candies.length; i++) {
            res.add(candies[i] + extraCandies >= max);
        }

        return res;
    }

    public int findMax(int[] candies) {
        int max = 0;
        for (int i = 0; i < candies.length; i++)
            max = Math.max(max, candies[i]);
        return max;
    }
}
```



### 易错点

- 易错项 1

