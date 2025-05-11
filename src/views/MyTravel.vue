<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue'
</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <TextWindow
    title="Travel.me"
    text="Ich verreise gerne und entdecke neue Städte. Ich finde Architektur und Gärten immer besonders spannend.
      Das bisherige unbeschrtrittene Reisehighlight war auf jeden Fall Japan. Ich hoffe, dass ich in Zukunft noch mehr Orte von der Bucketlist angehen kann. Besonders Rom währe mal schön zu bereisen."
  />
  <ImageWindow title="TOKIO_TOWER_DREAMS.me" image="/assets/images/travel/japan_tokio_tower.jpg" text="Tokio Tower 2023"/>
  <ImageWindow title="CYBER_CITY.me" image="/assets/images/travel/japan_asakusa.jpg" text="Asakusa bei Nacht 2023"/>
  <ImageWindow title="FUJI_SAN.me" image="/assets/images/travel/japan_Fuji_san_stair.jpg" text="Fuji-san auf der Fahrt von Tokio nach Kyoto 2023"/>
  <ImageWindow title="OH_DEER.me" image="/assets/images/travel/japan_nara.JPG" text="Ich und die Rehe in Nara 2023"/>
  <ImageWindow title="GOTTA_CATCH_THEM_ALL.me" image="/assets/images/travel/japan_pokemon.jpg" text="Meine Starter 2023"/>
  <ImageWindow title="TEAMLAB.me" image="/assets/images/travel/japan_teamlab.JPG" text="teamlab planets 2023"/>
  <ImageWindow title="STRAND.me" image="/assets/images/travel/strand.jpg" text="Ostseestrand 2024"/>
  <ImageWindow title="APFELBLUETE.me" image="/assets/images/travel/altesLand_1.JPG" text="Apfelblüte im Alten Land 2025"/>
  <ImageWindow title="ROSA_APFEL.me" image="/assets/images/travel/altesLand_2.JPG" text="Rosa Zieräpfel im Alten Land 2025"/>
  <ImageWindow title="OLD_YORK.me" image="/assets/images/travel/altesLand_3.JPG" text="Apfelblüte auf dem Herzapfelhof 2025"/>


</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  justify-self: center;
}
</style>
