[题目地址](https://leetcode-cn.com/problems/string-to-integer-atoi/)



- :slightly_smiling_face: 第一次练习 2020年4月3日 查看提交记录，这个题。在两年前最开始学习数据结构的时候就做过。叼。。。。

  <img src="../.vuepress/public/ceeb653ely1g08lm6t8xwg20dc0abmxe.gif" alt="asdfasdf" style="zoom:80%;" />

- :smile: 第二次练习 



1. 先去除空格，后判断是否为空
2. 记录符号是正数还是负数，记录第一个数是否为符号数，记录开始位置
3. 循环字符串，发现不是数字的时候计算总和，如果比最大还打 就返回最大



解题代码

```java
public int myAtoi(String str) {
    if (str == null || str.length() == 0)
        return 0;
    str = str.trim();
    if (str == null || str.length() == 0)
        return 0;

    char firstChar = str.charAt(0);
    int sign = 1, start = 0, len = str.length();
    long sum = 0;
    if (firstChar == '+')
        ++start;
    if (firstChar == '-') {
        ++start;
        sign = -1;
    }

    for(int i = start; i < len; ++ i) {
        // 如果发现当前字符不是数字，计算结果并退出
        if (!Character.isDigit(str.charAt(i)))
            return (int) (sum * sign);

        // 这里有点叼。。。
        sum = sum * 10 + str.charAt(i) - '0';
        if (sign == 1 && sum > Integer.MAX_VALUE)
            return Integer.MAX_VALUE;
        if (sign == -1 && -1 * sum < Integer.MIN_VALUE)
            return Integer.MIN_VALUE;
    }
    return (int) (sign * sum);
}
```



### 易错点

- 易错项 1 
