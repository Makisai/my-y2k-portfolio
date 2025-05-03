<script setup>
defineProps({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
})
import ContentWindow from './ContentWindow.vue';
</script>
<template>
  <ContentWindow :title="title" class="image-window">
      <img :src="image" alt="Image" class="image"/>
  </ContentWindow>
</template>

<style scoped>
.image{
  width: 80%;
  height: auto;
  border-radius: 0.5rem;
  display: block;
  margin: 2rem auto;
  border-style: solid;
  border-color: white;
  border-width: 0.5rem;
}
 .image-window {
  height: fit-content;
 }

</style>
