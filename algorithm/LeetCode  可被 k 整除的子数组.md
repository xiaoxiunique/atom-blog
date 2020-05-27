[题目地址](https://leetcode-cn.com/problems/decode-ways/)



- :slightly_smiling_face: 第一次练习 2020.05.27 感觉做晕了。这个题做了两遍。。。
- :smile: 第二次练习 



### Hash 表

解题代码

```java
public int subarraysDivByK(int[] A, int K) {
  int N = A.length, sum = 0, ans = 0;
  int[] map = new int[K];
  map[0] = 1;
  for (int i = 1; i <= N; i++) {
    sum = sum + A[i - 1];
    int key = (sum % K + K) % K;
    ans += map[key];
    map[key] ++;
  }
  return ans;
}
```



### 易错点

- 易错项 1 
