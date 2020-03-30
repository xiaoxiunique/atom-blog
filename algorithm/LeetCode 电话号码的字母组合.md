[题目地址](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)



- :slightly_smiling_face: 第一次练习 2020年3月29日 跟平常的递归解法差不多
- :smile: 第二次练习 



### 递归求解

![image-20200329214149550](https://gitee.com/xiaoxiunique/picgo-image/raw/master/image-20200329214149550.png)

解题代码

```java
private List<String> retList;
HashMap<Character, String> hashMap = new HashMap<>();
public List<String> letterCombinations(String digits) {
    if (digits.length() == 0) {
        return new ArrayList<>();
    }
    retList = new ArrayList<>();
    hashMap.put('2', "abc");
    hashMap.put('3', "def");
    hashMap.put('4', "ghi");
    hashMap.put('5', "jkl");
    hashMap.put('6', "mno");
    hashMap.put('7', "pqrs");
    hashMap.put('8', "tuv");
    hashMap.put('9', "wxyz");

    recursive("", digits, 0);
    return retList;
}

private void recursive(String s, String digits, int i) {
    // terminator
    if (i == digits.length()) {
        retList.add(s);
        return;
    }

    // process current logic
    String letters = hashMap.get(digits.charAt(i));
    for (int j = 0; j < letters.length(); j++) {
        // drill down
        recursive(s + letters.charAt(j), digits, i + 1);
    }

}

```



### 易错点

- 易错项 1 
