[题目地址](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 这个是二分查找的升级版，但是需要注意的点还是挺多的。细心一点。
- :smile: 第二次练习 2020.04.27 第二次联系这个题目，看了一个题解感觉写的挺好的 .

```
1 2 3 4 5 6 7 可以大致分为两类，
第一类 2 3 4 5 6 7 1 这种，也就是 nums[start] <= nums[mid]。此例子中就是 2 <= 5。
这种情况下，前半部分有序。因此如果 nums[start] <=target<nums[mid]，则在前半部分找，否则去后半部分找。
第二类 6 7 1 2 3 4 5 这种，也就是 nums[start] > nums[mid]。此例子中就是 6 > 2。
这种情况下，后半部分有序。因此如果 nums[mid] <target<=nums[end]，则在后半部分找，否则去前半部分找。
```


### 二分查找

解题代码

```java
class Solution {
   public int search(int[] nums, int target) {
        if (nums.length == 0)
            return -1;

        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                return mid;
            }
            else if (nums[mid] <= nums[r]) {
                if (nums[mid] <= target && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else if (nums[mid] >= nums[l]) {
                if (target >= nums[l] && target <= nums[mid])
                    r = mid - 1;
                else
                    l = mid + 1;
            }
        }
        if (nums[l] == target)
            return l;
        return -1;
    }

}
```



记录一下大佬的牛逼[解法](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/ji-jian-solution-by-lukelee/)

```
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int lo = 0, hi = nums.size() - 1;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if ((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid]))
                lo = mid + 1;
            else
                hi = mid;
        }
        return lo == hi && nums[lo] == target ? lo : -1;
    }
};
```c++



### 易错点

- 易错项 1 
