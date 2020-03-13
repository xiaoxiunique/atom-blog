[题目地址](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

- 💃🏻 第一次练习 2020年3月13日 看题解

  


###  迭代解法

::: tip

链表的题，是真的难。可能还是练习太少了

:::

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head;
    }

    /**
     * 1. set dummyHead, dummyHead.next = head; cur -> dummyHead.next;
     * 2. loop cur, cur!= null, val -> cur.val, if cur.next.val == val
     * 3.temp = cur.next.next, loop temp != null && temp.val = val; temp = temp.next
     */

    let dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let cur = dummyHead;

    while (dummyHead.next != null) {
        let v = dummyHead.next.val;
        if (dummyHead.next.next != null && v == dummyHead.next.next.val) {
            let temp = dummyHead.next.next;
            while(temp != null && temp.val == v) {
                temp = temp.next;
            }
            dummyHead.next = temp;
        }else {
            dummyHead = dummyHead.next;
        }
    }

    return cur.next;

};
```



### 易错点