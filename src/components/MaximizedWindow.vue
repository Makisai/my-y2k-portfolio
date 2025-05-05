<script setup>
defineProps({
  title: {
    type: String,
  },
  buttonOnClick:{
    type: Function,
    default: null,
  },
  buttonLabel:{
    type: String,
    default: null,
  },
})
import MyButtons from './MyButtons.vue';
</script>

<template>
  <div class="modal-overlay">
  <div class="window">
    <div class="window-header">
      <h1>{{ title }}</h1>
      <div class="minimize-button">_</div>
      <div class="close-button">X</div>
    </div>
    <div class="window-content">
      <slot></slot>
      <MyButtons
        v-if="buttonOnClick"
        :label="buttonLabel"
        :onclick="buttonOnClick"
        class ="content-window-button"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  height: calc(100% - 5rem);
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: start center;
  z-index: 25;
}

.window {
  background-color: var(--y2k-c-blue);
  border-radius: 0.5rem;
  border-color: var(--border-color);
  border-width: 2px;
  border-style: solid;
  z-index: 100;
  position: relative;
  width: 90%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 2rem;
  width: 95%;
  height: 95%
}

.window-header {
  grid-row: 1 / -5; /* Header in der ersten Zeile */
  border-bottom-color: var(--border-white);
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.25rem 0.25rem;
  display: flex;
  background-color: white;
}

.window-header h1 {
  font-weight: bold;
  font-size: 1rem;
  text-align: left;
}

.window-content {
  display: grid;
  grid-template-rows: 1fr;
  grid-row: 1;
  padding: 1rem;
  z-index: 1;
}

.content-window-button {
  grid-row: 2; /* Button in der letzten Zeile */
  justify-self: center; /* Zentriert den Button horizontal */
  align-self: center; /* Zentriert den Button vertikal */
  z-index: 10; /* Höherer Z-Index, damit der Button über anderen Elementen liegt */}
</style>
