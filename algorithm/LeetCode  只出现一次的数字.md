[题目地址](https://leetcode-cn.com/problems/single-number/)



- :slightly_smiling_face: 第一次练习 2020年5月14日 这个题目两年前做过一次，现在又来做，结合位运算，自己的理解还是会加深一些

  

- :smile: 第二次练习 



### 位运算

解题代码

```java
class Solution {
    public int singleNumber(int[] nums) {
        int ret = 0;
        for(int i = 0 ;i < nums.length ; i ++) {
            ret = ret ^ nums[i];
        }
        return ret;
    }
}
```



### 易错点

- 易错项 1 
