[题目地址](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)



- :slightly_smiling_face: 第一次练习 2020.04.28 这个题目现在还理解不太到，主要是对一些基础的二进制的补码之类的只是忘记，后台结合着位运算和相关基础知识复习了之后在回过头来做一下

  

- :smile: 第二次练习 



### 位运算

解题代码

```java
class Solution {
    public int[] singleNumbers(int[] nums) {
        int xor = 0, len = nums.length;
        for (int num : nums)
            xor ^= num;
        int diff = xor & (-xor);
        int x = 0;
        for (int num : nums) {
            if ((diff & num) != 0)
                x ^= num;
        }
        return new int[]{x, xor ^ x};
    }
}
```



### 易错点

- 易错项 1 
