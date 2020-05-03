[题目地址](https://leetcode-cn.com/problems/design-linked-list/)



- :slightly_smiling_face: 第一次练习 2020.05.04 链表真的就是没有捷径，只有多练习，多练习才能熟练。
- :smile: 第二次练习 



### 解题方法



解题代码

```java
class MyLinkedList {

    class Node {
        int val;
        Node next;

        public Node(int val, Node next) {
            this.val = val;
            this.next = next;
        }
    }

    private Node head;
    private int size;


    public MyLinkedList() {
        head = new Node(0, null);
        size = 0;
    }



    public int get(int index) {
        if (index < 0 || index >= size) {
            return -1;
        }

        Node cur = head;
        for (int i = 0; i < index + 1; i++) {
            cur = cur.next;
        }
        return cur.val;
    }
    
    public void addAtHead(int val) {
        addAtIndex(0,  val);
    }
    
    public void addAtTail(int val) {
        addAtIndex(size, val);
    }
    
    public void addAtIndex(int index, int val) {
        if (index > size) {
            return;
        }

        if (index < 0) {
            index = 0;
        }
        ++ size;
        Node pre = head;
        for (int i = 0; i < index; i++) {
            pre = pre.next;
        }
        Node newNode = new Node(val, pre.next);
        pre.next = newNode;
    }
    
    public void deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return;
        }
        size --;

        Node pre = head;
        for (int i = 0; i < index; i++) {
            pre = pre.next;
        }
        pre.next = pre.next.next;
    }
}
```



### 易错点

- 易错项 1 
