[[TOC]]

## 命令

**验证配置是否正确**

```shell
nginx -t
```

**查看 Nginx 的版本号**

```shell
nginx -V
```

**启动 Nginx**：

```shell
nginx
```

**快速停止或关闭 Nginx**

```shell
nginx -s stop
```

**正常停止或关闭 Nginx**

```shell
nginx -s quit
```

**配置文件修改重装载命令**

```shell
nginx -s reload
```

## Nginx 配置语法

### root

### autoindex

开启目录文件列表

### autoindex_exact_size

显示出文件的确切大小，单位是 bytes

### charset

避免中文乱码
