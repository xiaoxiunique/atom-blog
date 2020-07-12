[题目地址](https://leetcode-cn.com/problems/add-two-numbers-ii/)



- :slightly_smiling_face: 第一次练习 2020年4月14日 最开始没太懂意思，后面看了[题解](https://leetcode-cn.com/problems/add-two-numbers-ii/solution/javakai-fa-by-sweetiee/)懂了，后面自己又默写了一次。
- :smile: 第二次练习 



### 栈

解题代码

```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;

    Stack<Integer> stack1 = new Stack<>();
    Stack<Integer> stack2 = new Stack<>();
    while (l1 != null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 != null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    ListNode head = null;
    int curry = 0;
    while (!stack1.isEmpty() || !stack2.isEmpty() || curry > 0) {
        int sum = curry;
        sum += stack1.isEmpty() ? 0 : stack1.pop();
        sum += stack2.isEmpty() ? 0 : stack2.pop();
        ListNode node = new ListNode(sum % 10);
        node.next = head;
        head = node;
        curry = sum / 10;
    }
    return head;
}

```



### 易错点

- 易错项 1 
