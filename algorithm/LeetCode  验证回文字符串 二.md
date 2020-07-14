题目地址



- :slightly_smiling_face: 第一次练习 2020年5月19日 自己想到了双指针，但是没有想到这个有那么巧妙
- :smile: 第二次练习 



### 双指针

- 建立两个指针，一个指向字符串的开始位置，一个指向结束位置
- 循环如果两个指针处的字符串相同则 start ++ & end -- 
- 如果两个字符不相同，只需要判断分别判断[start + 1...end] || [start...end - 1] 
- 那么只需要判断剩下的两个字符串 是否是回文串就可以了

[解题代码](https://leetcode-cn.com/problems/valid-palindrome-ii/solution/yan-zheng-hui-wen-zi-fu-chuan-ii-by-leetcode-solut/)

```java
    public boolean validPalindrome(String s) {
        if (s.length() <= 2) {
            return true;
        }

        int len = s.length();
        int start = 0, end = len - 1;
        int swapCtx = 0;

        while(start < end){
            char p = s.charAt(start), q = s.charAt(end);
            if (p == q) {
                start ++;
                end --;
            } else {
                boolean flag1 = true, flag2 = true;
                for (int i = start, j = end - 1; i < j; i++, j--) {
                    if (s.charAt(i) != s.charAt(j)) {
                        flag1 = false;
                        break;
                    }
                }

                for(int i = start + 1, j = end; i < j; i ++, j --) {
                    if (s.charAt(i) != s.charAt(j)) {
                        flag2 = false;
                        break;
                    }
                }

                return flag1 || flag2;
            }
        }

        return true;
    }

```



### 易错点

- 易错项 1 
