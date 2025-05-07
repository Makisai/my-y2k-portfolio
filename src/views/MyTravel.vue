<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue'
</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <TextWindow
    title="JAPAN.me"
    text="Moin, Ich bin Julia, eine Software Entwicklerin aus Hamburg.
      Ich habe viele unterschiedliche Hobbys und Interesssen, die sich alle ihren Platz in meiner Freizeit
      erkämpfen müssen. Ich neige dazu, oft alles auf einmal zu vollen und damit dann auch etwas über das Ziel
      hinauszuschießen. Ich hoffe euch gefällt meine Seite, die auch ein bisschen so übertrieben ist wie ich."
  />
</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  justify-self: center;
}
</style>
