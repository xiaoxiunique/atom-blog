[[TOC]]

### `0x01` **IDEA 以新窗口的形式打开多个项目**

> File - Settings - Appearance & Behavior - System Settings

<img src="http://193.112.98.8/atomImg/setting/setting-multiple.png" alt="setting-multiple.png" style="zoom:100%;" />

### `0x02` 修改 IDEA 默认编码 -> UTF-8

> File - Settings - Editor - File Encodings

<img src="http://193.112.98.8/atomImg/setting/setting-encoding.png" alt="setting-encoding.png" style="zoom:100%;" />

### `0x03` 设置统一编译器和编译版本

> File - Setting - Build - Compiler - Java Compiler

<img src="http://193.112.98.8/atomImg/setting/setting-compiler.png" alt="setting-compiler.png" style="zoom:100%;" />

### `0x04` 设置类注释

> File - Editor- File and Code Templates

```java
/**
* @Package ${PACKAGE_NAME}
* @author atom.hu
* @date ${DATE} ${TIME}
* @version V1.0
*/
```

<img src="http://193.112.98.8/atomImg/setting/setting-class-comment.png" alt="setting-class-comment.png" style="zoom:100%;" />

`$$end$$` 可以设置光标结束的位置

### `0x05` 自动导包

> File - Editor- General - Auto Import

<img src="http://193.112.98.8/atomImg/setting/setting-auto-import.png" alt="setting-auto-import.png" style="zoom:100%;" />

### `0x06` 内存使用量展示

> 由于日常开发时都是在公司的办公电脑上进行的，所以内存总是不够用，但是又不清楚 IDEA 具体实时的占用了多少内存。这个时候对于一些内存并不是太够的开发人员来说能看到实时的内存使用量还是比较好的
>
> File - Settings - Appearance & Behavior

<img src="http://193.112.98.8/atomImg/setting/setting-use-memory.png" alt="setting-use-memory.png" style="zoom:100%;" />

![](http://images.atomblogs.com/atom/20190831212401.png?img)

### `0x07` 开启悬浮提示

> 有时候在看代码的时候，不清楚一个类具体是干什么的，就会点进去看这个类的注释，但是强大的 IDEA 是支持不用点进去就可以看到注释的以及类的相关信息的。
>
> File - Settings - Editor - General

<img src="http://193.112.98.8/atomImg/setting/setting-enable-hover-tip.png" alt="setting-enable-hover-tip.png" style="zoom:100%;" />

### `0x08` Ctrl+鼠标滚轴修改字体大小

> IDEA 也支持向浏览器那样按住 Ctrl+鼠标滚轴来改变编辑区的字体的大小
>
> File-->Settings-->Editor-->General。

<img src="http://193.112.98.8/atomImg/setting/setting-mouse-change-font.png" alt="setting-mouse-change-font.png" style="zoom:80%;" />

### `0x09` 显示多行 Tab

> 当我们打开的标签页多了的时候，默认的会隐藏在右侧，当我们需要的时候在右侧找到后再打开。IDEA 是支持多行显示的，这样在大屏幕的显示器上也不用总去点击右侧的去找刚才打开过的文件了
>
> File - Settings - Editor - General - Editor Tabs

<img src="http://193.112.98.8/atomImg/setting/setting-multiple-tab.png" alt="setting-multiple-tab.png" style="zoom:80%;" />

### `0x0A` 设置字体, 行距 让代码看着更舒服

> File - Settings - Editor - Font

<img src="http://193.112.98.8/atomImg/setting/setting-change-font-padding.png" alt="setting-change-font-padding.png" style="zoom:80%;" />

### `0x0B` IDEA GIT 配置

> File - Settings - Version Control - Git

<img src="http://193.112.98.8/atomImg/setting/setting-git-config.png" alt="setting-git-config.png" style="zoom:80%;" />

### `0X0C` IDEA MAVEN 配置

> File - Settings - Build - Build Tools - Maven

<img src="http://193.112.98.8/atomImg/setting/setting-maven-setting.png" alt="setting-maven-setting.png" style="zoom:80%;" />

maven 阿里镜像配置

```xml
<mirror>
    <id>nexus</id>
    <mirrorOf>*</mirrorOf>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
</mirror>
```
