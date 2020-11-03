<template>
  <v-container>
    <RecommendParent type="mubuRecommend">
      <template v-slot:default="data">
        <TLink
          :title="data.item.title"
          :baseURL="data.item.baseURL"
          :jumpURL="data.item.jumpURL"
        ></TLink>
      </template>
    </RecommendParent>
  </v-container>
</template>

<script>
import RecommendParent from './RecommendParent.vue';
import TLink from './T/Link.vue';
export default {
  name: 'TNew',
  components: {
    RecommendParent,
    TLink,
  },
};
</script>
