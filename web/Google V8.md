## JavaScript 设计思想



![img](../.vuepress/public/f8fb9e3570b88152f9ab7b6b8d385c7a-1598448240374.jpg)



## V8 执行 JavaScript 代码的完整流程

![img](../.vuepress/public/8a34ae8c1a7a0f87e19b1384a025e354.jpg)

## V8 执行 JavaScript 代码

![img](../.vuepress/public/ca2cf22c8b2b322022666a3183db1b4d.jpg)

其主要核心流程分为编译和执行两步。首先需要将 JavaScript 代码转换为低级中间代码或者机器能够理解的机器代码，然后再执行转换后的代码并输出执行结果。



![img](../.vuepress/public/b77593de2fc7754d146e1218c45ef2bf.jpg)



## 高级代码为什么需要先编译再执行



CPU 不能直接识别汇编语言。



虽然汇编语言对机器语言做了一层抽象，减少了程序员理解机器语言的复杂度，但是汇编语言依然是复杂且繁琐的，即便你写一个非常简单的功能，也需要实现大量的汇编代码，这主要表现在以下两点。

首先，不同的 CPU 有着不同的指令集，如果要使用机器语言或者汇编语言来实现一个功能，那么你需要为每种架构的 CPU 编写特定的汇编代码，这会带来巨大的、枯燥繁琐的操作，你可以参看下图：



## 解释执行流程

![img](../.vuepress/public/330ad69589d898f6609dfc083bfbe95e.jpg)



## 编译执行流程

![img](../.vuepress/public/1f933e42e81dacc8f4f2d86e01a914d3.jpg)



## 函数申明和函数表达式

![img](../.vuepress/public/51ae06e8a9dc4a589958065429bec231.jpg)

上方两处代码，执行的时候 使用函数表达式的 方式，执行会报错。提示 `foo is not a function`

原因是

![img](../.vuepress/public/a74668eb5bf183538ce9b47a20eb0610.jpg)





## JavaScript 中的 new

```javascript
function DogFactory(type,color){
    this.type = type
    this.color = color
}

var dog = new DogFactory('Dog','Black')
```



上方 new 的对象，对应的 V8 的执行代码

```javascript
var dog = {}  
dog.__proto__ = DogFactory.prototype
DogFactory.call(dog,'Dog','Black')
```

![img](../.vuepress/public/19c63a16ec6b6bb67f0a7e74b284398c.jpg)

- 首先，创建了一个空白对象 dog；
- 然后，将 DogFactory 的 prototype 属性设置为 dog 的原型对象，这就是给 dog 对象设置原型对象的关键一步，我们后面来介绍；
- 最后，再使用 dog 来调用 DogFactory，这时候 DogFactory 函数中的 this 就指向了对象 dog，然后在 DogFactory 函数中，利用 this 对对象 dog 执行属性填充操作，最终就创建了对象 dog。



## Java Script 运行时环境

![img](../.vuepress/public/9ad5d32bce98aad219c9f73513ac6349.jpg)

## 宿主环境和 V8 的关系



![img](../.vuepress/public/e541d8611b725001509bfcd6797f492f.jpg)





## 计算机的硬件组织架构

![img](../.vuepress/public/880dc63d333d8d18d8be9a473b15e06d.jpg)



加载到内存中的程序

![img](../.vuepress/public/99bc9f08d975daf9b86bba72b22ccddf.jpg)

对应的 汇编

![img](../.vuepress/public/34fb571ceb09f9d2cba60fcac11a75ee.png)



一旦二进制代码被装载进内存，CPU 便可以从内存中**取出一条指令**，然后**分析该指令**，最后**执行该指令**。

我们把取出指令、分析指令、执行指令这三个过程称为一个 **CPU 时钟周期**。



## 将混乱的 二进制代码转换为有序的指令

![img](../.vuepress/public/81f37939dc9920c1e0e261c7f345ceb3.jpg)

## 当一个函数执行，内部压栈状态

![img](../.vuepress/public/27f1a623219737f376deddfefb865478.jpg)





## 函数调用结束之后，如何恢复现场（回到上一个函数）

![img](../.vuepress/public/68b9d297cc48864ad49c1915766fa6bd.jpg)

![img](../.vuepress/public/89180f0674a92df96ce6f25813020ed2.jpg)

esp 寄存器中保存了栈顶的指针，ebp 寄存器中保存了 调用方法的开始的位置，栈帧中也存储了函数的调用的相关信息，在函数执行结束时，只需要向下移动即可。



## 抽象语法树解析

```javascript

function foo(a,b) {
    var d = 100
    var f = 10
    return d + f + a + b;
}
var a = 1
var c = 4
foo(1, 5)
```



对应的抽象语法树

![img](../.vuepress/public/e52476efb6ef924e74f470ead4970262.jpg)

代码解析完成之后，V8 便会按照顺序自上而下执行代码，首先会先执行“a=1”和“c=4”这两个赋值表达式，接下来执行 foo 函数的调用，过程是从 foo 函数对象中取出函数代码，然后和编译顶层代码一样，V8 会先编译 foo 函数的代码，编译时同样需要先将其编译为抽象语法树和字节码，然后再解释执行。



## JS 执行字节码的状态图

![img](../.vuepress/public/b3a3e88341d762bb7467ca2941e4c356.jpg)



## UI 线程处理任务流程

![img](../.vuepress/public/20200808095013.jpg)