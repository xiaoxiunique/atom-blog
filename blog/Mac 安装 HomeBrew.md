### 背景

最近频繁的在 **Windows** 和 **Mac OS** 之前切换，想来有的东西还是可以记录一下。免得以后再去找来找去，**浪费时间**。



**Mac OS 安装 HomeBrew**

HomeBrew 官网其实提供了 Mac OS 下的安装方法。

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

但是基本上会得到提示

```shell
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Operation timed out
```

所以 **基本不可用** 。



请使用一下脚本：

```bash
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
```

上面脚本中使用了中科大镜像来加速访问。

如果命令执行中卡在下面信息：

```bash
==> Tapping homebrew/core
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
```

请`Control + C`中断脚本执行如下命令：

```bash
cd "$(brew --repo)/Library/Taps/"
mkdir homebrew && cd homebrew
git clone git://mirrors.ustc.edu.cn/homebrew-core.git
```

**`cask` 同样也有安装失败或者卡住的问题，解决方法也是一样：**

```bash
cd "$(brew --repo)/Library/Taps/"
cd homebrew
git clone https://mirrors.ustc.edu.cn/homebrew-cask.git
```

成功执行之后继续执行前文的安装命令:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install)"
```

最后看到`==> Installation successful!`就说明安装成功了。



[原文](https://zhuanlan.zhihu.com/p/90508170)