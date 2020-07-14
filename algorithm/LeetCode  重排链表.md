[题目地址](https://leetcode-cn.com/problems/reorder-list/)



- :slightly_smiling_face: 第一次练习 2020年5月20日 这个题目还是比较有意思，基础操作的组合
- :smile: 第二次练习 



### 基础操作组合

解题代码

```java
class Solution {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) {
            return;
        }

        /**
         * 1: double point -> find mid
         * 2: reverse right listnode
         * 3: merge listnode
         */

        ListNode mid = findMid(head);
        ListNode reverseNode = reverse(mid.next);
        mid.next = null;
        merge(head, reverseNode);
    }

    /**
     * 找到链表的中间节点
     * @param head
     * @return
     */
    private ListNode findMid(ListNode head) {
        ListNode slow = head, fast = head;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    /**
     * 翻转链表
     * @param head
     * @return
     */
    private ListNode reverse(ListNode head) {
        ListNode prev = null, cur = head, next = head;
        while(cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    /**
     * 合并两个链表， 按顺序合并
     * @param p
     * @param q
     * @return
     */
    private void merge(ListNode head, ListNode right) {
        ListNode left = head;
        while (right != null) {
            ListNode next = right.next;
            right.next = left.next;
            left.next = right;

            right = next;
            left = left.next.next;
        }
    }

}
```



### 易错点

- 易错项 1 
