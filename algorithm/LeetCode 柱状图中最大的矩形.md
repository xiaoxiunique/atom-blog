[题目地址](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)



- 😣 第一次练习 2020年3月17日 完全不懂
- :shit: 第二次练习 2020.05.30 第二次练习。卧槽。我都不知道自己以前做过这个题。不过自己还是调试出来了。还不错。 这个题我其实是知道 会在双指针和栈中肯定可以解决这个问题。只是说到具体编码的时候，反而执行起来不是很容易。 这就是编程技巧了。





### 栈 Stack

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var maxarea = 0;
    var stack = [];
    heights.push(0);
    heights.unshift(0);
    for(var i = 0;i < heights.length;i++){
        while(stack.length > 0 && heights[stack[stack.length-1]] > heights[i]){
            maxarea = Math.max(maxarea,heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i);
    }
    return maxarea;
};
```



### 伪双指针

```java
public int largestRectangleArea(int[] heights) {
        if (heights == null || heights.length == 0) {
            return 0;
        }
        int max = 0;
        // 栈，双指针
        /**
         * for -> heights -> height
         * compare(find the latest area at the current height)
         */
        for (int i = 0; i < heights.length; i++) {
            max = Math.max(findMax(heights, heights.length, i), max);
        }
        return max;
    }

    /**
     * 找到在矩形中 一 i 为中心的最大的矩形的面积
     * @param heights 矩形范围
     * @param length 矩形长度
     * @param idx 索引
     * @return 面积
     */
    private int findMax(int[] heights, int length, int idx) {

        int currentHeight = heights[idx];
        int left = idx, right = idx;

        for (int i = idx - 1; i >= 0; i--) {
            if (heights[i] >= currentHeight) {
                left --;
            } else {
                break;
            }
        }
        for (int i = idx; i < length; i++) {
            if (heights[i] >= currentHeight) {
                right ++;
            } else {
                break;
            }
        }

        return right == left ? currentHeight : (right - left) * currentHeight;
    }
```



### 易错点

- 不会
