[题目地址](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)



- :slightly_smiling_face: 第一次练习 五毒，其实不是很理解
- :smile: 第二次练习 



### 解题方法

解题代码

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }
        
        ListNode pa = headA, pb = headB;
        while(pa != pb) {
            pa = pa == null ? headB : pa.next;
            pb = pb == null ? headA : pb.next;
        }
        
        return pa;
    }
}
```



### 易错点

- 易错项 1 
