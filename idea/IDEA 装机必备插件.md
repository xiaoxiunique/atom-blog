[[TOC]]

### **Alibaba Cloud Toolkit**

个人经常会有这样的需求, 每次自己更新完测试环境之后, 就需要 `maven` 打包`clean install`, 然后`copy` `jar` 包, 利用`ftp`工具上传`jar`包到测试服务器, 然后`kill` 服务, 在启动服务 `java -jar` , 有时更新频繁 这就是一件非常麻烦的事

`Cloud Toolkit` 是本地 `IDE` 插件，帮助开发者更高效地开发、测试、诊断并部署应用。通过插件，您可以将本地应用一键部署到云端`（ECS、EDAS 和 Kubernetes 等`）和任意服务器；并且它还内置了 `Arthas` 程序诊断、`Dubbo工具`、`Terminal Shell` 终端和 `MySQL` 执行器等工具。

[官网链接](https://www.aliyun.com/product/cloudtoolkit)

简单的说, 安装了这个插件之后, `idea` 就具备了一些`jenkins`的自动部署的功能

**0x01** 安装

在 `idea` 工具中`Plugins` 直接搜索安装

**0x02** 使用

在安装完成之后, 在工具栏中就会出现阿里云的按钮, **点击按钮**

<img src="http://193.112.98.8/atomImg/plugins/20190831235312.png?img" style="zoom:100%;" />

然后点击 `Deploy to Host`, 然后下方就会出现添加主机页面
<img src="http://193.112.98.8/atomImg/plugins/20190831235513.png?img" style="zoom:100%;" />

点击 `Add Host`

<img src="http://193.112.98.8/atomImg/plugins/20190831235536.png?img" style="zoom:100%;" />

以我自己的[博客](www.atomblogs.com)为例, 输入完配置之后, 点击 `Test Connection`, 出现 `Succeeded`, 点击 `add`, 代表添加成功

<img src="http://193.112.98.8/atomImg/plugins/20190831235554.png?img" style="zoom:100%;" />

然后再点击 `Deploy to Host`

<img src="http://193.112.98.8/atomImg/plugins/20190831235602.png?img" style="zoom:100%;" />

点击`Run`, `idea` 便会, 先使用`maven`打包, 后发送到服务器的指定位置

<img src="http://193.112.98.8/atomImg/plugins/20190831235612.png?img" style="zoom:100%;" />

<img src="http://193.112.98.8/atomImg/plugins/20190831235621.png?img" style="zoom:100%;" />

后续还可以 监听启动日志, 很简单, 就是 `Advanced` 里面, 大家看看就知道了,
后续有时间再完善笔记吧




### **翻译插件**

```
Translation
```

### **`mybatis` 插件**

```
Free Mybatis plugin
```

> 安装此插件后可以节约很多的开发时间, 在 `mapper` 层接口可以直接进入 `xml`文件中

### IntelliJ Lombok plugin

Lombok pom.xml 文件配置

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.18</version>
    <scope>provided</scope>
</dependency>
```

> 生命很宝贵, 没有必要浪费在这个重复的工作上, 尤其是如果我们使用传统的 `get` `set` 方法, 在实体类进行变更的时候, 或多添加了列, 或减少了列, 又要重新生成对应的 `get set` 这难道不就是浪费时间浪费生命吗?

还不熟悉使用的可以看这篇文章

[Java 开发之 Lombok 必知必会](https://juejin.im/post/5cf3edf7e51d454f71439c79)

### GenAllSetter

在`Java`方法中, 根据 `new` 关键词, 为`Java Bean` 生成所有`Setter`方法。

按`GenAllSetter`键两次, 会为`Setter`方法生成默认值。

### GenDaoCode

一键生成 `dao` `xml` `service`



### CodeGlance

在右侧生成代码地图





### RestfulToolkit

一套 Restful 服务开发辅助工具

- 1.根据 URL 直接跳转到对应的方法定义 ( Ctrl \ or Ctrl Alt N );
- 2.提供了一个 Services tree 的显示窗口;
- 3.一个简单的 http 请求工具;
- 4.在请求方法上添加了有用功能: 复制生成 URL;,复制方法参数...
- 5.其他功能: java 类上添加 Convert to JSON 功能，格式化 json 数据 ( Windows: Ctrl + Enter; Mac: Command + Enter )。



### Grep Console

高亮`log`不同级别日志，看日志的时候一目了然。





### MyBatis Log Plugin

把 `Mybatis` 输出的`sql`日志还原成完整的`sql`语句，看起来更直观。





### GsonFormat

> 快速的讲一个 `json`转换为一个实体 安装完插件后 `alt + s` 放入正确的 `json`格式

<img src="http://193.112.98.8/atomImg/plugins/gson_use.gif" style="zoom:80%;" />

### VisualVm Launcher

运行`java`程序的时候启动`visualvm`，方便查看`jvm`的情况 比如堆内存大小的分配

某个对象占用了多大的内存，`jvm`调优必备工具

### jclasslib bytecode viewer

一款可视化的字节码查看插件

### Codota

支持智能代码自动提示，该功能可以增强 IDEA 的代码提示功能；

支持 JDK 和知名第三方库的函数的使用方法搜索，可以看到其他知名开源项目对该函数的用法。

当我们第一次使用某个类，对某个函数不够熟悉时，可以通过该插件搜索相关用法，快速模仿学习。

### Auto filling Java call arguments

开发中，我们通常会调用其它已经编写好的函数，调用后需要填充参数，但是绝大多数情况下，传入的变量名称和该函数的参数名一致，当参数较多时，手动单个填充参数非常浪费时间。

该插件就可以帮你解决这个问题。

安装完该插件以后，调用一个函数，使用 Alt+Enter 组合键，调出 “Auto fill call parameters” 自动使用该函数定义的参数名填充。

### Rainbow Brackets

由于很多人没有养成好的编码风格，没有随手 format 代码的习惯，甚至有些同事会写代码超过几百行，阅读起来将非常痛苦。

痛苦的原因之一就是找到上下文，由于括号太多，不确定当前代码行是否属于某个代码块，此时这个插件就会帮上大忙。

### SequenceDiagram

SequenceDiagram 可以根据代码调用链路自动生成时序图，超级赞，超级推荐！

这对研究源码，梳理工作中的业务代码有极大的帮助，堪称神器。

安装完成后，在某个类的某个函数中，右键 --> Sequence Diagaram 即可调出。

### Java Stream Debugger

Stream 非常好用，可以灵活对数据进行操作，但是对很多刚接触的人来说，不好理解。

那么 Java Stream Debugger 这款神器的 IDEA 就可以帮到你。它可以将 Stream 的操作步骤可视化，非常有助于我们的学习。



[插件下载地址](http://note.youdao.com/noteshare?id=27b8552ba1bd2040235c5e308e7def1c&sub=D458C1C0BB3D402B982F47D03863066A)

### Ace Jump
