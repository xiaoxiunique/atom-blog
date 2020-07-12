[题目地址](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 看的[官方题解](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-lie-shu-zu-zhong-de-zui-xi/)，感觉没怎么看懂，我丢。。。。懂了数组是升序的
- :smile: 第二次练习 



### 二分查找

解题代码

```java
public int findMin(int[] nums) {
    if (nums.length == 1)
        return nums[0];

    int l = 0, r = nums.length - 1;
    if (nums[r] > nums[0])
        return nums[0];

    while(l <= r) {
        int mid = l + ((r - l) >>> 1);
        if (nums[mid] > nums[mid + 1])
            return nums[mid + 1];
        if (nums[mid - 1] > nums[mid])
            return nums[mid];
        if (nums[mid] > nums[0])
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}

```



### 易错点

- 易错项 1 
