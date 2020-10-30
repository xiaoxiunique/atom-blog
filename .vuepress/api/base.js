import axios from './../plugins/axios';

class Base {
  constructor() {
    this.serverBaseURL = '';
    this.timeOut = 2000;
  }

  async get({ path, params = {}, headers = {}, handleException = null }) {
    const URL = this.serverBaseURL + path;

    console.log('------- req URL -------', URL);
    console.log('------- req params -------', JSON.stringify(params));

    const result = await axios.get(URL, {
      method: 'GET',
      params,
      headers,
    });

    handleException && handleException(result);

    console.log('------- res data -------', JSON.stringify(result));
    return result && result.data;
  }
}

export default Base;
