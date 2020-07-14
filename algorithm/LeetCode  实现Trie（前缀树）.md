[题目地址](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)



- :slightly_smiling_face: 第一次练习 2020年4月26日 刚学习字典树，所以就五毒一下吧，基本的还是比较好理解
- :smile: 第二次练习 



### 解题方法

解题代码

```java
private class TrieNode {
    private TrieNode[] links;
    private final int R = 26;
    private boolean isEnd;

    public TrieNode() {
        links = new TrieNode[26];
    }

    public boolean containsKey(char c) {
        return links[c - 'a'] != null;
    }

    public TrieNode get(char c) {
        return links[c - 'a'];
    }

    public void put(char c, TrieNode node) {
        links[c - 'a'] = node;
    }

    public void setEnd() {
        isEnd = true;
    }

    public boolean isEnd() {
        return isEnd;
    }
}

private TrieNode root;

/** Initialize your data structure here. */
public Trie() {
    this.root = new TrieNode();
}

/** Inserts a word into the trie. */
public void insert(String word) {
    TrieNode node = this.root;
    for (int i = 0; i < word.length(); i++) {
        char c = word.charAt(i);
        if (!node.containsKey(c)) {
            node.put(c, new TrieNode());
        }
        node = node.get(c);
    }
    node.setEnd();
}

/** Returns if the word is in the trie. */
public boolean search(String word) {
    TrieNode cur = searchPrefix(word);
    return cur != null && cur.isEnd();
}

private TrieNode searchPrefix(String word) {
    TrieNode node = this.root;
    for (int i = 0; i < word.length(); i++) {
        char c = word.charAt(i);
        if (node.containsKey(c)) {
            node = node.get(c);
        } else {
            return null;
        }
    }
    return node;
}

/** Returns if there is any word in the trie that starts with the given prefix. */
public boolean startsWith(String prefix) {
    return searchPrefix(prefix) != null;
}

```



### 易错点

- 主要在操作这种节点数据的时候，需要记住还是需要每次都创建一个新的变量来存储
