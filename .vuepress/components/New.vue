<template>
  <v-container>
    <v-list>
      <v-list-item v-for="item in list" :key="item.itemID">
        <a :href="item.jumpURL" target="_blank">{{ item.title }}</a>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import RecommendAPI from './../api/recommend';
export default {
  name: 'New',
  props: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {
    this.getNews();
  },
  beforeMount() {},
  mounted() {},
  destroyed() {},
  methods: {
    async getNews() {
      const recommendAPI = new RecommendAPI();
      const result = await recommendAPI.getNewRecommend({});
      this.list = result;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
