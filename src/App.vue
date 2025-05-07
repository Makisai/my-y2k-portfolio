<script setup>
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
    <RouterView /> 
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
</style>
