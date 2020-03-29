[题目地址](https://leetcode-cn.com/problems/majority-element/)



- :slightly_smiling_face: 第一次练习 2020年3月29日 这个题，看着可以用简单的方法来做，但是其实可以有很多种其他的解法，这里有用了最简单的解法了
- :smile: 第二次练习 



### 利用 Hash 表

解题代码

```java
public int majorityElement(int[] nums) {
    Map<Integer, Integer> counter = new HashMap<>();
    // 遍历每个数统计次数
    for (int num : nums) {
        counter.put(num, counter.getOrDefault(num, 0) + 1);
        // 如果某个数大于了 n / 2 就返回
        if (counter.get(num) > nums.length / 2) {
            return num;
        }
    }

    return -1;
}
```



### 排序

[官方题解](https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/)，感觉很清奇

```java
class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[nums.length/2];
    }
}
```



### 分治

分治现在不太熟悉，这里为[官方解法](https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/)

```java
class Solution {
    private int countInRange(int[] nums, int num, int lo, int hi) {
        int count = 0;
        for (int i = lo; i <= hi; i++) {
            if (nums[i] == num) {
                count++;
            }
        }
        return count;
    }

    private int majorityElementRec(int[] nums, int lo, int hi) {
        // base case; the only element in an array of size 1 is the majority
        // element.
        if (lo == hi) {
            return nums[lo];
        }

        // recurse on left and right halves of this slice.
        int mid = (hi-lo)/2 + lo;
        int left = majorityElementRec(nums, lo, mid);
        int right = majorityElementRec(nums, mid+1, hi);

        // if the two halves agree on the majority element, return it.
        if (left == right) {
            return left;
        }

        // otherwise, count each element and return the "winner".
        int leftCount = countInRange(nums, left, lo, hi);
        int rightCount = countInRange(nums, right, lo, hi);

        return leftCount > rightCount ? left : right;
    }

    public int majorityElement(int[] nums) {
        return majorityElementRec(nums, 0, nums.length-1);
    }
}
```



### 易错点

- 易错项 1 
