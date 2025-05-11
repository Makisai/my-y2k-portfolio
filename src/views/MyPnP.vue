<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue'

</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <TextWindow
    title="PEN_AND_PAPER_FUN.me"
    text="Ich bin ein großer Fan von Pen and Paper Rollenspielen. Ich habe schon unterschiedliche Systeme ausprobiert und bin aktuell sowohl Spielerin, als auch Spielleiterin für Dungeons & Dragons.
     Ich finde es spannend, in verschiedene Rollen zu schlüpfen und Geschichten gemeinsam mit meinen Freunden zu erzählen."/>
  <ImageWindow title="MY_LARIS.me" image="/assets/images/pnp/Laris_everbleed.PNG" />
  <ImageWindow title="DIE_BIRNENBANDE.me" image="/assets/images/pnp/Birnenbande.PNG" />
  <ImageWindow title="DER_EISNADELGIPFEL_KAMPF.me" image="/assets/images/pnp/Eisnadelgipfel.jpg" />
  <ImageWindow title="HAFEN_MINIATUR.me" image="/assets/images/pnp/bayarea.jpg" />
  <ImageWindow title="KAMPF_GEGEN_ZOMBIES.me" image="/assets/images/pnp/zombiefight.jpg" />
  <ImageWindow title="SHADOWRUN_SAMURAI_NANA.me" image="/assets/images/pnp/Nana_Shadowrun.PNG" />
</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  justify-self: center;
}
</style>
