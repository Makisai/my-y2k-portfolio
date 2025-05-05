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

// Event-Handler für Hover
function setRandomHoverColor(event) {
  hoverColor.value = getRandomColor()
  event.target.style.backgroundColor = hoverColor.value
  event.target.style.color = 'var(--color-background)' // Textfarbe ändern
}

// Event-Handler für das Entfernen des Hover-Effekts
function resetHoverColor(event) {
  event.target.style.backgroundColor = 'transparent'
  event.target.style.color = 'var(--color-text)' // Textfarbe zurücksetzen
}
</script>

<template>
  <div class="page-header">
    <a
      v-for="(category, index) in ['Cosplay', 'Travel', 'Code', 'Art', 'P&P']"
      :key="index"
      @mouseover="setRandomHoverColor"
      @mouseleave="resetHoverColor"
    >
      {{ category }}
    </a>
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
.page-header a {
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
