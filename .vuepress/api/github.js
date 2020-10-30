import Base from './base';

class Github extends Base {
  constructor(args) {
    super(args);
    this.serverBaseURL = 'https://api.github.com';
  }

  async getStaredList({ username, page }) {
    console.log(2);
    const rs = await this.get({
      path: `/users/${username}/starred`,
      headers: { Accept: 'application/vnd.github.v3+json' },
      params: { per_page: 10, page },
    });
    return rs;
  }
}

export default Github;
