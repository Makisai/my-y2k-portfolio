<script setup>
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  onclick: {
    type: Function,
    default: null,
  },
})

const gradientPosition = ref({ x: '50%', y: '50%' })/*mit ref wird die Position des Gradients dynamisch aktualisiert*/

function updateGradientPosition(event) {
  const rect = event.target.getBoundingClientRect()
  gradientPosition.value = {
    x: `${((event.clientX - rect.left) / rect.width) * 100}%`,
    y: `${((event.clientY - rect.top) / rect.height) * 100}%`,
  }
}
</script>

<template>
  <button
    class="my-button"
    @click="onclick"
    @mousemove="updateGradientPosition"
    :style="{
      background: `radial-gradient(circle at ${gradientPosition.x} ${gradientPosition.y}, var(--y2k-c-pink), var(--y2k-c-purple))`,
    }"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.my-button {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-style: outset;
  border-color: white;
  border-width: 5px;
  box-shadow: 5px 5px 0 2px var(--color-text);
  outline: var(--color-text);
  outline-width: 2px;
  outline-style: outset;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease; /* Sanfter Übergang */
  overflow: hidden; /* Verhindert, dass der Gradient über den Button hinausgeht */
}

.my-button:active {
outline-style: inset;
border-style: inset;
box-shadow: none
}
</style>
