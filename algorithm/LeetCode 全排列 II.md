[题目地址](https://leetcode-cn.com/problems/permutations-ii/)



- :smile: 第一次练习 2020年3月29日 变形版的全排序，还是要难很多，直接看的[题解](https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/#comment)， 有的地方还是没有理解到
- :shit: 第二次练习 



### 回溯

解题代码

```java
public List<List<Integer>> permuteUnique(int[] nums) {
    int len = nums.length;
    List<List<Integer>> res = new ArrayList<>();
    if (len == 0) {
        return res;
    }

    // 排序，排序是剪枝的前提
    Arrays.sort(nums);
    boolean[] used = new boolean[len];

    Deque<Integer> path = new ArrayDeque<>(len);
    dfs(nums, len, 0, used, path, res);
    return res;
}

private void dfs(int[] nums, int len, int depth, boolean[] used, Deque<Integer> path, List<List<Integer>> res) {
    if (depth == len) {
        res.add(new ArrayList<>(path));
    }

    for(int i = 0 ; i < len; i ++) {
        if (used[i]) {
            continue;
        }

        if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
            continue;
        }

        path.addLast(nums[i]);
        used[i] = true;
        dfs(nums, len, depth + 1, used, path, res);
        
        used[i] = false;
        path.removeLast();
     }
}

```



### 易错点

