[题目地址](https://leetcode-cn.com/problems/group-anagrams/)



- 😣 第一次练习  2020年3月23日 第一次练习，心中有思路，但是还是直接看的题解
- :shit: 第二次练习 



### 利用 Hash 并对字符串进行排序操作



```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String str : strs) {
            char[] s = str.toCharArray();
            Arrays.sort(s);
            String find = new String(s);
            if (map.containsKey(find)) {
                List<String> arr = map.get(find);
                arr.add(str);
                map.put(find, arr);
            } else {
                List<String> arr = new ArrayList<>();
                arr.add(str);
                map.put(find, arr);
            }
        }

        return new ArrayList<>(map.values());
    }
}
```



### 易错点

- 整个处理过程需要处理的细节点还是挺多的，不注意就回出错。

