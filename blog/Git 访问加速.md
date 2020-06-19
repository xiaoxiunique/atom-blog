### 2.1 复制下面的内容
```bash
# GitHub520 Host Start
185.199.108.154                                   github.githubassets.com
199.232.68.133                                    camo.githubusercontent.com
199.232.68.133                                    github.map.fastly.net
199.232.69.194                                    github.global.ssl.fastly.net
140.82.114.3                                      github.com
140.82.114.5                                      api.github.com
199.232.68.133                                    raw.githubusercontent.com
199.232.68.133                                    user-images.githubusercontent.com
199.232.68.133                                    favicons.githubusercontent.com
199.232.68.133                                    avatars5.githubusercontent.com
199.232.68.133                                    avatars4.githubusercontent.com
199.232.68.133                                    avatars3.githubusercontent.com
199.232.68.133                                    avatars2.githubusercontent.com
199.232.68.133                                    avatars1.githubusercontent.com
199.232.68.133                                    avatars0.githubusercontent.com
# GitHub520 Host End
```

上面内容会自动定时更新，保证最新有效。数据更新时间：2020-06-16T00:09:09+08:00（内容无变动不会更新）

### 2.1 手动方式
#### 2.1.1 修改 hosts 文件
hosts 文件在每个系统的位置不一，详情如下：
- Windows 系统：`C:\Windows\System32\drivers\etc\hosts`
- Linux 系统：`/etc/hosts`
- Mac（苹果电脑）系统：`/etc/hosts`
- Android（安卓）系统：`/system/etc/hosts`
- iPhone（iOS）系统：`/etc/hosts`

修改方法，把第一步的内容复制到文本末尾：

1. Windows 使用记事本。
2. Linux、Mac 使用 Root 权限：`sudo vi /etc/hosts`。
3. iPhone、iPad 须越狱、Android 必须要 root。

#### 2.1.2 激活生效
大部分情况下是直接生效，如未生效可尝试下面的办法，刷新 DNS：

1. Windows：在 CMD 窗口输入：`ipconfig /flushdns`

2. Linux 命令：`sudo rcnscd restart`

3. Mac 命令：`sudo killall -HUP mDNSResponder`

**Tips：** 上述方法无效可以尝试重启机器。

