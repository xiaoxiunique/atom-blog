[题目地址](https://leetcode-cn.com/problems/permutations/)



- :slightly_smiling_face: 第一次练习 2020.04.25 这个题目给我的感觉是非常的熟悉，但是还是没有想起来，这就是五毒没有做的原因吧。

  [优秀题解](https://leetcode-cn.com/problems/permutations/solution/hui-su-suan-fa-xiang-jie-by-labuladong-2/)

- :smile: 第二次练习 



### 回溯算法

解题代码

```java
List<List<Integer>> retList = new LinkedList<>();

public List<List<Integer>> permute(int[] nums) {
    LinkedList<Integer> track = new LinkedList<>();
    backtrack(track, nums);
    return retList;
}

private void backtrack(LinkedList<Integer> track, int[] nums) {
    if (track.size() == nums.length) {
        retList.add(new LinkedList<>(track));
        return;
    }

    for (int i = 0; i < nums.length; i++) {
        // 排除不合法的选择
        if (track.contains(nums[i])) {
            continue;
        }
        // 做选择
        track.add(nums[i]);
        // 进入下一层
        backtrack(track, nums);
        // 取消选择
        track.removeLast();
    }
}

```



### 易错点

- 需要注意，最后元素满的时候，是 `new LinkedList<>(track)` 
