[题目地址](https://leetcode-cn.com/problems/merge-k-sorted-lists/)



- :slightly_smiling_face: 第一次练习 2020年4月26日 这个题我记得自己两年前做个，这个还是自己解决的第一个困难的题目。
- :smile: 第二次练习 2020年4月26日 晚上联系分治法，分治确实是时间和空间都提升了很多。后面又练习了利用堆来完成，但是堆的时间和空间，其实对比分治法就要差挺多的



### 先解决小问题

两年前的代码

解题代码

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

        /**
         *
         * 1. 判断特殊情况, 如果链表集合中为空   那么就直接返回
         * 2. 此时进入下一步，代表在数组中至少存在1个及以上的链表
         * 3. 这个时候 调用辅助方法 mergeTwoLists 进行比较， 并依次返回排序后的链表
         *
         */
        int len = lists.length;
        if(len == 0)
            return null;

        ListNode cur = new ListNode(-Integer.MAX_VALUE);

        for (int i = 0; i < lists.length; i++) {
            ListNode sortList = mergeTwoLists(cur, lists[i]);
            cur = sortList;
        }
        return cur.next;

    }

    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(-Integer.MAX_VALUE);
        ListNode newNode = dummyHead;

        while (l1 != null && l2 != null){
            if(l1.val > l2.val){
                newNode.next = new ListNode(l2.val);
                l2 = l2.next;
            }
            else {
                newNode.next = new ListNode(l1.val);
                l1 = l1.next;
            }
            newNode = newNode.next;
        }

        newNode.next = l1 == null ? l2 : l1;
        return dummyHead.next;
    }

}
```





### 分治法

时间和空间都得到了大大的提升，但是自己还不是很熟悉，还要多多练习才行

```java
public ListNode mergeKLists(ListNode[] lists) {
    return merge(lists, 0, lists.length - 1);
}


/**
     * 合并链表 [l...r] 区间中的链表
     * @param lists 链表数组
     * @param l 左边索引
     * @param r 右边索引
     * @return 合并后的链表
     */
private ListNode merge(ListNode[] lists, int l, int r) {
    if (l == r) {
        return lists[l];
    }
    if (l > r) {
        return null;
    }

    int mid = (l + r) >>> 1;
    return mergeTwoList(merge(lists, l, mid), merge(lists, mid + 1, r));
}


/**
     * 合并两个链表
     * @param l
     * @param r
     * @return
     */
private ListNode mergeTwoList(ListNode l, ListNode r) {
    ListNode dummyNode = new ListNode(Integer.MIN_VALUE);
    ListNode cur = dummyNode;

    while(l != null && r != null) {
        if (l.val >= r.val) {
            cur.next = new ListNode(r.val);
            r = r.next;
        } else {
            cur.next = new ListNode(l.val);
            l = l.next;
        }
        cur = cur.next;
    }

    cur.next = l == null ? r : l;
    return dummyNode.next;
}

```



### 堆

非常的巧妙，在添加元素的时候

```java
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) {
        return null;
    }

    // 创建针对 ListNode 的优先队列
    PriorityQueue<ListNode> pq = new PriorityQueue<>(lists.length, new Comparator<ListNode>() {
        @Override
        public int compare(ListNode l, ListNode r) {
            if (l.val > r.val) {
                return 1;
            } else if (l.val == r.val) {
                return 0;
            } else {
                return -1;
            }
        }
    });

    // 将所有的链表加入到 优先队列中
    for (int i = 0; i < lists.length; i++) {
        if (lists[i] != null)
            pq.add(lists[i]);
    }

    ListNode dummyNode = new ListNode(Integer.MIN_VALUE);
    ListNode p = dummyNode;

    while(!pq.isEmpty()) {
        p.next = pq.poll();
        p = p.next;

        if (p.next != null) {
            pq.add(p.next);
        }
    }
    return dummyNode.next;
}

```



### 易错点

- 新添加节点的时候，需要使用 `new ListNode()` 的形式来添加，二不是直接添加。
