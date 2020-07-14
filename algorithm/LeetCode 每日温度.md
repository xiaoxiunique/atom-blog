题目地址



- :slightly_smiling_face: 第一次练习 2020-06-11这个题目其实和之前做过的单调栈的题目非常像。不过技巧支持是

  顺序入栈，存储索引

- :smile: 第二次练习



### 单调栈

解题代码

```java
class Solution {
    public int[] dailyTemperatures(int[] T) {

        Stack<Integer> stack = new Stack<>();
        int[] result = new int[T.length];
        Arrays.fill(result, 0);

        for (int i = 0; i < T.length; i++) {
            while(!stack.isEmpty() && T[stack.peek()] < T[i]) {
                result[stack.peek()] = i - stack.pop();
            }
            stack.push(i);
        }

        return result;
    }
}
```



### 易错点

- 易错项 1

