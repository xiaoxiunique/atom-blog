在使用 Egg Controller 返回数据的时候，常常会遇到这样的情况，就是所有的请求都需要 

```js
this.ctx.body = {
	content;
}

this.ctx.status = 200;
```

每次返回都需要这样写。个人感觉真的是很不优雅。



### 添加 响应中间件处理这个问题

./app/middleware/response_handler.js

```js
'use strict';

/**
 * 处理 controller 中直接 return 的数据
 * @returns {function(...[*]=)}
 */
module.exports = () => async (ctx, next) => {
  const result = await next();
  if (result !== undefined) {
    success({ ctx, result })
  }
};

function success({ ctx = this.ctx, result, code = 'ok', message = 'ok' }) {
  if (Array.isArray(result)) {
    result = { list: result };
  }
  ctx.body = {
    code,
    message,
    data: result,
  };
  ctx.status = 200;
}

```

将次中间件 放在最后一个执行，这样就可以 判断如果直接是 return 的数据，这样也能直接 将其包装起来



如下

IndexController

```js
async index() {
    return [1, 2, 3, 4, 5];
}
```



响应

```json
{
    "code": "ok",
    "message": "ok",
    "data": {
        "list": [
            1,
            2,
            3,
            4,
            5
        ]
    }
}
```

