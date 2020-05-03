[题目地址](https://leetcode-cn.com/problems/valid-anagram/)



- :smile: 第一次练习 思考一分钟之后就有了做题的思路，简单的调试下就成功了，虽然是简单题吧，还是比较有成就感的。继续努力 。:ox::beers:
- :shit: 第二次练习 2020年05.04 可能太久没做了，自己第一时间想用双指针的办法来做，还是要过遍数才行呀



### 利用 Hash 表

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s == null || t == null)
            return false;
        
        int[] arr = new int[26];
        for (char c : s.toCharArray()) {
            arr[c - 'a'] ++;
        }

        for (char c : t.toCharArray()) {
            if (arr[c - 'a'] == 0)
                return false;
            arr[c - 'a']--;
        }

        for (char c : s.toCharArray()) {
            if (arr[c - 'a'] != 0)
                return false;
        }
        return true;
    }
}

```



### 代码更加好的 Hash 表

看了官方的题解的 Hash 解法，发现官方在处理的时候代码更加简洁，特此记录下。:ox::beers:

```java
public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }
    int[] table = new int[26];
    for (int i = 0; i < s.length(); i++) {
        table[s.charAt(i) - 'a']++;
    }
    for (int i = 0; i < t.length(); i++) {
        table[t.charAt(i) - 'a']--;
        if (table[t.charAt(i) - 'a'] < 0) {
            return false;
        }
    }
    return true;
}
```



### 易错点

- 自己的这种 Hash 表的解决方式，需要考虑到如果 s 的 Hash 数组中在经过异位词 t 处理之后，还是存在 slot 不为0的情况，那么就代表不满足情况

	```java
	for (char c : s.toCharArray()) {
		if (arr[c - 'a'] != 0)
			return false;
	}
	```

	
