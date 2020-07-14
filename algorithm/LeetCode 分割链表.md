[题目地址](https://leetcode-cn.com/problems/partition-list/)



- 😣 第一次练习 2020年3月17日 五毒大法
- :shit: 第二次练习 



使用两个头记录元素，后面再合并

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (head === null || head.next === null) {
        return head;
    }

    let lDummyHead = new ListNode(-1);
    let rDummyHead = new ListNode(-1);
    let l = lDummyHead;
    let r = rDummyHead;
    
    while(head != null) {
        if (head.val >= x) {
            r.next = head;
            r = r.next;
        } else if (head.val < x) {
            l.next = head;
            l = l.next;
        }
        head = head.next;
    }
    r.next = null;
    l.next = rDummyHead.next;

    return lDummyHead.next;
};
```



### 易错点

- 虚拟头结点的使用
- 认真审题
