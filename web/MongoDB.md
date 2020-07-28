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



:::tip

错误解决：如果出现以下错误

```shell
Error: couldn’t add user: Use of SCRAM-SHA-256 requires undigested passwords
```

:::

则使用以下方式进行添加

```shell
db.createUser({ 
    user: "admin", 
    pwd: "xxx", 
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ], 
    mechanisms : ["SCRAM-SHA-1"] 
})
```



## 聚合查询

统计每天数据增长量

```js
db.nbindings.aggregate([
            {    $project :  {  day :  { $substr:  ["$createdAt",  0,  10]  } } },
            {    $group   :  {  _id :  "$day",   number :  {  $sum :  1  } } },
            {    $sort    :  {  _id :  -1  } }
    ]);
```



## 执行计划

```js
db.juneonlinetimes.find({uid: '3123586'}).explain();
```

执行上述语句，返回执行结果

```js
{ 
    "queryPlanner" : {
        "plannerVersion" : 1.0, 
        "namespace" : "egg_xgimi_careplus.juneonlinetimes", 
        "indexFilterSet" : false, 
        "parsedQuery" : {
            "uid" : {
                "$eq" : "3123586"
            }
        }, 
        "winningPlan" : {
            "stage" : "COLLSCAN", 
            "filter" : {
                "uid" : {
                    "$eq" : "3123586"
                }
            }, 
            "direction" : "forward"
        }, 
        "rejectedPlans" : [

        ]
    }, 
    "ok" : 1.0, 
    "operationTime" : Timestamp(1595901092, 1), 
    "$clusterTime" : {
        "clusterTime" : Timestamp(1595901092, 1), 
        "signature" : {
            "hash" : BinData(0, "6zlWZ/8Z/I4udbRi+PXS70QGpYI="), 
            "keyId" : NumberLong(6836962738317557761)
        }
    }
}
```





| 含义           | 参数                                                         |
| -------------- | ------------------------------------------------------------ |
| plannerVersion | 查询计划版本                                                 |
| namespace      | 要查询的集合                                                 |
| indexFilterSet | 是否使用索引                                                 |
| parsedQuery    | 查询条件，此处为 x = 1                                       |
| winningPlan    | 最佳执行计划                                                 |
| state          | 查询方式，常见的有COLLSCAN/全表扫描、IXSCAN/索引扫描、FETCH/根据索引去检索文档、SHARD_MERGE/合并分片结果、IDHACK/针对_id进行查询 |
| filter         | 过滤条件                                                     |
| direction      | 搜索方向                                                     |
| rejectedPlans  | 拒绝的执行计划                                               |
| serverInfo     | mongodb 服务器信息                                           |



将上方 表 添加索引之后再执行查询

```js
db.juneonlinetimes.createIndex({uid: 1});

{ 
    "queryPlanner" : {
        "plannerVersion" : 1.0, 
        "namespace" : "egg_xgimi_careplus.juneonlinetimes", 
        "indexFilterSet" : false, 
        "parsedQuery" : {
            "uid" : {
                "$eq" : "3123586"
            }
        }, 
        "winningPlan" : {
            "stage" : "FETCH", 
            "inputStage" : {
                "stage" : "IXSCAN", 
                "keyPattern" : {
                    "uid" : 1.0
                }, 
                "indexName" : "uid_1", 
                "isMultiKey" : false, 
                "multiKeyPaths" : {
                    "uid" : [

                    ]
                }, 
                "isUnique" : false, 
                "isSparse" : false, 
                "isPartial" : false, 
                "indexVersion" : 2.0, 
                "direction" : "forward", 
                "indexBounds" : {
                    "uid" : [
                        "[\"3123586\", \"3123586\"]"
                    ]
                }
            }
        }, 
        "rejectedPlans" : [

        ]
    }, 
    "ok" : 1.0, 
    "operationTime" : Timestamp(1595901492, 2), 
    "$clusterTime" : {
        "clusterTime" : Timestamp(1595901492, 2), 
        "signature" : {
            "hash" : BinData(0, "a+A2mG+8toxMdEumrnQHhZ0t1gc="), 
            "keyId" : NumberLong(6836962738317557761)
        }
    }
}

```

这个时候就可以看到 Stage 就是  索引扫描了。