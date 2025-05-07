<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue'
import ContentWindow from '@/components/ContentWindow.vue'
</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <h1>Moin, Ich bin's JULIA ✨</h1>
  <TextWindow
    title="WELCOME_TO_MY_HOMEPAGE.me"
    text="Moin, Ich bin Julia, eine Software Entwicklerin aus Hamburg.
      Ich habe viele unterschiedliche Hobbys und Interesssen, die sich alle ihren Platz in meiner Freizeit
      erkämpfen müssen. Ich neige dazu, oft alles auf einmal zu vollen und damit dann auch etwas über das Ziel
      hinauszuschießen. Ich hoffe euch gefällt meine Seite, die auch ein bisschen so übertrieben ist wie ich."
  />
  <ContentWindow title="1001_JOBS.me">
    <ul>
      <li>QA Engineer</li>
      <li>Verkäuferin an der Käse-und Brottheke</li>
      <li>Kinomitarbeiterin</li>
      <li>Assistenz in der Marktforschung</li>
      <li>Burgerbrater bei McDonalds</li>
      <li>Azubi in der Marktforschung</li>
      <li>Wektstudentin in der Softwareentwicklung</li>
      <li>Praktikantin in der Pressestelle</li>
    </ul>
  </ContentWindow>
  <ImageWindow title="TRAVEL_JAPAN.me" image="/assets/images/DSC01033.jpg" />
  <ImageWindow
    title="INSPIRATIONAL_QUOTE.me"
    image="assets/images/freepik-aesthetic-grainy-gradients-notion-cover-202505031625419z2Q.png"
  />

  <ImageWindow title="SEASOUNDS.me" image="/assets/images/logo_croped.png" />
  <ImageWindow title="PHOTOWALK.me" image="/assets/images/photowalk_logo_small.png" />

  <ImageWindow title="COSPLAY.me" image="/assets/images/DSC01109.jpg" />
</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  justify-self: center;
}

h1 {
  color: white;
  font-size: 7rem;
  font-weight: bold;
  text-align: center;
  grid-column: 3 / span 2;
  grid-row: 1 / span 2;
  justify-self: center;
  align-self: center;
  text-shadow: 0.5rem 0.5rem var(--color-box-shadow);
}
</style>
