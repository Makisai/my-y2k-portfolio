<script setup>
import { ref } from 'vue'

// Liste der verfügbaren Farben
const y2kColors = [
  'var(--y2k-c-pink)',
  'var(--y2k-c-yellow)',
  'var(--y2k-c-green)',
  'var(--y2k-c-blue)',
  'var(--y2k-c-purple)',
]

// Funktion zur Auswahl einer zufälligen Farbe
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * y2kColors.length)
  return y2kColors[randomIndex]
}

// Reactive Variable für die Hintergrundfarbe
const hoverColor = ref(null)
const activeLink = ref(null)

// Event-Handler für Hover
function setRandomHoverColor(event) {
  if (activeLink.value === event.target) return // Verhindert Überschreiben der aktiven Farbe
  hoverColor.value = getRandomColor()
  event.target.style.backgroundColor = hoverColor.value
}

// Event-Handler für das Entfernen des Hover-Effekts
function resetHoverColor(event) {
  if (activeLink.value === event.target) return // Verhindert Zurücksetzen der aktiven Farbe
  event.target.style.backgroundColor = 'transparent'
}

// Event-Handler für Klick
function setActiveLink(event) {
  if (activeLink.value) {
    // Entferne die Hintergrundfarbe des vorherigen aktiven Links
    activeLink.value.style.backgroundColor = 'transparent'
  }
  // Setze den neuen aktiven Link
  activeLink.value = event.target
  activeLink.value.style.backgroundColor = hoverColor.value}
</script>

<template>
  <div class="page-header">
    <router-link
      v-for="(category, index) in ['','Cosplay', 'Travel', 'Code', 'Art', 'P&P']"
      :key="index"
      :to="`/${category.toLowerCase()}`"
      class="header-link"
      @mouseover="setRandomHoverColor"
      @mouseleave="resetHoverColor"
      @click="setActiveLink"
    >
      {{ category }}
  </router-link>
  </div>
</template>

<style scoped>
.page-header {
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
}
.header-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
}
</style>
