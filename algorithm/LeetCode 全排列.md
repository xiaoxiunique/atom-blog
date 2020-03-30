[题目地址](https://leetcode-cn.com/problems/permutations/)



- :smile: 第一次练习 2020年3月29日 排列其实和组合差不多，都需要用到回溯的思想
- :shit: 第二次练习 



### 回溯

解题代码

```java
private List<List<Integer>> retList;
public List<List<Integer>> permute(int[] nums) {
    retList = new LinkedList<>();
    backtrack(nums, new LinkedList<Integer>());
    return retList;
}

private void backtrack(int[] nums, LinkedList<Integer> curList) {
    if (curList.size() == nums.length) {
        retList.add(new LinkedList<>(curList));
        return;
    }

    for (int i = 0; i < nums.length; i++) {
        if (curList.contains(nums[i]))
            continue;

        curList.add(nums[i]);
        backtrack(nums, curList);
        curList.removeLast();
    }
}

```



### 易错点

- 需要注意，排重情况

	```java
	if (curList.contains(nums[i]))
		continue;
	```

	
