题目地址



- :sob: 第一次练习 2020年3月10 太难了



:::warning

直接看题解，都不解释了。关键现在还没有看懂。:joy:

:::



```javascript
/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  let end = dummyNode;

  while (end.next != null) {
    for (let i = 0; i < k && end != null; i++) {
      end = end.next;
    }
    if (end == null) {
      break;
    }

    let start = pre.next;
    let next = end.next;
    end.next = null;
    pre.next = reverse(start);
    start.next = next;
    pre = start;
    end = pre;
  }
  return dummyNode.next;
};

var reverse = function(head) {
  let pre = null;
  let cur = head;

  while (cur != null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

// @lc code=end

```

