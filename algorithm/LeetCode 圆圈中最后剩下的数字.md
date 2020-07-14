[题目地址](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)



- :slightly_smiling_face: 第一次练习 2020年3月30日 我感觉这是一个数学问题，难难难....
- :smile: 第二次练习 



### 利用数学方法求解

解题代码

```java
class Solution {
    public int lastRemaining(int n, int m) {
        int ans = 0;
        // 最后一轮剩下2个人，所以从2开始反推
        for (int i = 2; i <= n; i++) {
            ans = (ans + m) % i;
        }
        return ans;
    }
}
```



### 利用数组模拟

```java
public int lastRemaining(int n, int m) {
    ArrayList<Integer> arrayList = new ArrayList<>(n);
    for (int i = 0; i < n; i++) {
        arrayList.add(i);
    }

    int idx = 0;
    while(n > 1) {
        idx = (idx + m - 1) % n;
        arrayList.remove(idx);
        n --;
    }

    return arrayList.get(0);
}
```



### 易错点

- 没有易错的，主要是想不到
