[题目地址](https://leetcode-cn.com/problems/powx-n/)



- :slightly_smiling_face: 第一次练习 2020.05.11 本来以为这个题目做过的，结果以前没做过。分治大法好，太强了
- :smile: 第二次练习 



### 分治

解题代码

```java
public double myPow(double x, int n) {
    if (n == 0) {
        return 1;
    }

    double v = divideGenerate(x, Math.abs((long) n));
    return n > 0 ? v : 1 / v;
}

private double divideGenerate(double x, long n) {
    // terminator
    if (n < 2) {
        return x;
    }

    // 处理子问题
    double sub = divideGenerate(x, n / 2);
    double sum = sub * sub;
    return (n & 1) != 1 ? sum : sum * x;
}
```



### 易错点

- 易错项 1 
