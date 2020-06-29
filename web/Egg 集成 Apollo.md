## egg 集成 apollo

------

## 安装



### install

```shell
npm i egg-apollojs-no-schedule --save
```



### plugin.js

```js
exports.apollojs = {
  enable: true,
  package: 'egg-apollojs-no-schedule',
};
```



### app/config/apollo.js

```js
module.exports = {
  configServerUrl: <configServerUrl>, // 配置中心地址
  appId: [appId], // appId
  clusterName: "default",
  namespaceName: 'application'
};

```

注意，namespaceName 不要写错了，这个写错了或者写多都会导致服务不可达。	



### {app_root} / preload.js

```js
require('egg-apollojs-no-schedule')
  .init(__dirname + '/config/apollo.js');
```



### app/config/config.default.js

```js
// {app_root}/config/config.default.js
'use strict';
 	
// 加载process.env
require('egg-apollojs-no-schedule').apollo.setEnv();
```



### package.json

```json
"scripts": {
	"start": "node preload.js && egg-scripts start --daemon --title=<application name> --port=<port>"
}
```



## 使用

以 配置线上 mongodb 数据库连接地址为例

apollo 中 配置的值

```js
mongoose.url = "mongodb://127.0.0.1/test"
```



在 `config.default.js`  文件中引入配置

```js
config.mongoose = {
    url: process.env['mongoose.url'],
    options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        bufferMaxEntries: 0,
        poolSize: 1000,
    },
};
```

