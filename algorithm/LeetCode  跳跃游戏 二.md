[题目地址](https://leetcode-cn.com/problems/jump-game-ii/)



- :slightly_smiling_face: 第一次练习 2020年4月4日 感觉解法只是在 [跳跃游戏](https://leetcode-cn.com/problems/jump-game/) 基础上做了一下小的改变。先记住吧
- :smile: 第二次练习 2020年4月12日 算是理解了
- 😡 第三次练习 2020年 5月4日 每日一题联系，个人感觉现在自己的这种做题方式不行，这个就像这个题，太久没做，都忘得差不多了。得想想办法才行哟



解题代码

```java
public int jump(int[] nums) {
    if (nums == null)
        return 0;

    int ans = 0, start = 0, end = 1;
    while(end < nums.length) {
        int maxPos = 0;
        for (int i = start; i < end; i++) {
            // 能跳到的最远距离
            maxPos = Math.max(maxPos, i + nums[i]);
        }
        start = end; end = maxPos + 1; ++ans;
    }
    return ans;
}
```



### 易错点

- ==易错项==1 
