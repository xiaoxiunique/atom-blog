<template>
  <v-container>
    <RecommendParent type="hotSearch">
      <template v-slot:default="data">
        <TText :title="data.item.title"></TText>
      </template>
    </RecommendParent>
  </v-container>
</template>

<script>
import RecommendParent from './RecommendParent.vue';
import TText from './T/Text.vue';
export default {
  name: 'TZhihuHotWord',
  components: {
    RecommendParent,
    TText,
  },
};
</script>
