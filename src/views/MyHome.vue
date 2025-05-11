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
    text="Moin, Ich bin Julia (she/her), eine Software Entwicklerin aus Hamburg.
      Mit 28 Jahren habe ich den Schritt gewagt ein Studium in der Informatik anzufangen, um in der (Web)-Entwicklung hoffentlich meinen 'Forever Job' zu finden.
      Ich bin ein waschechter Millenial mit vielen unterschiedlichen Hobbys und Interesssen, die alle um einen Platz in meiner Freizeit konkurieren. Ein paar davon stelle ich auf dieser Seite vor.
      Ich neige dazu, oft alles auf einmal zu wollen und damit dann auch etwas über das Ziel hinauszuschießen.
      Ich hoffe dir gefällt meine Seite, die vielleicht auch ein bisschen so übertrieben ist wie ich."
  />
  <ContentWindow title="1001_JOBS.me">
    <ul>
      <li>QA Engineer</li>
      <li>Verkäuferin an der Käse-und Brottheke</li>
      <li>Kinomitarbeiterin</li>
      <li>Assistenz in der Marktforschung</li>
      <li>Praktikantin in der Pressestelle</li>
      <li>Burgerbrater bei McDonalds</li>
      <li>Azubi in der Marktforschung</li>
      <li>Werktstudentin in der Softwareentwicklung</li>

    </ul>
  </ContentWindow>
  <ContentWindow title="FAVORITES.me">
    <ul>
      <li>I ✨like✨: Vue, React, Ruby on Rails, Cypress</li>
      <li>Spachend die ich aus der Uni kenne: Java, Javascript, Python, C#</li>
      <li>Ich finde das agile Manifest super.🔥</li>
      <li>Ich gehe gerne auf Usergroups 👥 und freue mich, dass z.b. die die JS Usergroup in Hamburg wieder da ist.</li>
      <li>Ich mag es, wenn ich mit anderen zusammenarbeiten kann.</li>
      <li>Ich lerne schnell und bin begeisterungsfährig für (mir) neue Technologien. 🎓</li>
      <li>Durch meine Arbeit in der QA und meine Hobbies im Cosplay und der Fotografie, weiß ich, dass der Teufel oft im Detail liegt.</li>
      <li>Ich bin nicht besonders gut darin mich kurz zu fassen.</li>
    </ul>
  </ContentWindow>
  <ContentWindow title="SOCIALS.me">
    <a>Ich bin auch hier zu finden:</a>
    <ul>
      <li><a href="https://github.com/Makisai" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/julia-schmaglowski-2307442bb/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="https://www.xing.com/profile/Julia_Schmaglowski/web_profiles" target="_blank" rel="noopener noreferrer">xing</a></li>
      <li><a href="https://www.instagram.com/my_makisai_me/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>
  </ContentWindow>
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
