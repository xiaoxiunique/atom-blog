<template>
  <v-container>
    <a :href="linkURL" target="_blank"> {{ title }}</a>
  </v-container>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: Object,
    jumpURL: Object | Number,
    baseURL: Object,
  },
  data() {
    return {};
  },
  computed: {
    linkURL() {
      return (this.baseURL || '') + this.jumpURL;
    },
  },
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<style lang="stylus" scoped></style>
