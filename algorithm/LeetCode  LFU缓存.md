[题目地址](https://leetcode-cn.com/problems/lfu-cache/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 刚开始看错题了，以为是实现 LRU，我丢。。。不过 LFU LRU 都不是简单的东西
- :smile: 第二次练习 



### 构建双端队列，节点中存储访问频率

解题代码

```java
class LFUCache {

    class Node {
        int key;
        int value;
        int freq = 1;
        Node pre;
        Node post;

        public Node() {}
        public Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    HashMap<Integer, Node> cache;
    Node head;
    Node tail;
    int capacity;
    int size;

    public LFUCache(int capacity) {
        cache = new HashMap<>(capacity);
        this.capacity = capacity;
        head = new Node();
        tail = new Node();
        head.post = tail;
        head.pre = head;
    }
    
    public int get(int key) {
        Node node = cache.get(key);
        if (node == null)
            return -1;
        node.freq ++;
        moveToNewPosition(node);
        return node.value;
    }

    private void moveToNewPosition(Node node) {
        Node nextNode = node.post;
        removeNode(node);
        while(nextNode.freq <= node.freq && nextNode != tail) {
            nextNode = nextNode.post;
        }
        nextNode.pre.post = node;
        node.pre = nextNode.pre;
        node.post = nextNode;
        nextNode.pre = node;
    }

    private void addNode(Node node) {
        node.post = head.post;
        node.pre = head;
        node.post.pre = node;
        head.post = node;
        moveToNewPosition(node);
    }

    private void removeNode(Node node) {
        node.pre.post = node.post;
        node.post.pre = node.pre;
    }
    
    public void put(int key, int value) {
        if (capacity == 0)
            return;

        Node node = cache.get(key);
        if (node != null) {
            node.value = value;
            node.freq ++;
            moveToNewPosition(node);
        } else {
            if (size == capacity) {
                cache.remove(head.post.key);
                removeNode(head.post);
                size --;
            }
            Node newNode = new Node(key, value);
            addNode(newNode);
            cache.put(key, newNode);
            size ++;
        }
    }
}
```



### 易错点

- 易错项 1 
