[[TOC]]

### _Id 不能直接和 String  进行比较

```javascript
user._id === article.userId
```

在 mongoose 中不能使用上面的比较，因为 monoose 中的 _id 是ObjectID 类型，是 BSON 中的一种类型，所以不能直接比较，如果需要比较，则可以用 ObjectId 中的 equals 方法

```javascript
user._id.equals(article.userId)
```



### toObject toJson

在mongoose 中查询出来的对象默认是不可更改的，如果需要更改，则需要在对象后添加 toObject 才能更改

```javascript
let model = new Model();
model.name = "model name";
console.info(model.name); // null

model = model.toObject();
model.name = 'model name';
console.info(model.name); // model.name
```



### lean

上方的两个问题 _id 比较， 和 toObject 出现的根本原因是通过mongooses 查询出来的对象还不能算是一个JavaScript 还是一个 Mongoose 的对象，查询出来的对象是可以进行 update, create, delete 等一系列的操作的。

这个时候我们可以用 查询的 lean 方法，手动的将查询出来的 mongoose 对象转换为 JavaScript 对象 这个时候就不会有上面的问题了

```javascript
this.ctx.model.user.find().lean();
```





### 字段递增、递减

递增

```javascript
await model.findOneAndUpdate({ _id }, { $inc: {views: 1} });
```

递减，需要判断当前已经大于 0

```javascript
await model.findOneAndUpdate({ _id, {views: {$gt: 0}}, { $inc: {views: -1} }});
```



### 常用查询

| 方法名   | 含义                                                         |                                    |
| -------- | ------------------------------------------------------------ | ---------------------------------- |
| find     | 通用查询，方法的查询结果是数组，即使没查询到内容，也会返回 [] 空数组。 |                                    |
| findById | `Model.findById(id,[projection],[options],[callback])`       |                                    |
| findOne  | `Model.findOne(conditions, [projection], [options], [callback])` | 该方法返回查找到的所有实例的第一个 |



**操作符**

| $eq  | 与指定的值相等                           |
| ---- | ---------------------------------------- |
| $ne  | 与指定的值不相等                         |
| $gt  | 大于指定的值                             |
| $gte | 大于等于指定的值                         |
| $lt  | 小于指定的值                             |
| $lte | 小于等于指定的值                         |
| $in  | 与查询数组中指定的值中的任何一个匹配     |
| $nin | 与查询数组中指定的值中的任何一个都不匹配 |



**字段相关操作符**

| 符号    | 描述                       |
| ------- | -------------------------- |
| $exists | 匹配存在制定字段的文档     |
| $type   | 返回字段属于指定类型的文档 |



**数组字段查找**

| 符号       | 描述                                                   |
| ---------- | ------------------------------------------------------ |
| $all       | 匹配包含查询数组中指定的所有条件的数组字段             |
| $elemMatch | 匹配数组字段中的某个值满足 $elemMatch 中指定的所有条件 |
| $size      | 匹配数组字段的 length 与指定的大小一样的 document      |



**projection 投影**

其实就是看哪个字段显示，哪个字段不显示

```javascript
UserModel.find({}, {name: 1, age: 1, sex: 0});
```

上面的查询就代表了，只显示 name、age、sex 字段



**Options**

| 操作  | 作用                                                         |
| ----- | ------------------------------------------------------------ |
| sort  | 按照排序规则根据所给的字段进行排序，值可以是 asc，desc，ascending，descending，1，和 -1。 |
| limit | 指定返回结果的最大数量                                       |
| skip  | 指定要跳过的文档数量                                         |
| lean  | 返回普通的 js 对象，而不是 `Mongoose Documents`。建议不需要 mongoose 特殊处理就返给前端的数据都最好使用该方法转成普通 js 对象。 |

::: tip

在 limit、skip 一起使用时，调用顺序并不重要，返回的数据都是先排序后限制数量

```javascript
// 效果一样
Model.find().limit(2).sort('age');
Model.find().sort('age').limit(2);
```

:::



### 修改

- findOneAndUpdate
- findByIdAndUpdate
- update
- updateMany



```javascript
Model.findOneAndUpdate(filter, update, [options], [callback]);

// update
// {operator: { field: value, ... }}
```

:::warning

必须使用 update 操作符。如果没有操作符或操作符不是 `update` 操作符，统一被视为 `$set` 操作（mongoose 特有）

:::



**字段相关操作符**

