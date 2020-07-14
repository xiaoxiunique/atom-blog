[题目地址](https://leetcode-cn.com/problems/reverse-words-in-a-string/submissions/)



- :slightly_smiling_face: 第一次练习 2020年4月10日 这个题目，自己还是比较有思路，后面也看了官方的题解，我自己的还要比官方的快一点。:ox::beers:
- :smile: 第二次练习 



自己的

- 先去除首尾空格
- 每个单词单独去空格，而后比较

```java
public String reverseWords(String s) {
    s = s.trim();
    String[] words = s.split(" ");
    StringBuffer sb = new StringBuffer();
    for(int i = words.length - 1; i >= 0; i --) {
        if (!"".equals(words[i].trim())) {
            sb.append(words[i].trim());
            if (i != 0)
                sb.append(" ");
        }
    }
    return sb.toString();
}
```



官方题解，效率没有自己的高

```java
public String reverseWords(String s) {
    s = s.trim();
    List<String> wordList = Arrays.asList(s.split("\\s+"));
    Collections.reverse(wordList);
    return String.join(" ", wordList);
}
```



### 易错点

- 易错项 1 
