<script setup>
defineProps({
  title: {
    type: String,
  },
  image: {
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
  <ContentWindow class="image-window" :title="title" :buttonLabel="buttonLabel" :buttonOnClick="buttonOnClick" :text="text">
      <img :src="image" alt="Image" class="image"/>
      <p v-if = "text" class = "image-text">{{ text }}</p>
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

.image-text{
  font-size: 1rem;
  text-align: center;
  padding: 0rem 2rem;
}

</style>
