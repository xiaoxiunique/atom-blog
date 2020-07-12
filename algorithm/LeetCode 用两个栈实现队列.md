[题目地址](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

- :slightly_smiling_face: 第一次练习 2020-06-30 总感觉这个题目是自己做过的。
- :smile: 第二次练习



<img src="../.vuepress/public/jianzhi_9.gif" alt="fig1" style="zoom:100%;" />



### 双栈

时间复杂度: O(1)
空间复杂度: O(n)

解题代码

```java
import java.util.Stack;

class CQueue {

private Stack<Integer> p;
    private Stack<Integer> q;

    public CQueue() {
        p = new Stack<>();
        q = new Stack<>();
    }

    // 添加元素的时候 不需要处理直接添加进 p
    public void appendTail(int value) {
        p.push(value);
    }

    public int deleteHead() {
        // 如果两边的元素都为空，那么返回 -1
        if (q.isEmpty() && p.isEmpty()) {
            return -1;
        }

        // 如果只有 q 为空的话， 那么就需要将所有的 p 中的所有元素添加到 q 中
        if (q.isEmpty()) {
            while(!p.isEmpty()) {
                q.push(p.pop());
            }
        }
        
        // 最后返回 q 中的栈顶元素
        return q.pop();
    }
}

```



### 易错点

- 易错项 1
