[题目地址](https://leetcode-cn.com/problems/happy-number/)



- :slightly_smiling_face: 第一次练习 2020年4月30日 这个题，有点牛逼，抽象为一个循环链表问题
- :smile: 第二次练习 



### 双指针

解题代码

```java
public int getNext(int n) {
    int totalSum = 0;
    while(n > 0) {
        int d = n % 10;
        n = n / 10;
        totalSum += d*d;
    }
    return totalSum;
}


public boolean isHappy(int n) {
    int slow = n;
    int fast = getNext(n);
    while(fast != 1 && slow != fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
}
```



### 易错点

- 主要是想不到
