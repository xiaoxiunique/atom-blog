[题目地址](https://leetcode-cn.com/problems/subarray-sum-equals-k/)



- :slightly_smiling_face: 第一次练习 2020年5月15日 这个题目暴力，也是需要技巧的。
- :smile: 第二次练习 



### 暴力法

解题代码

```java
    public int subarraySum(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return -1;
        }

        int cnt = 0;
        // sort array
        for (int i = 0; i < nums.length; i++) {
            // 如果当前元素都大于 k 那么后面的元素就可以不必考虑了
            int sum = 0;
            for(int j = i; j >= 0; j--) {
                sum += nums[j];
                if (sum == k)
                    cnt ++;
            }
        }

        return cnt;
    }

```



### 前缀和

```java
public int subarraySum(int[] nums, int k) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    // 计算前缀数组
    int[] preSum = new int[nums.length + 1];
    preSum[0] = 0;
    for (int i = 0; i < nums.length; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }

    int cnt = 0;
    for (int left = 0; left < nums.length; left++) {
        for (int right = left; right < nums.length; right++) {
            // 区间和 [left...right]
            if (preSum[right + 1] - preSum[left] == k) {
                cnt++;
            }
        }
    }

    return cnt;
}

```



### 前缀和 + Hash

```java
public int subarraySum(int[] nums, int k) {
    if (nums == null || nums.length == 0) {
        return -1;
    }

    int cnt = 0, pre = 0;
    HashMap<Integer, Integer> hash = new HashMap<>();
    hash.put(0, 1);
    for (int i = 0; i < nums.length; i++) {
        pre += nums[i];
        if (hash.containsKey(pre - k)) {
            cnt += hash.get(pre - k);
        }
        hash.put(pre, hash.getOrDefault(pre, 0) + 1);
    }

    return cnt;
}
```



### 易错点

- 易错项 1 
