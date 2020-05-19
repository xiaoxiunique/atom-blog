[题目地址](https://leetcode-cn.com/problems/reverse-linked-list-ii/)



- :slightly_smiling_face: 第一次练习 2020年5月19日 我只想说，这个题目的递归写法还是比较难理解，有点伤头。。。
- :smile: 第二次练习 



### 递归

解题代码

```java
class Solution {
    ListNode successor = null;

    public ListNode reverseBetween(ListNode head, int m, int n) {
        if (m == 1) {
            return reverseN(head, n);
        }

        // 前进到反转的起点触发 base case
        head.next = reverseBetween(head.next, m - 1, n - 1);
        return head;
    }

    public ListNode reverseN(ListNode head, int n) {
        if (1 == n) {
            successor = head.next;
            return head;
        }

        // 以 head.next 为起点，需要翻转前 n - 1 个节点
        ListNode last = reverseN(head.next, n - 1);
        head.next.next = head;
        // 让翻转后的 head 节点 后和后面的节点连起来
        head.next = successor;
        return last;
    }
}
```



### 易错点

- 易错项 1 
