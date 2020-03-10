[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)



快慢指针

2020年3月9日17:52:41

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 快慢指针
    if (head == null || head.next == null) 
        return false;
    
    let slow = head, fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) 
            return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
```



利用 **JSON.stringify()** 不能字符串化循环引用的特性，不过速度比较慢

2020年3月9日17:59:00

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 利用 JSON.stringfiy()
    try {
        JSON.stringify(head);
        return false;
    } catch(err) {
        return true;
    }
};
```

