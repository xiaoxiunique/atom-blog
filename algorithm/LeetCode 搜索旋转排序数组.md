[题目地址](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 这个是二分查找的升级版，但是需要注意的点还是挺多的。细心一点。
- :smile: 第二次练习 



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

```c++
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
```



### 易错点

- 易错项 1 
