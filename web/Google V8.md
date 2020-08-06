## JavaScript 设计思想



![img](../.vuepress/public/f8fb9e3570b88152f9ab7b6b8d385c7a.jpg)



## V8 执行 JavaScript 代码的完整流程

![img](../.vuepress/public/8a34ae8c1a7a0f87e19b1384a025e354.jpg)

## V8 执行 JavaScript 代码

![img](../.vuepress/public/ca2cf22c8b2b322022666a3183db1b4d.jpg)

其主要核心流程分为编译和执行两步。首先需要将 JavaScript 代码转换为低级中间代码或者机器能够理解的机器代码，然后再执行转换后的代码并输出执行结果。



![img](../.vuepress/public/b77593de2fc7754d146e1218c45ef2bf.jpg)



## 高级代码为什么需要先编译再执行



CPU 不能直接识别汇编语言。

![img](../.vuepress/public/6bb6d19ec37ea1a7d2cab2a25ea62b1f.jpg)

虽然汇编语言对机器语言做了一层抽象，减少了程序员理解机器语言的复杂度，但是汇编语言依然是复杂且繁琐的，即便你写一个非常简单的功能，也需要实现大量的汇编代码，这主要表现在以下两点。

首先，不同的 CPU 有着不同的指令集，如果要使用机器语言或者汇编语言来实现一个功能，那么你需要为每种架构的 CPU 编写特定的汇编代码，这会带来巨大的、枯燥繁琐的操作，你可以参看下图：

![img](../.vuepress/public/75f4f88099f82bec62def94541189b70.jpg)

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