[题目地址](https://leetcode-cn.com/problems/palindrome-number/submissions/)

<img src="../.vuepress/public/image-20200610083622266.png" alt="image-20200610083622266" style="zoom:50%;" />



- :slightly_smiling_face: 第一次练习 2020-06-10 这可能就是持续联系的好处吧，这个题目自己 1 年做过，但是没有做出来，但是现在自己来做，一次过思路还是比较清晰的。

  <img src="../.vuepress/public/image-20200610083517593.png" alt="image-20200610083517593" style="zoom:50%;" />

- :smile: 第二次练习



### 解题方法

解题代码

```java
class Solution {
  public boolean isPalindrome(int x) {
      String s = String.valueOf(x);
      int len = s.length();

      for(int i = 0, j = len - 1; i <= j; i ++, j --) {
          if (s.charAt(i) != s.charAt(j)) {
              return false;
          }
      }
      return true;
  }
}
```



### 易错点

- 易错项 1

