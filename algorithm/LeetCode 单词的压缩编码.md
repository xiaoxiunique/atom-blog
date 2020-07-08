[题目地址](https://leetcode-cn.com/problems/short-encoding-of-words/solution/)



- 😣 第一次练习 2020年3月28日 没有什么思路，不过要用到 【字典树】等后面学习了这个数据结构之后，再来回过头来看希望会有收获。
- :shit: 第二次练习 



### 存储后缀

- 将所有的字符串存入 HashSet 中

	

- 利用 HashSet 的特性进行去重

	

- 循环现有字符串集合，挨个去重。

	

	如图中 ime、me 存在于 time 中，ell 存在于 dell 所以都会移除。移除后计算总和

	

解题代码

```java
public int minimumLengthEncoding(String[] words) {
    HashSet<String> good = new HashSet<>(Arrays.asList(words));
    for (String word : words) {
        for (int k = 1; k < word.length(); k ++) {
            good.remove(word.substring(k));
        }
    }

    int ret = 0;
    for (String word : good) {
        ret += word.length() + 1;
    }
    return ret;
}
```



### 字典树解法

先记录下，等以后再回来回顾

```java
class Solution {
    public int minimumLengthEncoding(String[] words) {
        TrieNode trie = new TrieNode();
        Map<TrieNode, Integer> nodes = new HashMap();

        for (int i = 0; i < words.length; ++i) {
            String word = words[i];
            TrieNode cur = trie;
            for (int j = word.length() - 1; j >= 0; --j)
                cur = cur.get(word.charAt(j));
            nodes.put(cur, i);
        }

        int ans = 0;
        for (TrieNode node: nodes.keySet()) {
            if (node.count == 0)
                ans += words[nodes.get(node)].length() + 1;
        }
        return ans;

    }
}

class TrieNode {
    TrieNode[] children;
    int count;
    TrieNode() {
        children = new TrieNode[26];
        count = 0;
    }
    public TrieNode get(char c) {
        if (children[c - 'a'] == null) {
            children[c - 'a'] = new TrieNode();
            count++;
        }
        return children[c - 'a'];
    }
}
```



### 易错点

- 易错项 1 
