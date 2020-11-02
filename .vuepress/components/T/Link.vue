<template>
  <v-container>
    <a :href="jumpURL"> {{ title }}</a>
  </v-container>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: String,
    jumpURL: String,
  },
  data() {
    return {};
  },
  computed: {},
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
