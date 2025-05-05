<script setup>
import TextWindow from './components/TextWindow.vue'
import ImageWindow from './components/ImageWindow.vue'
import MyButtons from './components/MyButtons.vue'
import MaximizedWindow from './components/MaximizedWindow.vue'
import { ref, onMounted } from 'vue'
import PageHeader from './components/PageHeader.vue'

const randomPositions = ref([])
const isMaximizedWindowOpen =ref(false)

function generateRandomPositions(count) {
  const positions = []
  const PageWidth = document.documentElement.scrollWidth
  const PageHeight = document.documentElement.scrollHeight

  for (let i = 0; i < count; i++) {
    positions.push({
      top: `${Math.random() * (PageHeight + 200)}px`,
      left: `${Math.random() * (PageWidth- 100)}px`,
    })
  }

  randomPositions.value = positions
}

// Generiere 15 zufällige Positionen beim Laden der Seite
onMounted(() => {
  generateRandomPositions(50)
})

function openMaximizedWindow() {
  isMaximizedWindowOpen.value = true
}

function closeMaximizedWindow() {
  isMaximizedWindowOpen.value = false
}


</script>

<template>
  <PageHeader class="header"/>

  <div class="wrapper">
    <!-- Stars in Background -->
    <div
      v-for="(position, index) in randomPositions"
      :key="index"
      class="background-image"
      :style="{ top: position.top, left: position.left }"
    ></div>

    <!-- Content Windows -->
      <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg"  class="my-face-item"/>
      <TextWindow
      title="WELCOME_TO_MY_HOMEPAGE.me"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      :buttonOnClick="
        () => {
          console.log('Button clicked!')
        }
      "
      buttonLabel="CLICK ME"
    />
    <ImageWindow
      title="INSPIRATIONAL_QUOTE.me"
      image="assets/images/freepik-aesthetic-grainy-gradients-notion-cover-202505031625419z2Q.png"
    />
    <MyButtons label="FUN FUN" />
    <ImageWindow
      title="SEASOUNDS.me"
      image="/assets/images/logo_croped.png"
      :buttonOnClick="openMaximizedWindow"
      buttonLabel="OPEN ME"
    />
    <ImageWindow
      title="TRAVEL_JAPAN.me"
      image="/assets/images/DSC01033.jpg"
      :buttonOnClick="
        () => {
          console.log('Button clicked!')
        }
      "
      buttonLabel="CLICK ME"
    />
    <ImageWindow
      title="COSPLAY.me"
      image="/assets/images/DSC01109.jpg"
      :buttonOnClick="
        () => {
          console.log('Button clicked!')
        }
      "
      buttonLabel="CLICK ME"
    />
    <MaximizedWindow title="MaxiWindow" button-label="Close me" :buttonOnClick="closeMaximizedWindow" v-if="isMaximizedWindowOpen"></MaximizedWindow>
  </div>
</template>

<style scoped>

.background-image {
  position: absolute;
  width: 100px; /* Breite des Hintergrundbildes */
  height: 100px; /* Höhe des Hintergrundbildes */
  background-image: url('/assets/images/star (2).png'); /* Pfad zum Bild */
  background-size: cover;
  z-index: -1; /* Bilder hinter den anderen Elementen platzieren */
  overflow: hidden;}

.my-face-item{
    grid-row: 1 / span 2 ;
    grid-column: 1 /span  2 ;
    justify-self: center;
  }
.header{
    grid-column-start: 1; /* Header über alle Spalten spannen */
    grid-column-end: 5;
    margin-bottom: 2rem;
    z-index: 30;
    height: 5rem;
  }

.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 2rem;	 ;
}
</style>
