### Docker MongoDb 设置用户名和密码

<img src="../.vuepress/public/20200414831524_euybYk.jpg" alt="é²ç«æï¼æ´å£ç½©" style="zoom:150%;" />

:::warning

MongoDb 对应的是一个库一个账号。重点 记笔记

:::

先创建 root 用户

```js
use admin
db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]
})
```



在创建特定数据库的密码

```js
use test
db.createUser({
  user: 'test',
  pwd: 'test',
  roles: [{role: 'readWrite', db: 'test'}]
})
```



使用

```js
use test
db.auth(name, pwd);
```

