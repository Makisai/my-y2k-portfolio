<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue'
</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <TextWindow
    title="COSPLAY.me"
    text="Cosplay ist ein Hobby, dass mich schon sehr lange begleitet. Seit dem ich 2007 die Leibziger Buchmesse besucht habe und dort die ersten Cosplayer traf, wollte ich selbst Charktere aus meinen Lieblings Serien, Buchreihen und Videospielen darstellen. Mein erstes Kostüm hat noch meine Oma für mich genäht. Sie war nämlich schneidermeisterin und hatte mir schon immer die Besten Faschingskostüme genäht. Mit der Zeit habe ich mir dann selbst das Nähen beigebracht und mir viel von ihr abgeschaut. Mittlerweile fertige ich zwar nurnoch wenige Kostüme im Jahr an, dafür gebe ich mir aber ganz besonders für Details besondere Mühe und versuche mit jedem Kostüm neue Fertigungsmethoden zu lernen."

  /> <ImageWindow title="SHIPWRECKED_ARIEL.me" image="/assets/images/cosplay/cosplay_ariel.jpg" />
  <ImageWindow title="TLOU_2_ELLIE.me" image="/assets/images/cosplay/cosplay_ellie.jpg" />
  <ImageWindow title="MY_DREAM_COSPLAY.me" image="/assets/images/cosplay/cosplay_serenity.jpg" />
  <ImageWindow title="LAUDNA_AND_IMOGEN.me" image="/assets/images/cosplay/cosplay_Laudna.jpg" />
  <ImageWindow title="SPARKLE_FROG_MARCILLE.me" image="/assets/images/cosplay/cosplay_marcille.jpg" />
  <ImageWindow title="MERMAID_MELODY.me" image="/assets/images/cosplay/cosplay_mermaid.JPG" />
  <ImageWindow title="BISHOJO_SENSHI_SAILOR_NEPTIUNE.me" image="/assets/images/cosplay/cosplay_neptune.jpg" />
  <ImageWindow title="REI_HINO.me" image="/assets/images/cosplay/cosplay_rei.jpg" />
  <ImageWindow title="WHITCH_SABRINA.me" image="/assets/images/cosplay/cosplay_sabrina.jpg" />
  <ImageWindow title="GOOD_OMENS.me" image="/assets/images/cosplay/cosplay_good_omens.jpg" />
  <ImageWindow title="THIS_IS_MY_FAVORITE_GAME_ON_THE_NORMANDY.me" image="/assets/images/cosplay/cosplay_shepard.JPG" />
</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  justify-self: center;
}
</style>
