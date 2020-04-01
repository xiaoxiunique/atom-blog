[题目地址](https://leetcode-cn.com/problems/minimum-genetic-mutation/)



- :slightly_smiling_face: 第一次练习 2020年4月1日 这个题都没看懂，我丢。。。
- :smile: 第二次练习 



### 解题方法



解题代码

```java
int minStepCount = Integer.MAX_VALUE;
public int minMutation(String start, String end, String[] bank) {
    dfs(new HashSet<String>(), 0, start, end, bank);
    return (minStepCount == Integer.MAX_VALUE) ? -1 : minStepCount;
}

private void dfs(HashSet<String> step, int stepCount, String current, String end, String[] bank) {
    if (current.equals(end))
        minStepCount = Math.min(stepCount, minStepCount);

    for (String str : bank) {
        int diff = 0;
        for(int i = 0; i < str.length(); i ++) {
            if (current.charAt(i) != str.charAt(i))
                if (++diff > 1) break;
        }

        if (diff == 1 && !step.contains(str)) {
            step.add(str);
            dfs(step, stepCount + 1, str, end, bank);
            step.remove(str);
        }
    }
}

```



### 易错点

- 
