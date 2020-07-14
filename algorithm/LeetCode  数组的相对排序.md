[题目地址](https://leetcode-cn.com/problems/relative-sort-array/)



- :slightly_smiling_face: 第一次练习 过遍数，先留一个印象
- :smile: 第二次练习 



### 计数排序

解题代码

```java
class Solution {
        public int[] relativeSortArray(int[] arr1, int[] arr2) {
        int[] aux = new int[1001];
        int[] ref = new int[arr1.length];

        // record arr1 | for ele | ele -> cnt
        for (int i = 0; i < arr1.length; i++) {
            aux[arr1[i]] ++;
        }

        int cnt = 0;
        for (int i = 0; i < arr2.length; i++) {
            while(aux[arr2[i]] > 0) {
                ref[cnt ++] = arr2[i];
                aux[arr2[i]] --;
            }
        }
        
        // 将 arr2 数组中没有存储 arr1 的元素添加
        for (int i = 0; i < 1001; i++) {
            while(aux[i] > 0) {
                ref[cnt ++] = i;
                aux[i] --;
            }
        }

        return ref;
    }
}
```



### 易错点

- 易错项 1 
