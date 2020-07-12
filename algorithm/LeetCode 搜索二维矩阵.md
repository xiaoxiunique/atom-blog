[题目地址](https://leetcode-cn.com/problems/search-a-2d-matrix/)



- :slightly_smiling_face: 第一次练习 2020年4月5日 这个根据题，明显是二分搜索的变形版，只需要将数组压平之后，再使用二分查找搜索即可。:ox::beers:
- :smile: 第二次练习 



### 二分查找

解题代码

```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0)
            return false;

        int[] arr = flatMap(matrix);
        return binarySearch(arr, target);
    }

    private int[] flatMap(int[][] matrix) {
        int xl = matrix.length, yl = matrix[0].length, idx = 0;
        int[] retArr = new int[xl * yl];

        for (int i = 0; i < xl; i++)
            for (int j = 0; j < yl; j++)
                retArr[idx ++] = matrix[i][j];
        return retArr;
    }

    private boolean binarySearch(int[] arr, int target) {
        int l = 0, r = arr.length - 1;

        while(l <= r) {
            int mid = l + ((r - l) >> 1);
            if (arr[mid] == target)
                return true;
            else if (arr[mid] < target)
                l = mid + 1;
            else if (arr[mid] > target)
                r = mid - 1;
        }

        return false;
    }
}
```



### 易错点

- 易错项 1 
