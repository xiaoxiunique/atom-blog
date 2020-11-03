<template>
  <v-container>
    <p>{{ title }}</p>
  </v-container>
</template>

<script>
export default {
  name: 'Text',
  props: {
    title: Object,
  },
};
</script>
