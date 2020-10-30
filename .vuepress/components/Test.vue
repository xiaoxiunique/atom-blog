<template>
  <v-container>
    <v-list>
      <v-list-item class="elevation-1" v-for="item in list" :key="item.id">{{
        item.full_name
      }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import GithubAPI from './../api/github';
export default {
  name: 'Test',

  props: {},
  data() {
    return {
      list: null,
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  async created() {
    await this.getStaredList();
  },
  beforeMount() {},
  mounted() {},
  destroyed() {},
  methods: {
    async getStaredList() {
      const githubAPI = new GithubAPI();
      console.log(JSON.stringify(githubAPI));
      this.list = await githubAPI.getStaredList({
        username: 'xiaoxiunique',
        page: 1,
      });
    },
  },
};
</script>
