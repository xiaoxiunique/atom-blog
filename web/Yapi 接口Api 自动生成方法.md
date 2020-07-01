```js
const _ = require('lodash');
const beautify = require('js-beautify').js;
const fs = require('fs');

const content = {
  errcode: 0,
  errmsg: '成功！',
  data: {
    query_path: { path: '/open/oauth2/mobilelogin/login', params: [] },
    edit_uid: 0,
    status: 'undone',
    type: 'static',
    req_body_is_json_schema: true,
    res_body_is_json_schema: true,
    api_opened: false,
    index: 0,
    tag: [],
    _id: 2385,
    method: 'POST',
    catid: 3539,
    title: '手机号登录',
    path: '/open/oauth2/mobilelogin/login',
    project_id: 102,
    req_params: [],
    res_body_type: 'json',
    uid: 49,
    add_time: 1592898935,
    up_time: 1593323214,
    req_query: [],
    req_headers: [
      {
        required: '1',
        _id: '5ef82ece4c163981936c9070',
        name: 'Content-Type',
        value: 'application/json',
      },
    ],
    req_body_form: [],
    __v: 0,
    desc: '',
    markdown: '',
    req_body_other:
      '{"type":"object","title":"empty object","properties":{"authType":{"type":"string","description":"授权类型。枚举类型：ALIYUN、WEIXIN"},"sourceType":{"type":"string","description":"来源类型。枚举类型：SERVICE（服务号 - 极米科技）、WEBSITE（网站）、APPSERVER（应用 - 无屏助手）、MINI_SHOP（小程序 - 商城）、SUPER_APP（Care APP）、MINI_SUPER（Care 小程序）"},"token":{"type":"string","description":"授权Token"},"openId":{"type":"string","description":"三方用户唯一Id"},"unionId":{"type":"string","description":"三方用户联合Id（目前只有微信有）"}},"required":["authType","sourceType","token","openId","unionId"]}',
    req_body_type: 'json',
    res_body:
      '{"type":"object","title":"empty object","properties":{"openId":{"type":"string","description":"平台开放Id"},"accessToken":{"type":"string","description":"访问令牌Token"},"refreshToken":{"type":"string","description":"刷新令牌Token"},"expiresIn":{"type":"string","description":"过期时间"}},"required":["openId","accessToken","refreshToken","expiresIn"]}',
    username: '王启波',
  },
};

const params = _.join(
  _.keys(
    _.get(JSON.parse(_.get(content, 'data.req_body_other')), 'properties')
  ),
  ', \r'
);

const commentsProp = _.get(
  JSON.parse(_.get(content, 'data.req_body_other')),
  'properties'
);
const comments = _.keys(commentsProp).reduce((acc, key) => {
  acc +=
    `* {${commentsProp[key]['type']}} ` +
    key +
    ' ' +
    commentsProp[key]['description'] +
    ' \r';
  return acc;
}, '');

const routerList = _.split(content.data.path, '/');
const methodName =
  routerList[routerList.length - 2] +
  _.upperFirst(routerList[routerList.length - 1]);

const apiTemplte = `
/**
 * ${content.data.title}
 ${comments}
 */
async ${methodName}({
  ${params}
}) {
  const params = {
    ${params}
  };

  return await this.${content.data.method === 'POST' ? 'post' : 'get'}({
    apiUrl: '${content.data.path}',
    params,
  });
}`;

const api = beautify(apiTemplte, {
  indent_size: 2,
  space_in_empty_paren: true,
});

fs.writeFileSync(__dirname + '/src/api.js', api, 'utf-8');
console.info('----- api.js 生成成功 -----');

const ctlTempalte = `
async ${methodName}() {
  const { ctx, service } = this;
  const payload = ctx.request.body || {};
  const res = await service.{user}.${methodName}(payload);
  this.success(ctx, res);
}
`;

fs.writeFileSync(__dirname + '/src/controller.js', ctlTempalte, 'utf-8');
console.info('----- controller.js 生成成功 -----');

const serviceTemplate = `
async ${methodName}(payload) {
  const result = await this.{api}.${methodName}(payload);
  return result;
}`;

fs.writeFileSync(__dirname + '/src/service.js', serviceTemplate, 'utf-8');
console.info('----- service.js 生成成功 -----');

```

