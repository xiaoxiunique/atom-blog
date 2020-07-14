当我们在整合 外部 API 的时候，需要统一导出，就会写出如下代码

```js
const UcenterAPI = require('./ucenter');
const UserAPI = require('./user');
const HonorScoreAPI = require('./honorScore');

module.exports = {
  UcenterAPI,
  UserAPI,
  HonorScoreAPI,
};

```

使用

```js
const { UserAPI } = require("./../api");
```



:::warning

这样处理的 不好的一点就是，每次新添加一个 API 就需要 手动的添加一个，这样就太低效了

:::






```js
const _ = require('lodash')
const fs = require('fs')
const path = require('path')

/**
 * 映射 d 文件夹下的文件为模块
 */
const mapDir = d => {
    const tree = {}

    // 获得当前文件夹下的所有的文件夹和文件
    const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())

    // 映射文件夹
    dirs.forEach(dir => {
        tree[dir] = mapDir(path.join(d, dir))
    })

    // 映射文件
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            tree[path.basename(file, '.js')] = require(path.join(d, file))
        }
    })

    return tree
}

// 默认导出当前文件夹下的映射
module.exports = mapDir(path.join(__dirname))

```

:::tip

这样处理之后，就不需要关心导入的问题了，每次都会自动导出。

:::