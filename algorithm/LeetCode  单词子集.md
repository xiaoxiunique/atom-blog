[题目地址](https://leetcode-cn.com/problems/word-subsets/)



- :slightly_smiling_face: 第一次练习 2020.05.04 处理还是比较巧妙
- :smile: 第二次练习 



### Hash 表

- 将 B 合并成一个单词，统一处理 `bmax`

解题代码

```java
    public List<String> wordSubsets(String[] A, String[] B) {
        int[] bmax = new int[26];
        for (String b : B) {
            int[] bCount = count(b);
            for (int i = 0; i < 26; i++) {
                bmax[i] = Math.max(bmax[i], bCount[i]);
            }
        }

        ArrayList<String> retList = new ArrayList<>();
        search: for (String a : A) {
            int[] aCount = count(a);
            for (int i = 0; i < 26; i++) {
                if (aCount[i] < bmax[i]) {
                    continue search;
                }
            }
            retList.add(a);
        }

        return retList;
    }

    public int[] count(String s) {
        int[] ret = new int[26];
        for (char c : s.toCharArray()) {
            ret[c - 'a'] ++;
        }
        return ret;
    }

```



### 易错点

- 易错项 1 
