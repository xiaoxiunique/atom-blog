[题目地址](https://leetcode-cn.com/problems/diving-board-lcci/)

- :slightly_smiling_face: 第一次练习 2020-07-08
- :smile: 第二次练习



### 数学

时间复杂度: O(n)
空间复杂度: O(n)

这个题目 需要细细的品.

```java

    public int[] divingBoard(int shorter, int longer, int k) {
        if (k == 0){
            return new int[0];
        }
        if (shorter == longer) {
            return new int[]{shorter * k};
        }

        int[] lengths = new int[k + 1];
        for (int i = 0; i <= k; i++) {
            lengths[i] = shorter * (k - i) + longer * i;
        }
        return lengths;
    }
```

### 易错点

- 易错项 1
