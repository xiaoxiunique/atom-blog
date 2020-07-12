[题目地址](https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)



- :slightly_smiling_face: 第一次练习 2020年4月1日 这个题，没看懂题，我丢。。。。。
- :smile: 第二次练习 



### 利用栈匹配

解题代码

```java
public class Solution {
    public int[] maxDepthAfterSplit(String seq) {
        int[] ans = new int [seq.length()];
        int idx = 0;
        for(char c: seq.toCharArray()) {
            ans[idx++] = c == '(' ? idx & 1 : ((idx + 1) & 1);
        }
        return ans;
    }
}
```



### 易错点

- 能理解题目就不错了
