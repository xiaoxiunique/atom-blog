
### 题目描述

```
给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:
输入: [1,2,3,1]
输出: true

示例 2:
输入: [1,2,3,4]
输出: false

示例 3:
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

```



### 关键点

- 存在重复元素, 返回`true`, 不存在重复元素返回`false`
- 利用`HashMap` 不存在重复key的原理, 以数据的元素为key存入`HashMap`中,查看最后`HashMap`的大小


### 代码

```java
public boolean containsDuplicate(int[] nums) {
    Map<Object, Object> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        map.put(nums[i], "1");
    }
    return map.size() != nums.length;
}
```

### 

#### jhgjhgj

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |

