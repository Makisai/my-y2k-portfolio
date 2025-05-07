<script setup>
defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  buttonOnClick: {
    type: Function,
    default: null,
  },
  buttonLabel: {
    type: String,
    default: null,
  },
})
import ContentWindow from './ContentWindow.vue';

</script>
<template>
  <ContentWindow :title="title" :buttonLabel="buttonLabel" :buttonOnClick="buttonOnClick">
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
