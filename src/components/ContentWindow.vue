<script setup>
defineProps({
  title: {
    type: String,
  },
  width: {
    type: String,
    default: 'fit-content',
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
  <div class="window" :style="{ width: width }">
    <div class="window-header">
      <h1>{{ title }}</h1>
      <div class="minimize-button">_</div>
      <div class="close-button">X</div>
    </div>
    <div class="window-content">
      <slot></slot>
      <MyButtons
        v-if="buttonLabel"
        :label="buttonLabel"
        :buttonOnClick="buttonOnClick"
        class ="content-window-button"
      />
    </div>
  </div>
</template>

<style scoped>
.window-header h1 {
  font-weight: bold;
  font-size: 1rem;
  text-align: left;
}
.window-header {
  grid-row: 1; /* Header in der ersten Zeile */
  border-bottom-color: var(--border-white);
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.25rem 0.25rem;
  display: flex;
  background-color: white;
}

.close-button {
  margin-left: 0.25rem;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.minimize-button {
  margin-left: auto;
  color: var(--color-text);
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.window-content {
  display: grid;
  grid-template-rows: 1fr;/* Drei Zeilen: Header, Content, Footer */
  grid-row: 1; /* Content in der mittleren Zeile */
  padding: 1rem;
  z-index: 1;
}

.window {
  background-color: var(--y2k-c-blue);
  border-radius: 0.5rem;
  box-shadow: 10px 10px var(--color-box-shadow);
  border-color: var(--border-color);
  border-width: 2px;
  border-style: solid;
  z-index: 0;
  grid-column: span 1;
}

.content-window-button {
  grid-row: 2; /* Button in der letzten Zeile */
  justify-self: center; /* Zentriert den Button horizontal */
  align-self: center; /* Zentriert den Button vertikal */
  z-index: 10; /* Höherer Z-Index, damit der Button über anderen Elementen liegt */}
</style>
