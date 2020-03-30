[题目地址](https://leetcode-cn.com/problems/combinations/)



- :smile: 第一次练习 2020年3月29日 咋一看这个题是一个递归题目，使用递归模板感觉思路也比较清晰，但是做的时候还是遇到一些问题，后面看了官方才知道这个题目需要用到 【回溯】 的技巧，可能是对回溯的理解还不是特别透彻，我先去理解下
- :shit: 第二次练习 



### 回溯

解题代码

```java
List<List<Integer>> output = new LinkedList<>();

int n; int k;

public List<List<Integer>> combine(int n, int k) {
    this.n = n;
    this.k = k;
    backtrack(1, new LinkedList<Integer>());
    return output;
}

private void backtrack(int first, LinkedList<Integer> curr) {
    if (curr.size() == k){
        output.add(new LinkedList<>(curr));
        return;
    }

    for(int i = first; i < n + 1; i ++) {
        // add i into the current combination
        curr.add(i);
        // use next integers to complete to combination
        backtrack(i + 1, curr);
        // backtrack
        curr.removeLast();
    }
}

```



### 易错点

- 易错项 1 
