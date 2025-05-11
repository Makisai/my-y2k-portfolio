<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue';
import ContentWindow from '@/components/ContentWindow.vue';
</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <TextWindow
    title="ART.me"
    text="Hier sammle ich unterschiedich Sachen, die ich gemalt, gebastelt und genäht habe. Ich gucker mir immer mal wieder neue Crafts an, die mich gerade interessieren."
  />
  <ContentWindow title="ART.me">
    <ul>
      <li>Digitales Zeichnen</li>
      <li>Malen mit Aquarellfarben</li>
      <li>Malen mit Arcylfarben</li>
      <li>Häkeln</li>
      <li>Nähen</li>
      <li>3-D Druck</li>
      <li>Scrapbooking</li>
    </ul>
    </ContentWindow>
  <ImageWindow title="PIZZA_WIZZARD_TOWER.me" image="assets/images/art/pizza_center.jpg" text="Eine Spielbrett Illustration für ein Uniprojekt"/>
  <ImageWindow title="LARIS_EVERBLEED.me" image="assets/images/art/Laris Everbleed.jpg" text="Für die Charaktere aus der erste D&D Runde, die ich mit Freunden gespielt habe, wollte ich für jeden ein kleines Bild malen. Dieses Bild Repräsentiert meine Bardin Laris. In ihrem roten Haar trägt die einen Kranz aus Vergissmeinicht und Ranunkeln. Sie spielt die Geige und ist als Tochter von zwei Gastwirkten im Wirtshaus 'Drei Kronen' aufgewachsen. "/>
  <ImageWindow title="MIRAEL_ERYN.me" image="assets/images/art/Mirael_Eryn.jpg" text="Miraelle ist die elfische Mönchin meiner Freundin Michelle. Mirael ist in einem Waldkloster aufgewachsen und hat dort gelernt im einklang mit den 4 Elementen zu leben. Ihre Lieblingsfarbe ist gelb und ihr Lieblingsgefärtin ist Laris. 🔥💧🎶🎻💨🪨"/>
  <ImageWindow title="REN_LOCKE.me" image="assets/images/art/Ren_Locke_blu.jpg" text="Die halbefische Rangerin Ren wurde von meiner Freundin Lisa gespielt. Sie wuchs im Zirkus aus und trifft mit ihrem Pfeil fast immer ins Herz der Gegner. Begleitet wird sie von ihrem Riesenwiesel Blu, dass seinen Namen wegen seines blau schimmernden Fells bekommen hat."/>
  <ImageWindow title="NOUVIS_NERERIS.me" image="assets/images/art/Nouvis_Neriris.jpg" text="Nouvis ist wie Ren auch ein Halbelfe. Er wird von meinem Freund Mike gespielt und ist einer der beiden Druiden in unserer Abendteurer Runde. Nouvis hat eine Starke Verbindung zum Mond 🌙 und kann sich in einen ausgewachsenen Direwolf verwandeln."/>
  <ImageWindow title="LEM_TEEBLATT.me" image="assets/images/art/Lem_Teeblatt.jpg" text="Lem ist der zweite Druide im Bunde. Er hat sich der Gruppe angeschlossen, als diese berits einige Zeit zusammen reisten. Wir haben den lustigen kleinen Halbling mit der vorliebe für Pilze und Pfeifenkraut sehr schnell ins Herz geschlossen und waren um so trauriger, als er uns nach einiger Zeit wieder verließ um wieder im Wald zu leben."/>
  <ImageWindow title="MOTHER_OF_PROGRAMMING.me" image="assets/images/art/Mother_ada_shirt.jpg" text="Das ist ein T-Shirt, dass ich 'gestaltet' habe. Eigentlich wollte ich nur einen großen Druck von diesem ikonischem Bild von Ada Lovelace auf dem Shirt haben, aber dann habe ich noch die Buchstaben gefunden. Ich dachte mit ein einaches 'MOTHER' passt sehr gut zu Ada. Ada Lovelace in diesem Kleid gehört übrigens auch zu den Cosplays, die ich unbedingt umsetzten möchte 😉"/>
  <ImageWindow title="PIZZA_WIZZARD_HOPFEN.me" image="assets/images/art/pizza_hopfen.PNG" text="Eine Illustration, die ich für ein Brettspiel Uniprojekt gemacht habe."/>
  <ImageWindow title="STICKER_BRIEFMARKE.me" image="assets/images/art/marcille_sticker.PNG" text="Die Illustration für einen Sticker, den ich auf Conventions an andere Cosplayer verteilen kann, wenn ich mein Marcille Frosch Kostüm trage. Das Bild ist eine Referenz auf die Stelle im Manga an dem das Kostüm getragen wird."/>
  <ImageWindow title="KASETTE_PORTEMO_DINGSDA.me" image="assets/images/art/purse_makerfaire.jpg" text="Ein upcycling Projekt, dass ich bei einem Workshop auf der Makerfaire in Hannover gemacht habe."/>
</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  justify-self: center;
}
</style>
