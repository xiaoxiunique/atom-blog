**FROM：指定一个镜像，必须为第一个命令**

FROM指令是最重要的一个且必须为 `DockerFile` 文件开篇的第一个非注释行，用于为映像文件构建过程指定基准镜像，后续的指令运行于此基准镜像所提供的运行环境。

实践中，基准镜像可以是任何可用镜像文件，默认情况下，`docker build` 会在 `docker` 主机上查找指定的镜像文件，在其不存在时，则会从 `docker Hub Registry` 上拉取所需的镜像文件

```shell
格式：
　　FROM <image>
　　FROM <image>:<tag>
　　FROM <image>@<digest>
示例：
　　FROM mysql:5.6
注：
　　tag或digest是可选的，如果不使用这两个值时，会使用latest版本的基础镜像
```



##### **MAINTAINER：**维护者信息，还可以使用 `LABEL` 指定各种元格式指定 `maintainer`

```shell
格式：
    MAINTAINER <name>
示例：
    MAINTAINER Jasper Xu
    MAINTAINER sorex@163.com
    MAINTAINER Jasper Xu <sorex@163.com>
```



##### **COPY**：功能类似ADD，但是是不会自动解压文件，也不能访问网络资源

用于从 **Docker** 主机复制文件至创建的新映像文件

```shell
格式：
    COPY <src>... <dest>
    COPY ["<src>",... "<dest>"] 用于支持包含空格的路径
     <src>:要复制的源文件或目录，支持使用通配符
     <dest>：目标路径，即正在创建的image的文件系统路径；建议为<dest>使用绝对路径，否则，COPY指定则以WORKDIR为其起始路径；
      注意：在路径中有空白字符时，通常使用第二种格式
文件复制准则
 <src>必须是build上下文中的路径，不能是其父目录中的文件
 如果<src>是目录，则其内部文件或子目录会被递归复制，但<src>目录自身不会被复制
 如果指定了多个<src>，或在<src>中使用了通配符，则<dest>必须是一个目录，且必须以/结尾
 如果<dest>事先不存在，他将会被自动创建，这包括其父目录路径
```



##### **ADD：**将本地文件添加到容器中，**tar** 类型文件会自动解压(网络压缩资源不会被解压)，可以访问网络资源，类似 **wget**



##### **WORKDIR：**工作目录，类似于**cd** 命令

```shell
格式：
    WORKDIR /path/to/workdir
示例：
    WORKDIR /a  (这时工作目录为/a)
    WORKDIR b  (这时工作目录为/a/b)
    WORKDIR c  (这时工作目录为/a/b/c)
注：
　　通过WORKDIR设置工作目录后，Dockerfile中其后的命令RUN、CMD、ENTRYPOINT、ADD、COPY等命令都会在该目录下执行。在使用docker run运行容器时，可以通过-w参数覆盖构建时所设置的工作目录。
```



##### **VOLUME：**用于指定持久化目录（指定卷，注意在 `dockerfile` 中只能指定基于 `docker` 管理的卷）

```shell
格式：
    VOLUME ["/path/to/dir"]
示例：
    VOLUME ["/data"]
    VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"
注：
　　一个卷可以存在于一个或多个容器的指定目录，该目录可以绕过联合文件系统，并具有以下功能：
卷可以容器间共享和重用
容器并不一定要和其它容器共享卷
修改卷后会立即生效
对卷的修改不会对镜像产生影响
卷会一直存在，直到没有任何容器在使用它
```



##### **EXPOSE：**用于为容器打开指定要监听的端口以实现与外部通信

```shell
格式：
    EXPOSE <port> [<port>...]
示例：
    EXPOSE 80 443
    EXPOSE 8080
    EXPOSE 11211/tcp 11211/udp
注：
　　EXPOSE并不会让容器的端口访问到主机。要使其可访问，需要在docker run运行容器时通过-p来发布这些端口，或通过-P参数来发布EXPOSE导出的所有端口
　　镜像中指定的是待暴露的端口是隐藏的，需要加上大写的-P选项，也可以自定义
```



##### **ENV：**设置环境变量，用于为镜像定义所需的环境变量，并可被 `DockerFile` 文件中位于其后的其他指令所调用

```shell
格式：
    ENV <key> <value>  #<key>之后的所有内容均会被视为其<value>的组成部分，因此，一次只能设置一个变量
    ENV <key>=<value> ...  #可以设置多个变量，每个变量为一个"<key>=<value>"的键值对，如果<key>中包含空格，可以使用\来进行转义，也可以通过""来进行标示；另外，反斜线也可以用于续行
示例：
    ENV myName John Doe
    ENV myDog Rex The Dog
    ENV myCat=fluffy
```



##### **RUN：**构建镜像时执行的命令

```shell
RUN用于在镜像容器中执行命令，其有以下两种命令执行方式：
shell执行
格式：
    RUN <command>
exec执行
格式：
    RUN ["executable", "param1", "param2"]
示例：
    RUN ["executable", "param1", "param2"]
    RUN apk update
    RUN ["/etc/execfile", "arg1", "arg1"]
注：
　　RUN指令创建的中间镜像会被缓存，并会在下次构建中使用。如果不想使用这些缓存镜像，可以在构建时指定--no-cache参数，如：docker build --no-cache
　　基于基础镜像执行，在操作时评估好基础镜像的能力
　　注意：json数组中，要使用双引号
```



##### **CMD：**构建容器后调用，也就是在容器启动时才进行调用

```shell
格式：
    CMD ["executable","param1","param2"] (执行可执行文件，优先)
    CMD ["param1","param2"] (设置了ENTRYPOINT，则直接调用ENTRYPOINT添加参数)
    CMD command param1 param2 (执行shell内部命令)
示例：
    CMD echo "This is a test." | wc -
    CMD ["/usr/bin/wc","--help"]
注：
 　　CMD不同于RUN，CMD用于指定在容器启动时所要执行的命令，而RUN用于指定镜像构建时所要执行的命令。
```



##### **ENTRYPOINT：**配置容器，使其可执行化。配合CMD可省去"application"，只使用参数

```shell
格式：
    ENTRYPOINT ["executable", "param1", "param2"] (可执行文件, 优先)
    ENTRYPOINT command param1 param2 (shell内部命令)
示例：
    FROM ubuntu
    ENTRYPOINT ["top", "-b"]
    CMD ["-c"]
注：
　　　ENTRYPOINT与CMD非常类似，不同的是通过docker run执行的命令不会覆盖ENTRYPOINT，而docker run命令中指定的任何参数，都会被当做参数再次传递给ENTRYPOINT。Dockerfile中只允许有一个ENTRYPOINT命令，多指定时会覆盖前面的设置，而只执行最后的ENTRYPOINT指令。
```



##### **USER：**指定运行容器时的用户名或 UID，后续的 RUN 也会使用指定用户。

使用USER指定用户时，可以使用用户名、UID或GID，或是两者的组合。当服务不需要管理员权限时，可以通过该命令指定运行用户。并且可以在之前创建所需要的用户

```shell
格式:
　　USER user
　　USER user:group
　　USER uid
　　USER uid:gid
　　USER user:gid
　　USER uid:group
 示例：
    　　USER www
 注：
　　使用USER指定用户后，Dockerfile中其后的命令RUN、CMD、ENTRYPOINT都将使用该用户。镜像构建完成后，通过docker run运行容器时，可以通过-u参数来覆盖所指定的用户。
```



##### **HEALTHCHECK：**健康检查



##### **ARG：**用于指定传递给构建运行时的变量