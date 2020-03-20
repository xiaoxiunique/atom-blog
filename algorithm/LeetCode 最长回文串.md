[题目地址](https://leetcode-cn.com/problems/longest-palindrome/)



- :smile: 第一次练习 2020年3月19日 这个题还是思路还是比较容易得到
- :shit: 第二次练习 





因为是要组合得到最长回文串，所以我们只需要得到所有元素的偶数和 再添加一个基数就是最大值了

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // for char in s  -> (char, num)
    // statistics char num / 2
    if (s === null || s.length === 1) {
        return 1;
    }

    let size = 0;

    let map = new Map();
    for (const char of s) {
        map.set(char, map.get(char) ? map.get(char) + 1 : 1);
    }
    
    for(const key of map.keys()) {
        if (map.get(key) % 2 === 0) 
            size += map.get(key);
        else if (map.get(key) % 2 === 1) 
            size += map.get(key) - 1; 

        if (map.get(key) % 2 === 1 && size % 2 === 0)
            size ++;
    }

    return size;
};
```



### 易错点

- 在处理基数问题的时候，全局只需要添加一次即可

  ```javascript
  if (map.get(key) % 2 === 1 && size % 2 === 0)
      size ++;
  ```

  
