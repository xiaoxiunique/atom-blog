### 命令行快捷键

**`Ctrl + A`** 光标跳到一行命令的开头。一般来说，Home 键有相同的效果

**`Ctrl + E`** 光标跳到一行命令的结尾。一般来说，End 键有相同的效果

**`Ctrl + U`** 删除所有在光标左侧的命令字符

**`Ctrl + K`** 删除所有在光标右侧的命令字符

**`Ctrl + W`** 删除光标左侧的一个“单词”，这里的“单词”指的是用空格隔开的一个字符串。例如 -a 就是一个“单词”；

### Watch 定时执行命令

```shell
watch -n 1 ls
```



### 其他
**`du -sh`** 查看文件夹的总大小

`df -h` 查看磁盘总使用 和 剩余量

### 安装 lrzsz
> 对于传送少量文件特别好用, 不需要借助 `FTP` 等工具


编辑 `crontab`
```shell
crontab -e
```

查看 `crontab`列表
```
crontab -l
```

追加内容shell
```
>>
```

覆盖内容
```
>
```

建立软连接
```
ln -s /usr/local/home/node/node-v10.15.3-linux-x64/bin/node node
```


获取服务器各个状态下的连接数
```
netstat -n | awk '/^tcp/{++S[$NF]}END{for (a in S) print a, S[a]}'
```

awk 命令
```
awk -F ',' '{print $1, $2}'
```



**sed**

**java 如何加载.class字节码文件**



自动启动脚本
```

#/bin/bash

# 门店服务主目录
menderyWorkspace="/var/lib/jenkins/workspace/lk-mendery-truck/lk-truck-mendery-webfront/target"

# 进入主目录
cd $menderyWorkspace

# 打印当前当前文件夹路径
echo $(pwd)

# 查找文件
​```shell
find ~ -iname "wenjian"
```

```shell
# 记录错误信息
function handleErr() {
   # 判断文件夹是否存在
   if [ ! -d "errorLog" ]; then
        # 文件不存在 创建文件
        mkdir errorLog
   fi

   # 判断日志文件是否存在
   if [ ! -x "nohup.log" ]; then
        # 日志文件不存在 直接返回
        touch nohup.log
   fi

   # 拷贝最近的错误日志
   tail -2000 nohup.log > ./errorLog/`date +%Y%m%d`.log

   echo "record message for error"
}

# 判断现在主进程是否在运行
cur=$(ps -ef | grep "lk-truck-mendery-webfront" | grep -v "grep")
echo cur
# 如果现在进程存活, 不进行处理
if [ "$cur" ]; then
    echo "the service is alive"
else
    handleErr
    echo "The service was shutdown!"
    echo "Starting service..."
    java -Dspring.profile.active=pro -jar lk-truck-mendery-webfront-1.0.0-SNAPSHOT.jar > nohup.log &
```