| 符号         | 描述                                                     |
| ------------ | -------------------------------------------------------- |
| $set         | 设置字段值                                               |
| $currentDate | 设置字段值为当前时间，可以是 `Date` 或时间戳格式。       |
| $min         | 只有当指定值小于当前字段值时更新                         |
| $max         | 只有当指定值大于当前字段值时更新                         |
| $inc         | 将字段值增加`指定数量`，`指定数量`可以是负数，代表减少。 |
| $mul         | 将字段值乘以指定数量                                     |
| $unset       | 删除指定字段，数组中的值删后改为 null。                  |



**数组字段相关操作符**

| 符号      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| $         | 充当占位符，用来表示匹配查询条件的数组字段中的第一个元素 `{operator:{ "arrayField.$" : value }}` |
| $addToSet | 向数组字段中添加之前不存在的元素 `{ $addToSet: {arrayField: value, ... }}`，value 是数组时可与 `$each` 组合使用。 |
| $pop      | 向数组字段的末尾添加元素 `{ $push: { arrayField: value, ... } }`，value 是数组时可与 `$each` 等修饰符组合使用 |
| $pull     | 移除数组字段中的第一个或最后一个元素 `{ $pop: {arrayField: -1(first) / 1(last), ... } }` |
| $pullAll  | 移除数组字段中与查询条件匹配的所有元素 `{ $pull: {arrayField: value / condition, ... } }` |
| $push     | 从数组中删除所有匹配的值 `{ $pullAll: { arrayField: [value1, value2 ... ], ... } }` |



**修饰符**

- $each
- $position
- $slice
- $sort



### 删除

- findOneAndDelete
- findByIdAndDelete
- deleteMany
- deleteOne
- findOneAndRemove
- findByIdAndRemove
- remove



### aggregate

![aggregate](../.vuepress/public/aggregate.png)

- $project

  修改文档的结构，可以用来重命名、增加或删除文档中字段

  ```javascript
  //只返回a和b字段
  Model.aggregate([
      {
          $project: { a: 1, b: 1 }
      }
  ]);
  ```

  

- $match

  用于过滤文档，用法类似于find()方法中的参数

  ```javascript
  
  //返回符合price大于或等于100的数据
  Model.aggregate([
      {
          $match: { 'price': { $gte: 100 } }
      }
  ]);
  
  ```

  

- $limit

  只返回一条数据

  ```javascript
  Model.aggregate([
      {
          $limit: 1 
      }
  ]);
  ```

  

- $skip

  跳过第一条，返回之后的数据

  ```javascript
  Model.aggregate([
      {
          $skip: 1 
      }
  ]);
  ```

  

- $sort

  以price倒序排列

  ```javascript
  Model.aggregate([
      {
          $sort: { 'price': -1 }
      }
  ]);
  ```

  

- $group

  以order_id进行分组，并统计每组的数量

  ```javascript
  Model.aggregate([
      {
          $group: {_id: "$order_id", total: {$sum: "$num"}}
      }
  ]);
  ```

  

- $lookup

  ```javascript
  Model.aggregate([
      {
          $lookup: {
              from: 'student', // 和student表进行关联
              localField: 'class_id', // 此表字段名为 class_id
              foreignField: 'class_id', // 关联表中字段为 class_id
              as: 'students' // 用students 字段接收符合要求的内容
          }
      },
  ]);
  
  ```



### MongoDB 导入导出

导出

```shell
mongodump --archive=egg_xgimi_app.gz --gzip --db=egg_xgimi_app
```



导入

```shell
mongorestore -h 127.0.0.1 -d 导入的数据库库名称

mongorestore --gzip --archive=<filename>.agz --db test -u <username> -p <password> --authenticationDatabase 'admin' --port 27000 --host <hostname>
```



### Model Virtual

:::tip

mongoose 的 virtual 需要配合  populate 使用，有奇效

:::

```js
  
Task.virtual('comment', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'task',
    justOne: false,
    count: true,
});
```



### 固定集合 capped

在某些特定场景下，我们需要限制数据集和的大小，当它超过固定大小的时候就删除。这个时候就需要 MongoDB 里面的固定集合了

```json
const SysLog = new Schema({
    type: String
  }, { timestamps: true, versionKey: false, strict: false, capped: { size: 1024 * 1024 * 10, max: 10000 } });
```

- size 配置当前数据集的最大大小 【单位 byte】
- max 当前数据集的最大条数，两个满足一个就会覆盖

通过 `db.model.stats()` 可以查看当前文档是否是固定集合，和当前集合所使用的条数

