[题目地址](https://leetcode-cn.com/problems/sqrtx/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 我感觉这个题还是需要对一些数学上的概念需要理解。
- :smile: 第二次练习 2020年5月9日 五毒第二遍，现在还是比较理解了。。。不过还是不是很细心。我丢。。。。



### 二分查找

解题代码

```java
public int mySqrt(int x) {
    if (x < 2)
        return x;
    long num;
    int pivot, left = 2, right = x / 2;
    while(left <= right) {
        pivot = left + (right - left) / 2;
        num = (long) pivot * pivot;
        if (num > x)
            right = pivot - 1;
        else if (num < x)
            left = pivot + 1;
        else
            return pivot;
    }
    return right;
}
```



### 易错点

- 易错项 1 
