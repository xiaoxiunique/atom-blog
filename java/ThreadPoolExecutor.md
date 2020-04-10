线程池顾名思义，就是由很多线程构成的池子，来一个任务，就从池子中取一个线程，处理这个任务。这个理解是我在第一次接触到这个概念时候的理解，虽然整体基本切入到核心，但是实际上会比这个复杂。例如线程池肯定不会无限扩大的，否则资源会耗尽；当线程数到达一个阶段，提交的任务会被暂时存储在一个队列中，如果队列内容可以不断扩大，极端下也会耗尽资源，那选择什么类型的队列，当队列满如何处理任务，都有涉及很多内容。线程池总体的工作过程如下图：

<img src="../.vuepress/public/5dd217480001b8bf20181042.png" alt="img" style="zoom:80%;" />

线程池内的线程数的大小相关的概念有两个，一个是核心池大小，还有最大池大小。如果当前的线程个数比核心池个数小，当任务到来，会优先创建一个新的线程并执行任务。当已经到达核心池大小，则把任务放入队列，为了资源不被耗尽，队列的最大容量可能也是有上限的，如果达到队列上限则考虑继续创建新线程执行任务，如果此刻线程的个数已经到达最大池上限，则考虑把任务丢弃。



在 java.util.concurrent 包中，提供了 ThreadPoolExecutor 的实现。

```java
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler) {
}
```

既然有了刚刚对线程池工作原理对概述，这些参数就很容易理解了：

- corePoolSize

  核心池大小，既然如前原理部分所述。需要注意的是在初创建线程池时线程不会立即启动，直到有任务提交才开始启动线程并逐渐时线程数目达到 `corePoolSize` 。若想一开始就创建所有核心线程需调用 `prestartAllCoreThreads` 方法。

- maximumPoolSize

  池中允许的最大线程数。需要注意的是当核心线程满且阻塞队列也满时才会判断当前线程数是否小于最大线程数，并决定是否创建新线程。

- keepAliveTime

  当线程数大于核心时，多于的空闲线程最多存活时间

- unit

  `keepAliveTime` 参数的时间单位。

- workQueue

  当线程数目超过核心线程数时用于保存任务的队列。主要有3种类型的`BlockingQueue`可供选择：无界队列，有界队列和同步移交。将在下文中详细阐述。从参数中可以看到，此队列仅保存实现Runnable接口的任务。 别看这个参数位置很靠后，但是真的很重要，因为楼主的坑就因这个参数而起，这些细节有必要仔细了解清楚。

- threadFactory

  执行程序创建新线程时使用的工厂。

- handler

  阻塞队列已满且线程数达到最大值时所采取的饱和策略。java默认提供了4种饱和策略的实现方式：中止、抛弃、抛弃最旧的、调用者运行。将在下文中详细阐述。