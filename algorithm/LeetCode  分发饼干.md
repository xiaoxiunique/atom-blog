[题目地址](https://leetcode-cn.com/problems/assign-cookies/)



- :slightly_smiling_face: 第一次练习 2020年4月3日 这个题的话，就直接记住吧，也是属于一种贪心

	<img src="../.vuepress/public/ceeb653ely1fpwht346ksg206o06otao.gif" alt="ceeb653ely1fpwht346ksg206o06otao" style="zoom:50%;" />

- :smile: 第二次练习 



### 贪心

解题代码

```java
public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(g);
    Arrays.sort(s);
    int child = 0; int cookie = 0;
    while(child < g.length && cookie < s.length) {
        if (g[child] <= s[cookie])
            ++child;
        ++cookie;
    }
    return child;
}
```



### 易错点

- 易错项 1 
