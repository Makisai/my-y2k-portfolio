<script setup>
import TextWindow from './components/TextWindow.vue'
import ImageWindow from './components/ImageWindow.vue'
import MyButtons from './components/MyButtons.vue';
</script>

<template>
  <div class="wrapper">
    <TextWindow
      title="WELCOME_TO_MY_HOMEPAGE.me"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      :buttonOnClick="() => { console.log('Button clicked!') }"
      buttonLabel="CLICK ME"
      />
    <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg"/>
    <ImageWindow
      title="INSPIRATIONAL_QUOTE.me"
      image="assets/images/freepik-aesthetic-grainy-gradients-notion-cover-202505031625419z2Q.png"
    />
    <MyButtons label="FUN FUN" />
  </div>
</template>
