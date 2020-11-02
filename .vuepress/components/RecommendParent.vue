<template>
  <v-container>
    <v-list>
      <v-list-item v-if="list.length === 0">
        <v-progress-circular
          :size="50"
          color="amber"
          indeterminate
        ></v-progress-circular>
      </v-list-item>
      <v-list-item v-for="item in list" :key="item.itemID">
        <slot v-bind:item="item"></slot>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import RecommendAPI from './../api/recommend';
export default {
  name: 'RecommendParentComponent',
  props: {},
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const recommendAPI = new RecommendAPI();
      const result = await recommendAPI.getNewRecommend({});
      this.list = result;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
