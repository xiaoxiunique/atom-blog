### 简介

`curl` 是常用的命令行工具，用来请求 `Web` 服务器。它的名字就是客户端（client）的 `URL` 工具的意思。

它的功能非常强大，命令行参数多达几十种。如果熟练的话，完全可以取代 `Postman` 这一类的图形界面工具。



### 基本用法

::: tip

整理一些基本的用法

:::

**下载文件**

```shell
curl -O https://github.com/alibaba/arthas/releases/download/arthas-all-3.1.7/arthas-tunnel-server-3.1.7.jar
```



**发送请求**

> 发送 POST 请求

```
curl -X POST https://www.example.com
```

> 发送GET 请求

```shell
curl -X GET https://www.example.com
```



### -d

`-d` 参数用于发送 `POST` 请求的数据体。

```shell
$ curl -d'login=emma＆password=123'-X POST https://google.com/login
# 或者
$ curl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login
```

使用 `-d` 参数以后，`HTTP` 请求会自动加上标头 `Content-Type : application/x-www-form-urlencoded`。并且会自动将请求转为 `POST` 方法，因此可以省略 `-X POST`。

`-d` 参数可以读取本地文本文件的数据，向服务器发送。

```shell
$ curl -d '@data.txt' https://google.com/login
```

上面命令读取 `data.txt` 文件的内容，作为数据体向服务器发送。



### 使用 -v 查看整个请求过程

```shell
culr -v www.baidu.com
```



>  查看通信的整个过程, 用于调试,  可以查看http请求头和响应头



### --limit-rate

`--limit-rate` 用来限制 `HTTP` 请求和回应的带宽，模拟慢网速的环境。

```shell
curl --limit-rate 200k https://google.com
```

上面命令将带宽限制在每秒 `200K` 字节。



### --head

输出服务的响应头

###  使用 -L 跟随链接重定向

如果直接使用 curl 打开某些被重定向后的链接，这种情况下就无法获取我们想要的网页内容。例如：

```shell
curl http://codebelief.com
```

会得到如下提示：

```html
<html>
<head><title>301 Moved Permanently</title></head>
<body bgcolor="white">
<center><h1>301 Moved Permanently</h1></center>
<hr><center>nginx/1.10.3</center>
</body>
</html>复制代码
```

而当我们通过浏览器打开该链接时，会自动跳转到 `http://www.codebelief.com`。此时我们想要 curl 做的，就是像浏览器一样跟随链接的跳转，获取最终的网页内容。我们可以在命令中添加 `-L` 选项来跟随链接重定向：

```shell
curl -L http://codebelief.com
```

这样我们就能获取到经过重定向后的网页内容了。



参考文章:  [Linux命令行：cURL的十种常见用法](https://juejin.im/post/5915204b44d904006c463c61)