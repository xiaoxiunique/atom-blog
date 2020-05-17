[题目地址](https://leetcode-cn.com/problems/remove-linked-list-elements/submissions/)



- :slightly_smiling_face: 第一次练习 2020年5月11日 这个题目两年前做过，看了以前的代码，卧槽。。递归真的无敌。。。。。
- :smile: 第二次练习 



### 递归

解题代码

```java
public ListNode removeElements(ListNode head, int val) {
    if (head == null) {
        return null;
    }

    ListNode res = removeElements(head.next, val);
    if (head.val == val) {
        return res;
    } else {
        head.next = res;
        return head;
    }
}
```



### 易错点

- 易错项 1 
