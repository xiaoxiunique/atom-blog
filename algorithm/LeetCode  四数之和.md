[题目地址](https://leetcode-cn.com/problems/4sum/)



- :slightly_smiling_face: 第一次练习 2020年4月12日 这个题，其实和两数之和，三数之和，差不多，都是有双指针的思想
- :smile: 第二次练习 



### 双指针

[解题](https://leetcode-cn.com/problems/4sum/solution/ji-bai-9994de-yong-hu-you-dai-ma-you-zhu-shi-by-yo/)代码

```java
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> retList = new ArrayList<>();
        if (nums == null || nums.length < 4) {
            return retList;
        }

        Arrays.sort(nums);
        int len = nums.length;
        // 定义4个指针，k,i,j,h k从0开始 | i 从k + 1 开始 | 留下j和h，j指向i+1，h指向数组最大值
        for (int k = 0; k < len - 3; k++) {
            // 如果当前k 和前面的值相等时，直接忽略
            if (k > 0 && nums[k] == nums[k - 1]) {
                continue;
            }

            // 获取当前的最小值，如果当前最小值已经比 target 大，说明后面的值根本没戏
            int min1 = nums[k] + nums[k + 1] + nums[k + 2] + nums[k + 3];
            if (min1 > target) {
                break;
            }
            // 获取当前的最大值，如果最大值比目标小，那么说明前面的值不可能满足，可以直接跳过
            int max1 = nums[k] + nums[len - 1] + nums[len - 2] + nums[len - 3];
            if (max1 < target) {
                continue;
            }

            // 第二层循环i，初始值指向 k + 1
            for (int i = k + 1; i < len - 2; i++) {
                // 相等就跳过
                if (i > k + 1 && nums[i] == nums[i - 1])
                    continue;
                // 头指针
                int j = i + 1;
                //尾指针
                int h = len - 1;
                int min = nums[k] + nums[i]  + nums[j] + nums[j + 1];
                if (min > target) {
                    continue;
                }
                int max = nums[k] + nums[i] + nums[h] + nums[h - 1];
                if (max < target) {
                    continue;
                }

                /*开始j指针和h指针的表演，计算当前和，如果等于目标值，j++并去重，h--并去重，当当前和大于目标值时h--，当当前和小于目标值时j++*/
                while (j < h) {
                    int curr = nums[k] + nums[i] + nums[j] + nums[h];
                    if (curr == target) {
                        retList.add(Arrays.asList(nums[k], nums[i], nums[j], nums[h]));
                        j ++;
                        while (j < h && nums[j] == nums[j - 1]) {
                            j ++;
                        }
                        h --;
                        while (h > j && h > i && nums[h] == nums[h + 1]) {
                            h --;
                        }
                    } else if (curr > target) {
                        h --;
                    } else {
                        j ++;
                    }
                }
            }
        }
        return retList;
    }

```



### 易错点

- 易错项 1 
