[题目地址](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)



- :slightly_smiling_face: 第一次练习 2020年5月19日 主要是理解深拷贝的意思，其实就是按照原来的顺序，然后在原来链表修改的时候不要影响现有链表
- :smile: 第二次练习 



### 字典表

解题代码

```java
public Node copyRandomList(Node head) {
    /**
         * 1. copy -> hashmap
         * 2. 从 map 中取出，后拼接
         */
    if (head == null) return null;

    HashMap<Node, Node> hashMap = new HashMap<Node, Node>();
    Node p = head;
    while(p != null) {
        hashMap.put(p, new Node(p.val));
        p = p.next;
    }
    p = head;
    while(p != null) {
        hashMap.get(p).next = hashMap.get(p.next);
        hashMap.get(p).random = hashMap.get(p.random);
        p = p.next;
    }

    return hashMap.get(head);
}
```



### 易错点

- 易错项 1 
