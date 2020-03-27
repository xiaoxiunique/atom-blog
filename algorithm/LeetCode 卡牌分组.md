[题目地址](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)



- 😣 第一次练习 2020年3月27日 最开始自己按照自己的思路做，以为这个题还是比较简单的，结果还是太年轻了

	做题和做程序差不多，其实也需要考虑到很多的异常情况，需要去处理。不然就会出现所谓的 Bug

- :shit: 第二次练习 



### 最大公约数求

解题代码

```java
 public boolean hasGroupsSizeX(int[] deck) {
     int[] count = new int[10000];
     for (int i : deck) {
         count[i] ++;
     }

     int g = -1;
     for(int i = 0; i < 10000; ++ i) {
         if (count[i] > 0) {
             if (g == -1)
                 g = count[i];
             else
                 g = gcd(g, count[i]);
         }
     }
     return g >= 2;
 }

public int gcd(int x, int y) {
    return x == 0 ? y : gcd(y % x, x );
}
```



### 易错点

- 思想很重要有挺多的自己没考虑到的异常情况
