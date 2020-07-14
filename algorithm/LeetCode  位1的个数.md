[题目地址](https://leetcode-cn.com/problems/number-of-1-bits/)



- :slightly_smiling_face: 第一次练习 2020年5月8日 五毒吧。核心的位运算是 n & n - 1 是每次去除最后一个 0
- :smile: 第二次练习 



### 位运算

解题代码

```java
public int hammingWeight(int n) {
    int cnt = 0;
    while(n != 0) {
        n = n & (n - 1);
        cnt ++;
    }
    return cnt;
}
```



### 易错点

- 易错项 1 
