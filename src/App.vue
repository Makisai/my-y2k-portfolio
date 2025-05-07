<script setup>
import TextWindow from './components/TextWindow.vue'
import ImageWindow from './components/ImageWindow.vue'
import ContentWindow from './components/ContentWindow.vue'
import { ref, onMounted } from 'vue'
import PageHeader from './components/PageHeader.vue'

const randomPositions = ref([])

function generateRandomPositions(count) {
  const positions = []
  const PageWidth = document.documentElement.scrollWidth
  const PageHeight = document.documentElement.scrollHeight

  for (let i = 0; i < count; i++) {
    positions.push({
      top: `${Math.random() * (PageHeight + 200)}px`,
      left: `${Math.random() * (PageWidth - 100)}px`,
    })
  }

  randomPositions.value = positions
}

// Generiere 15 zufällige Positionen beim Laden der Seite
onMounted(() => {
  generateRandomPositions(50)
})
</script>

<template>
  <PageHeader class="header" />

  <div class="wrapper">
    <!-- Stars in Background -->
    <div
      v-for="(position, index) in randomPositions"
      :key="index"
      class="background-image"
      :style="{ top: position.top, left: position.left }"
    ></div>

    <!-- Content Windows -->
    <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
    <h1>Moin, Ich bin's JULIA ✨</h1>
    <TextWindow
      title="WELCOME_TO_MY_HOMEPAGE.me"
      text="Moin, Ich bin Julia, eine Software Entwicklerin aus Hamburg.
      Ich habe viele unterschiedliche Hobbys und Interesssen, die sich alle ihren Platz in meiner Freizeit
      erkämpfen müssen. Ich neige dazu, oft alles auf einmal zu vollen und damit dann auch etwas über das Ziel
      hinauszuschießen. Ich hoffe euch gefällt meine Seite, die auch ein bisschen so übertrieben ist wie ich."
    />
    <ContentWindow title="1001_JOBS.me">
      <ul>
        <li>QA Engineer</li>
        <li>Verkäuferin an der Käse-und Brottheke</li>
        <li>Kinomitarbeiterin</li>
        <li>Assistenz in der Marktforschung</li>
        <li>Burgerbrater bei McDonalds</li>
        <li>Azubi in der Marktforschung</li>
        <li>Wektstudentin in der Softwareentwicklung</li>
        <li>Praktikantin in der Pressestelle</li>
      </ul>
    </ContentWindow>
    <ImageWindow
      title="TRAVEL_JAPAN.me"
      image="/assets/images/DSC01033.jpg"
    />
    <ImageWindow
      title="INSPIRATIONAL_QUOTE.me"
      image="assets/images/freepik-aesthetic-grainy-gradients-notion-cover-202505031625419z2Q.png"
    />

    <ImageWindow
      title="SEASOUNDS.me"
      image="/assets/images/logo_croped.png"
    />
    <ImageWindow
      title="PHOTOWALK.me"
      image="/assets/images/photowalk_logo_small.png"
    />

    <ImageWindow
      title="COSPLAY.me"
      image="/assets/images/DSC01109.jpg"
    />
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
  overflow: hidden;
}

.my-face-item {
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  justify-self: center;
}
.header {
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
  margin: 2rem;
}

h1 {
  color: white;
  font-size: 7rem;
  font-weight: bold;
  text-align: center;
  grid-column: 3 / span 2;
  grid-row: 1 / span 2;
  justify-self: center;
  align-self: center;
  text-shadow: 0.5rem 0.5rem var(--color-box-shadow);
}
</style>
