[题目地址](https://leetcode-cn.com/problems/chou-shu-lcof/)



- 😣 第一次练习 2020年3月29日 五毒神功，这个题【因子】的概念不是很懂。做起来还是比较晦涩

	去看了一下百度百科的 [丑数](https://baike.baidu.com/item/%E4%B8%91%E6%95%B0/18046116) 和 [质因子](https://baike.baidu.com/item/%E8%B4%A8%E5%9B%A0%E5%AD%90/10720836)的概念之后，对这个题目的理解加深了很多。

- :shit: 第二次练习 



### 优先队列

解题代码

```java
{
    public int nthUglyNumber(int n) {
        PriorityQueue<Long> pq = new PriorityQueue<>();
        HashSet<Long> s = new HashSet<>();
        // 初始化，放进堆和set，发现 1 要开 Long 数组才可以
        long[] primes = new long[]{2, 3, 5};
        for (long prime : primes) {
            pq.offer(prime);
            s.add(prime);
        }
        long num = 1;
        for (int i = 1; i < n; i++) {
            num = pq.poll();
            // 遍历三个因子
            for (int j = 0; j < 3; j++) {
                if (!s.contains(num * primes[j])) {
                    pq.offer(num * primes[j]);
                    s.add(num * primes[j]);
                }
            }
            System.out.println(num + " => ");
        }
        return (int) num;
    }

    public static void main(String[] args) {
        System.out.println(new Test().nthUglyNumber(10));
    }
}
```



### 易错点

- 易错项 1 
