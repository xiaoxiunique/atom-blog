

如果拿汽车来做比:

- Docker好比汽车引擎，
- Dockerfile相当于汽车蓝图，
- Docker image(镜像)就是汽车样板，
- Docker container(容器)类似于汽车的零部件，
- Docker Registry可以看作是4s店，
- Docker Compose就像老司机,
- Docker Volume就像是汽车的油箱, 如果把容器间内的io数据流比喻成汽油,
- Docker Swarm(或者K8s)就是交通枢纽。



### 安装 ifconfig 命令, 虚拟机

```shell
yum install net-tools
```


### docker安装
- 卸载旧版本
```shell
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

```
yum remove docker-ce docker-ce-cli containerd.io
```

- 安装存储驱动
```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

- 下载官方的yum源文件
```shell
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

- 安装docker-ce
```shell
yum install -y docker-ce-18.09.0-3.el7 docker-ce-cli-18.09.0-3.el7 containerd.io-1.2.0-3.el7

sudo yum install docker-ce
```




**1.启动docker**
```
systemctl start docker 
```
**2.停止docker**
```
systemctl stop docker
```

**重启docker**
```
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```

**3.docker 配置镜像**
```shell
vi /etc/docker/daemon.json 
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```

**查看有哪些镜像**
```
docker image ls
```

**docker 安装镜像**
```
docker pull tomcat
```

**拉取镜像**
```
docker container pull [name]
```

**连接镜像**
```
--link dockerName
```

**进入容器**
```
docker exec -it [container_id] bash
```
**修改docker 启动容器指定端口**
```
docker container run  -p 8080:8080 [container_name]
```

**docker 从 docker容器中拷贝文件到本地种**
```
docker cp tomcat:/usr/local/tomcat/conf/web.xml ./
// 将tomcat 文件下的web.xml配置， 复制到当前目录
```

**docker 同时删除多个符合条件的容器**
```
docker rm $(docker container ls -f "status=exited" -q)
```

**docker 刪除镜像**
```
docker rmi [imagename]
```
**docker 配置nginx**
```
docker container run -p 8881:80 --name nginx -v /root/webserver/:/www -v /usr/local/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/nginx/logs/:/wwwlogs -d nginx
```

### docker-compose

1.docker-compose的使用非常类似于docker命令的使用，但是需要注意的是大部分的compose命令都需要到docker-compose.yml文件所在的目录下才能执行。

**docker-compose up**

【命令解释】 命令聚合每个容器的输出，命令退出时，所有容器都将停止。

**docker-compose up -d**

【命令解释】 在后台启动容器并使它们保持运行。

**docker-compose logs -f**

【命令解释】 查看该容器的启动的日志打印(日志从头打印)。

**docker logs -f container_id**

【命令解释】 查看某一容器的启动的日志打印(日志从头打印)。 

**docker logs -f --tail 数量词 container_id**

【命令解释】 查看某一容器的启动的日志打印(查看最后n条日志打印)。 例：docker logs -f --tail 50 44b 

**docker-compose stop**

【命令解释】 停止compose服务。

**docker-compose restart**

【命令解释】 重启compose服务。

**docker-compose kill**

【命令解释】 kill compose服务。

**docker-compose ps**

【命令解释】查看compose服务状态。

**docker-compose rm**

【命令解释】删除compose服务。
