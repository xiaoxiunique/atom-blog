### 通过链表实现



```java
class LRUCache {

    /**
     * 链表中的一个结点
     */
    public static class Node {
        /**
         * 前驱
         */
        public Node prev;

        /**
         * 后驱
         */
        public Node next;

        public int key, val;

        public Node(int key, int val) {
            this.key = key;
            this.val = val;
        }

        public Node() {
            this.key = 0;
            this.val = 0;
        }
    }
    public static class DoubleLinkedList {
        private Node head, tail;
        private int size;

        public DoubleLinkedList() {
            head = new Node();
            tail = new Node();
            head.next = tail;
            tail.prev = head;
            size = 0;
        }


        /**
         * 在头部添加结点
         * @param node 结点
         */
        public void addFirst(Node node) {
            node.next = head.next;
            node.prev = head;

            head.next.prev = node;
            head.next = node;

            size ++;
        }

        /**
         * 删除 x 结点, x 结点一定存在
         * @param x node
         */
        public void remove(Node x) {
            x.prev.next = x.next;
            x.next.prev = x.prev;
            size --;
        }

        /**
         * 删除最后一个结点
         */
        public Node removeLast() {
            // 判断最后一个结点是否为头结点
            if (tail.prev == head) {
                return null;
            }
            Node last = tail.prev;
            remove(last);
            return last;
        }

        public int size() {
            return size;
        }
    }



    // 为了达到 O(1) 的复杂度, 需要通过 hashMap 表将结果存起来
    HashMap<Integer, Node> hashMap;

    // 次双向链表用来限制长度
    DoubleLinkedList cache;

    // 容量
    private int capacity;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        hashMap = new HashMap<>(capacity);
        cache = new DoubleLinkedList();
    }

    /**
     * 获取 链表中的数据
     * @param key
     * @return
     */
    public int get(int key) {
        if (!hashMap.containsKey(key)) {
            return -1;
        }

        int V = hashMap.get(key).val;
        // 利用 put 方法, 将数据提前
        put(key, V);
        return V;
    }

    /**
     * 将数据推送到 链表中
     * @param key k
     * @param value v
     */
    public void put(int key, int value) {

        Node T = new Node(key, value);
        /*
         * if exists key
         *    push
         * else
         *    remove -> key
         *    add key
         */
        if (hashMap.containsKey(key)) {
            // 当前 key 已经存在
            cache.remove(hashMap.get(key));
            cache.addFirst(T);
            hashMap.put(key, T);
        } else {
            // 当前 key 不存在, 需要判断现在的长度是否已经满了, 如果已经满了, 就需要先删除尾部, 后面再添加
            if (capacity == cache.size()) {
                Node last = cache.removeLast();
                hashMap.remove(last.key);
            }
            // 删除元素之后, 剩下的就直接添加到头部就可以了
            cache.addFirst(T);
            hashMap.put(key, T);
        }
    }
}
```

