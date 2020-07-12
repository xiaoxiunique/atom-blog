[题目地址](https://leetcode-cn.com/problems/decode-string/)



- :slightly_smiling_face: 第一次练习 2020.05.28 第一次联系。有思路，但是代码不太会写
- :smile: 第二次练习 



### 栈

解题代码， 其实看到这个题目还是知道要借助栈来解决问题。也大概知道需要控制 `[ ]`但是等道真正编码实现的时候，才会发现。有思路和能够真正写出来，还是两个世界。

时间复杂度:  O(n) 虽然有内存循环控制添加重复次数，但是整体来说依然是 O(n) 的时间复杂度  

空间复杂度：O(n) 用了两个辅助栈。

```java
public String decodeString(String s) {
        StringBuilder res = new StringBuilder();
        int multi = 0;
        LinkedList<Integer> stack_multi = new LinkedList<>();
        LinkedList<String> stack_res = new LinkedList<>();

        for (char c : s.toCharArray()) {
            if (c == '[') {
                stack_multi.addLast(multi);
                stack_res.add(res.toString());
                multi = 0;
                res = new StringBuilder();
            } else if (c == ']') {
                StringBuilder tmp = new StringBuilder();

                int cur_multi = stack_multi.removeLast();
                for (int i = 0; i < cur_multi; i++)
                    tmp.append(res);

                res = new StringBuilder(stack_res.removeLast() + tmp);
            } else if (c >= '0' && c <= '9') {
                multi = multi * 10 + Integer.parseInt(c + "");
            } else {
                res.append(c);
            }
        }
        return res.toString();
    }
```



### 易错点

- 易错项 1 