:::details 文档详情  db.model.stats()

```json
{ 
    "ns" : "", 
    "size" : 10484818.0, 
    "count" : 6860.0, 
    "avgObjSize" : 1528.0, 
    "storageSize" : 1060864.0, 
    "capped" : true, 
    "max" : 10000.0, 
    "maxSize" : 10485760.0, 
    "sleepCount" : 0.0, 
    "sleepMS" : 0.0, 
    "wiredTiger" : {
        "metadata" : {
            "formatVersion" : 1.0
        }, 
        "creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,durable_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u", 
        "type" : "file", 
        "uri" : "statistics:table:collection-125--2403229025471591555", 
        "LSM" : {
            "bloom filter false positives" : 0.0, 
            "bloom filter hits" : 0.0, 
            "bloom filter misses" : 0.0, 
            "bloom filter pages evicted from cache" : 0.0, 
            "bloom filter pages read into cache" : 0.0, 
            "bloom filters in the LSM tree" : 0.0, 
            "chunks in the LSM tree" : 0.0, 
            "highest merge generation in the LSM tree" : 0.0, 
            "queries that could have benefited from a Bloom filter that did not exist" : 0.0, 
            "sleep for LSM checkpoint throttle" : 0.0, 
            "sleep for LSM merge throttle" : 0.0, 
            "total size of bloom filters" : 0.0
        }, 
        "block-manager" : {
            "allocations requiring file extension" : 135.0, 
            "blocks allocated" : 613.0, 
            "blocks freed" : 469.0, 
            "checkpoint size" : 741376.0, 
            "file allocation unit size" : 4096.0, 
            "file bytes available for reuse" : 303104.0, 
            "file magic number" : 120897.0, 
            "file major version number" : 1.0, 
            "file size in bytes" : 1060864.0, 
            "minor version number" : 0.0
        }, 
        "btree" : {
            "btree checkpoint generation" : 289.0, 
            "column-store fixed-size leaf pages" : 0.0, 
            "column-store internal pages" : 0.0, 
            "column-store variable-size RLE encoded values" : 0.0, 
            "column-store variable-size deleted values" : 0.0, 
            "column-store variable-size leaf pages" : 0.0, 
            "fixed-record size" : 0.0, 
            "maximum internal page key size" : 368.0, 
            "maximum internal page size" : 4096.0, 
            "maximum leaf page key size" : 2867.0, 
            "maximum leaf page size" : 32768.0, 
            "maximum leaf page value size" : 67108864.0, 
            "maximum tree depth" : 3.0, 
            "number of key/value pairs" : 0.0, 
            "overflow pages" : 0.0, 
            "pages rewritten by compaction" : 0.0, 
            "row-store empty values" : 0.0, 
            "row-store internal pages" : 0.0, 
            "row-store leaf pages" : 0.0
        }, 
        "cache" : {
            "bytes currently in the cache" : 12365742.0, 
            "bytes dirty in the cache cumulative" : 114582203.0, 
            "bytes read into cache" : 0.0, 
            "bytes written from cache" : 64606581.0, 
            "checkpoint blocked page eviction" : 0.0, 
            "data source pages selected for eviction unable to be evicted" : 0.0, 
            "eviction walk passes of a file" : 0.0, 
            "eviction walk target pages histogram - 0-9" : 0.0, 
            "eviction walk target pages histogram - 10-31" : 0.0, 
            "eviction walk target pages histogram - 128 and higher" : 0.0, 
            "eviction walk target pages histogram - 32-63" : 0.0, 
            "eviction walk target pages histogram - 64-128" : 0.0, 
            "eviction walks abandoned" : 0.0, 
            "eviction walks gave up because they restarted their walk twice" : 0.0, 
            "eviction walks gave up because they saw too many pages and found no candidates" : 0.0, 
            "eviction walks gave up because they saw too many pages and found too few candidates" : 0.0, 
            "eviction walks reached end of tree" : 0.0, 
            "eviction walks started from root of tree" : 0.0, 
            "eviction walks started from saved location in tree" : 0.0, 
            "hazard pointer blocked page eviction" : 0.0, 
            "in-memory page passed criteria to be split" : 4.0, 
            "in-memory page splits" : 2.0, 
            "internal pages evicted" : 0.0, 
            "internal pages split during eviction" : 0.0, 
            "leaf pages split during eviction" : 0.0, 
            "modified pages evicted" : 0.0, 
            "overflow pages read into cache" : 0.0, 
            "page split during eviction deepened the tree" : 0.0, 
            "page written requiring cache overflow records" : 0.0, 
            "pages read into cache" : 0.0, 
            "pages read into cache after truncate" : 1.0, 
            "pages read into cache after truncate in prepare state" : 0.0, 
            "pages read into cache requiring cache overflow entries" : 0.0, 
            "pages requested from the cache" : 10404.0, 
            "pages seen by eviction walk" : 0.0, 
            "pages written from cache" : 577.0, 
            "pages written requiring in-memory restoration" : 0.0, 
            "tracked dirty bytes in the cache" : 0.0, 
            "unmodified pages evicted" : 0.0
        }, 
        "cache_walk" : {
            "Average difference between current eviction generation when the page was last considered" : 0.0, 
            "Average on-disk page image size seen" : 0.0, 
            "Average time in cache for pages that have been visited by the eviction server" : 0.0, 
            "Average time in cache for pages that have not been visited by the eviction server" : 0.0, 
            "Clean pages currently in cache" : 0.0, 
            "Current eviction generation" : 0.0, 
            "Dirty pages currently in cache" : 0.0, 
            "Entries in the root page" : 0.0, 
            "Internal pages currently in cache" : 0.0, 
            "Leaf pages currently in cache" : 0.0, 
            "Maximum difference between current eviction generation when the page was last considered" : 0.0, 
            "Maximum page size seen" : 0.0, 
            "Minimum on-disk page image size seen" : 0.0, 
            "Number of pages never visited by eviction server" : 0.0, 
            "On-disk page image sizes smaller than a single allocation unit" : 0.0, 
            "Pages created in memory and never written" : 0.0, 
            "Pages currently queued for eviction" : 0.0, 
            "Pages that could not be queued for eviction" : 0.0, 
            "Refs skipped during cache traversal" : 0.0, 
            "Size of the root page" : 0.0, 
            "Total number of pages currently in cache" : 0.0
        }, 
        "compression" : {
            "compressed page maximum internal page size prior to compression" : 4096.0, 
            "compressed page maximum leaf page size prior to compression " : 131072.0, 
            "compressed pages read" : 0.0, 
            "compressed pages written" : 559.0, 
            "page written failed to compress" : 0.0, 
            "page written was too small to compress" : 18.0
        }, 
        "cursor" : {
            "bulk loaded cursor insert calls" : 0.0, 
            "cache cursors reuse count" : 7495.0, 
            "close calls that result in cache" : 0.0, 
            "create calls" : 5.0, 
            "insert calls" : 7154.0, 
            "insert key and value bytes" : 10950567.0, 
            "modify" : 0.0, 
            "modify key and value bytes affected" : 0.0, 
            "modify value bytes modified" : 0.0, 
            "next calls" : 362137.0, 
            "open cursor count" : 0.0, 
            "operation restarted" : 0.0, 
            "prev calls" : 293.0, 
            "remove calls" : 294.0, 
            "remove key bytes removed" : 525.0, 
            "reserve calls" : 0.0, 
            "reset calls" : 18398.0, 
            "search calls" : 291.0, 
            "search near calls" : 3088.0, 
            "truncate calls" : 0.0, 
            "update calls" : 0.0, 
            "update key and value bytes" : 0.0, 
            "update value size change" : 0.0
        }, 
        "reconciliation" : {
            "dictionary matches" : 0.0, 
            "fast-path pages deleted" : 0.0, 
            "internal page key bytes discarded using suffix compression" : 1806.0, 
            "internal page multi-block writes" : 0.0, 
            "internal-page overflow keys" : 0.0, 
            "leaf page key bytes discarded using prefix compression" : 0.0, 
            "leaf page multi-block writes" : 34.0, 
            "leaf-page overflow keys" : 0.0, 
            "maximum blocks required for a page" : 1.0, 
            "overflow values written" : 0.0, 
            "page checksum matches" : 364.0, 
            "page reconciliation calls" : 52.0, 
            "page reconciliation calls for eviction" : 0.0, 
            "pages deleted" : 0.0
        }, 
        "session" : {
            "object compaction" : 0.0
        }, 
        "transaction" : {
            "update conflicts" : 0.0
        }
    }, 
    "nindexes" : 1.0, 
    "indexBuilds" : [

    ], 
    "totalIndexSize" : 151552.0, 
    "indexSizes" : {
        "_id_" : 151552.0
    }, 
    "scaleFactor" : 1.0, 
    "ok" : 1.0
}

```

:::