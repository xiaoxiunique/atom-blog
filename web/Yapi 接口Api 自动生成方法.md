```js
const _ = require("lodash");
const beautify = require("js-beautify").js;
const fs = require("fs");
const os = require('os');
const axios = require("axios");


const CONFIG = {
  REQUEST_TOKEN: "_yapi_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjcwLCJpYXQiOjE1OTM2MTY1NzIsImV4cCI6MTU5NDIyMTM3Mn0.jfGXwoKwY1s5fO1t8E6uYVEFTA-jx34dGdEGvXYzhLw; _yapi_uid=70",
  SERVICE_NAME: "user",
  API_NAME: "honorScoreAPI",
};


(async function () {
  var config = {
    method: "get",
    url:
      "http://yapi.i.xgimi.com/api/interface/list_cat?page=1&limit=20&catid=1823",
    headers: {
      Cookie: CONFIG.REQUEST_TOKEN
    },
  };


  const apiIdList = (await axios(config)).data.data.list.map(T => T._id);
  apiIdList.forEach(async apiId => {
    const content = await axios({
      method: "get",
      url:
          "http://yapi.i.xgimi.com/api/interface/get?id=" + apiId,
      headers: {
        Cookie: CONFIG.REQUEST_TOKEN
      },
    })
    await generateApi(content.data);
  })

})();



async function generateApi(content) {
  // 读取得到所有的请求参数
  const params = _.join(
      _.keys(
          _.get(JSON.parse(_.get(content, "data.req_body_other")), "properties")
      ),
      ", \r"
  );


  // 生成评论
  const commentsProp = _.get(
      JSON.parse(_.get(content, "data.req_body_other")),
      "properties"
  );
  const comments = _.keys(commentsProp).reduce((acc, key) => {
    acc +=
        `* {${commentsProp[key]["type"]}} ` +
        key +
        " " +
        commentsProp[key]["description"] +
        " \r";
    return acc;
  }, "");

  // 读取路由
  const routerList = _.split(content.data.path, "/");

  // 生成方法名称
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
  
    return await this.${content.data.method === "POST" ? "post" : "get"}({
      apiUrl: '${content.data.path}',
      params,
    });
  }`;

  const api = beautify(apiTemplte, {
    indent_size: 2,
    space_in_empty_paren: true,
  });

  fs.appendFileSync(__dirname + "/src/api.js", api + os.EOL, "utf-8");
  console.info("----- api.js 生成成功 -----");

  const ctlTempalte = `
  async ${methodName}() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const res = await service.${CONFIG.SERVICE_NAME}.${methodName}(payload);
    this.success(ctx, res);
  }
  `;

  fs.appendFileSync(__dirname + "/src/controller.js", ctlTempalte + os.EOL, "utf-8");
  console.info("----- controller.js 生成成功 -----");

  const serviceTemplate = `
  async ${methodName}(payload) {
    const result = await this.${CONFIG.API_NAME}.${methodName}(payload);
    return result;
  }`;

  fs.appendFileSync(__dirname + "/src/service.js", serviceTemplate + os.EOL, "utf-8");
  console.info("----- service.js 生成成功 -----");
}

```

