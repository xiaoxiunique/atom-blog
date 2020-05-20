[题目地址](https://leetcode-cn.com/problems/delete-middle-node-lcci/)



- :slightly_smiling_face: 第一次练习 2020年5月20日 这个题目，玄学。。。
- :smile: 第二次练习 



解题代码

```java
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
}
```



### 易错点

- 易错项 1 
