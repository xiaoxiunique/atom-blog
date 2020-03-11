[题目地址](https://leetcode.com/problems/reverse-linked-list/)



- 🤬 第一次练习 2020年3月10日



### 双指针解法

::: warning

我居然看到自己以前通过过，但是现在一点理解不到。💀

:::

```javascript
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head == null) {
    return null;
  }

  let prev = null;
  let curr = head;

  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};
```



### 递归写法

```javascript
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 递归写法
  if (head == null || head.next == null) {
    return head;
  }

  let curr = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return curr;
};
// @lc code=end

```



### 利用 ES6 的另类写法，不过内存占用较高:ox:

```javascript
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let [prev, curr] = [null, head];

  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }

  return prev;
};
// @lc code=end

```

