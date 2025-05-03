<script setup>
defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
})
import ContentWindow from './ContentWindow.vue';
</script>
<template>
  <ContentWindow :title="title">
      <p>{{ text }}</p>
  </ContentWindow>
</template>

<style scoped>
p {
  font-size: 1rem;
  text-align: left;

  padding: 2rem 2rem;
}
</style>
