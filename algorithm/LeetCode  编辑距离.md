[题目地址](https://leetcode-cn.com/problems/edit-distance/)



- :slightly_smiling_face: 第一次练习 2020年4月6日 动态规划的题，还没学到那里去，太难了。我丢。。。。直接看[题解](https://leetcode-cn.com/problems/edit-distance/solution/dong-tai-gui-hua-java-by-liweiwei1419/)
- :smile: 第二次练习 



### 动态规划

[优秀题解](https://labuladong.gitbook.io/algo/dong-tai-gui-hua-xi-lie/bian-ji-ju-li)

解题代码 

```java
public int minDistance(String word1, String word2) {
    char[] word1Array = word1.toCharArray();
    char[] word2Array = word2.toCharArray();

    int len1 = word1Array.length;
    int len2 = word2Array.length;

    // 多开一行一列是为了保存边界条件，即字符长度为 0 的情况，这一点在字符串的动态规划问题中比较常见
    int[][] dp = new  int[len1 + 1][len2 + 1];

    // 初始化：当 word 2 长度为 0 时，将 word1 的全部删除
    for(int i = 1; i <= len1; i ++) {
        dp[i][0] = i;
    }

    // 当 word1 长度为 0 时，就插入所有 word2 的字符
    for(int j = 1; j <= len2; j ++) {
        dp[0][j] = j;
    }

    for (int i = 0; i < len1; i++) {
        for (int j = 0; j < len2; j++) {
            // 这是最佳情况
            if (word1Array[i] == word2Array[j]) {
                dp[i + 1][j + 1] = dp[i][j];
                continue;
            }

            // 否则在以下三种情况中选出步骤最少的，这是「动态规划」的「最优子结构」
            // 1、在下标 i 处插入一个字符
            int insert = dp[i + 1][j] + 1;
            // 2、替换一个字符
            int replace = dp[i][j] + 1;
            // 3、删除一个字符
            int delete = dp[i][j + 1] + 1;

            dp[i + 1][j + 1] = Math.min(Math.min(insert, replace), delete);
        }
    }

    return dp[len1][len2];
}
```



### 易错点

- 易错项 1 
