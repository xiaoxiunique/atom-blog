### Docker 安装 MYSQL

- docker pull mysql:5.7.25

- 创建同步数据文件夹 mkdir -p /data/mysql

- 启动容器

	```shell
	docker stop mysql ; docker rm mysql; docker run --name mysql -p 3306:3306 -v /data/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=xgimi123.. -d mysql:5.7.25 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
	```




### Docker 安装 Jenkins

- docker pull jenkins/jenkins:lts

- 创建 Jenkins 数据文件夹 `mkdir -p /www/jenkins_home`

- 修改文件夹权限 `chmod 777 /www/jenkins_home`

- 中国镜像 DockerFile

	```dockerfile
	FROM jenkins/jenkins:lts
	
	ENV JENKINS_UC https://updates.jenkins-zh.cn
	ENV JENKINS_UC_DOWNLOAD https://mirrors.tuna.tsinghua.edu.cn/jenkins
	
	ENV JENKINS_OPTS="-Dhudson.model.UpdateCenter.updateCenterUrl=https://updates.jenkins-zh.cn/update-center.json"
	ENV JENKINS_OPTS="-Djenkins.install.runSetupWizard=false"
	
	COPY init.groovy /usr/share/jenkins/ref/init.groovy.d/init.groovy
	COPY hudson.model.UpdateCenter.xml /usr/share/jenkins/ref/hudson.model.UpdateCenter.xml
	COPY mirror-adapter.crt /usr/share/jenkins/ref/mirror-adapter.crt
	```

	

- 启动容器

	```shell
	docker stop jenkins; docker rm jenkins; docker run -d -p 18080:8080 -p 50000:50000 --restart=always --privileged=true -v /www/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v $(which docker):$(which docker) --name jenkins b6b6cd
	
```
	
	

