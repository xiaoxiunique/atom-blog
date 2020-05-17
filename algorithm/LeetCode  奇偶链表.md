[题目地址](https://leetcode-cn.com/problems/odd-even-linked-list/)



- :slightly_smiling_face: 第一次练习 2020年5月11日  其实就真的向老师说的那样，链表的问题就是需要多练习，没有什么其他的捷径
- :smile: 第二次练习 



### 这应该算双指针

[优秀题解](https://leetcode-cn.com/problems/odd-even-linked-list/solution/qi-ou-lian-biao-by-leetcode/)

解题代码

```java
    public ListNode oddEvenList(ListNode head) {
        if (head == null) {
            return null;
        }

        ListNode odd = head, even = head.next, evenHead = even;
        while(even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;

        return head;
    }
```



### 易错点

- 感觉想法非常牛逼
