[题目地址](https://leetcode-cn.com/problems/jump-game/)



- :slightly_smiling_face: 第一次练习 2020年4月4日 这个题目看过老师的讲解，还是比较可以。用贪心，确实比较巧妙
- :smile: 第二次练习  2020年4月17日 第二次练习，还是能记得贪心的大概思路，不过 需要注意边界条件判断问题



### 贪心算法

解题代码

```java
public boolean canJump(int[] nums) {
    if (nums == null)
        return false;

    int endReachable = nums.length - 1;
    for(int i = nums.length - 1; i >= 0; i --)
        if (nums[i] + i >= endReachable)
            endReachable = i;
    return endReachable == 0;
}
```



老师讲的另一种解法，自己实现

- 用一个状态位记录当前位置是否可达，而后循环当前位置的值持续向后标记

```java
public boolean canJump(int[] nums) {
    if (nums == null)
        return false;

    boolean[] markList = new boolean[nums.length];
    markList[0] = true;
    for (int i = 0; i < nums.length; i++) {
        if (!markList[i])
            continue;
        for (int j = i; j <= i + nums[i]; j++) {
            if (j == nums.length)
                break;
            markList[j] = true;
        }
    }
    return markList[nums.length - 1];
}
```



### 易错点

- 边界条件判断
