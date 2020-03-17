[题目地址](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)



- 😣 第一次练习 2020年3月17日 完全不懂
- :shit: 第二次练习 





解题代码

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



### 易错点

- 不会
