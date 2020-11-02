import Base from './base';
import ReqConfAPI from './reqConf';

class Recommend extends Base {
  constructor(args) {
    super(args);
    this.serverBaseURL = 'http://new.i.atips.cn/api/v1';
    this.pathURL = '/commonRecommands';
    this.reqConfAPI = new ReqConfAPI();
  }

  async getRecommendByType(params) {
    if (!params.type) {
      console.error('----- [error] type is not found -----');
      return;
    }

    const URL = `${this.serverBaseURL}/commonRecommands/types/${params.type}`;
    const rs = await this.axios.get(URL, {
      params,
    });

    return rs && rs.data;
  }

  convertData(list, parseJSON) {
    const keys = Object.keys(parseJSON);
    return [...list].map((item) => {
      return keys.reduce((acc, key) => {
        this._.set(acc, key, _.get(item, parseJSON[key]));
        return acc;
      }, {});
    });
  }

  async getNewRecommend(params) {
    const NEW_RECOMMEND_TYPE = 'newRecommend';
    params.type = NEW_RECOMMEND_TYPE;

    const parseJSON = await this.reqConfAPI.getReqConfByType(
      NEW_RECOMMEND_TYPE
    );

    const recommendList = await this.getRecommendByType(params);
    const rs = this.convertData(recommendList.data.content, parseJSON);
    return rs;
  }
}

export default Recommend;
