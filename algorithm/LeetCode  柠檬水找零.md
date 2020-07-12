[题目地址](https://leetcode-cn.com/problems/lemonade-change/)



- :slightly_smiling_face: 第一次练习 2020年4月3日 自己没啥思路，看了题解秒懂，想的太复杂了，我丢。。。。

	<img src="../.vuepress/public/LeetCode  柠檬水找零/006APoFYly1fkekgm14uag308c08c75j.gif" alt="adf" style="zoom:50%;" />

- :smile: 第二次练习 



### 贪心

解题代码

```java
public boolean lemonadeChange(int[] bills) {
    int five = 0; int ten = 0;
    for (int bill : bills) {
        if (bill == 5) {
            ++five;
        } else if (bill == 10) {
            if (five == 0)
                return false;
            --five;
            ++ten;
        } else {
            if (five > 0 && ten > 0) {
                --five;
                --ten;
            } else if (five > 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}
```



### 易错点

- 易错项 1 
