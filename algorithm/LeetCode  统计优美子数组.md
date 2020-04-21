[题目地址](https://leetcode-cn.com/problems/count-number-of-nice-subarrays/)



- :slightly_smiling_face: 第一次练习 2020年4月21日 这个题，只能说了，做了之后，自己知道了。五毒一下吧。。。
- :smile: 第二次练习 



### 滑动窗口，数学

解题代码

```java
public int numberOfSubarrays(int[] nums, int k) {
    int len = nums.length, res = 0, feed = 0, arr[] = new int[len + 2];
    // 标记所有的奇数的下标
    for (int i = 0; i < len; i++) {
        if ((nums[i] & 1) == 1) {
            arr[++feed] = i;
        }
    }

    // left order
    arr[0] = -1;
    // right order
    arr[feed + 1] = len;
    for(int i = 1; i + k < feed + 2; i ++) {
        res += (arr[i] - arr[i - 1]) * (arr[i + k] - arr[i + k - 1]);
    }
    return res;
}

```



### 技巧点

- 判断是否为奇数

  ```java
  (num & 1) == 1
  ```

  
