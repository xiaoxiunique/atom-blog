[题目地址](https://leetcode-cn.com/problems/generate-parentheses/)



- :slightly_smiling_face: 第一次练习 2020年3月29日 这个是听了课之后再做的，这时候思路还是比较清晰，这种递归性质的可以参考递归模板进行求解
- :smile: 第二次练习 2020年4月1日 第二次做的时候，还是忘记了很多了，不过整体看了一下以前写的，还是能够很快回顾过来。孰能生巧

![image-20200329023623771](https://gitee.com/xiaoxiunique/picgo-image/raw/master/image-20200329023623771.png)

### 递归

解题代码

```java
{
    private List<String> retList;

    public List<String> generateParenthesis(int n) {
        retList = new ArrayList<>();
        generate(0, 0, n, "");
        return retList;
    }

    private void generate(int left, int right, int n, String s) {
        // terminator
        if (left == n && right == n) {
            retList.add(s);
            return;
        }
        // process current logic

        // drill down
        if (left < n) {
            generate(left + 1, right, n, s + "(");
        }
        if (left > right) {
            generate(left, right + 1, n, s + ")");
        }
        // reverse
    }

}
```



### 易错点

- 递归四个步骤
	
	- terminator
	- process current logic
	- drill down
	- reverse

- 递归终止条件是 左括号的个数 = n 和 右括号的个数 = n