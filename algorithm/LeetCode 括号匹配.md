[题目地址](https://leetcode-cn.com/problems/valid-parentheses/)



- :grin: 第一次练习 2020年3月17日 以前做过，也挺其他老师讲过，结果还是频繁做错。
- :shit: 第二次练习 



### 利用栈



```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(let i = 0 ; i < s.length; i ++) {
        if (s[i] == '(') {
            stack.push(')');
        } else if (s[i] == '[' ) {
            stack.push("]");
        } else if (s[i] == '{') {
            stack.push("}");
        } else if (stack.length == 0 || stack.pop() != s[i]) {
            return false;
        }
        
    }
    return  stack.length === 0;
};
```



### 易错点

- 在 JavaScript 中 数组即是队列也是栈
- 我们需要根据括号的特性，左右括号来翻转，巧妙处理，而不是凭借记忆来写
