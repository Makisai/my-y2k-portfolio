<script setup>
import ImageWindow from '@/components/ImageWindow.vue'
import TextWindow from '@/components/TextWindow.vue'
</script>

<template>
  <ImageWindow title="MY_FACE.me" image="assets/images/me.jpg" class="my-face-item" />
  <TextWindow
    title="CODING.me"
    text="Die meisten meiner Coding Projekte sind im Rahmen meines Media System Studiums an der HAW in Hamburg entstanden.
     Dabei habe ich oft die Aufgabe des Designers und Frontend Developers übernommen.
     Mit meinen Hobbyprojekten, wie auch dieser Website, versuche ich mit mir bekannten Technologien am Ball
     zu bleiben, oder einfach mal was neues auszuprobieren."
  />
  <ImageWindow
    title="PHOTOWALK.me"
    image="/assets/images/code/photowalk_logo_small.png"
    text="In diesem Projekt haben wir in einem kleinen 3 Personen Team eine komplette Web Anwendung
      mit Frontend und Backend geschrieben. Man sollte dabei an Fotorallys teilnehmen können und die Fotos dann
      hochladen und mit Freunden teilen können. Da COVID zu dem Zeitpunkt der Entwicklung bereits voll angekommen war, wollten wir
      etwas Entwicklen, dass Freunde zusammenbringt, trotz strenger Social Distancing Maßnahmen. Im Projekt war ich hauptverantwortlich in der Frontendentwicklung, habe mich aber
      auch Themen wie User Authentification und Hosting auseinandergesetzt."
  />
  <ImageWindow
    title="SEASOUNDS.me"
    image="/assets/images/code/logo_croped.png"
    text="Dieses Projekt ist als Gruppenarbeit im Rahmen der Kurses 'Mobile Systeme' entstanden.
      Gemeinsam mit einer Gruppe von anderen Medientechnik Studierenden sollen Projekte zum Thema Leben im
      und unter dem Wasser entstehen. Bei diesem Projekt sollten mit Hilfe einer mobilen App für Smartphons
      Geräusche aus dem Meer in einem Raum abgespielt werden. Auf Grund der technischen Gegebenheiten an der Uni,
      wo die App genutzt werden sollte, haben wir uns dann gegen eine native mobile Anwendung in React native und
      für eine Website in React entschieden. Auch hier war ich Hauptsächlich für die Grafiken und die
      Frontendentwicklung zuständig, habe mich aber auch mit der Websocket Verbindung zum Medienserver mit
      TouchDesigner befasst."
  />
  <ImageWindow
    title="TRASHIE.me"
    image="assets/images/code/trashie_logo.png"
    text="Trashie ist mein erstes Projekt in dem ich Ruby on Rails verwende. Noch ist die Seite ein WiP,
      aber die Idee ist es gemeinsam mit meinen Freunden eine Bibliothek an Trashfilmen aufzubauen,
      auf die wir dann zu unseren Trashfilm Abenden zugreifen können. Schön wäre es auch, wenn wir die Filme
      bewerten könnten um mit der Zeit erkennen zu können, welche art von Trashfilmen genau richtig ist für einen
      Filmanbend mit vielen Lachern."
  />
  <ImageWindow
    title="CATS_AND_DOGS.me"
    image="assets/images/code/CatsAndDogs.png"
    text="Das ist eins der ersten Softwareprojekte an denen ich beteiligt war.
    Als ein Projekt aus einem frühen Semester im Studium, war es uns nicht erlaubt Frameworks wie vue oder react zu benutzten, sondern reines JavaScript, HTML und CSS kennenzulernen.
    Um ein ansprechendes Design zu erstellen, habe ich mich hier zum erstem Mal mit CSS Grid beschqäftigt.
    Auf der Seite geht es übrigends darum, zu bewerten, welche Hunde- oder Katzenbilder am niedlichsten sind.🐈🐕 "
  />
  <ImageWindow
    title="BACHELOR_THESIS_BLATTWERKZEUG.me"
    image="/assets/images/code/Blattwerkzeug.png"
    text="Meine Bachelorarbeit befasst sich mit der Konzeption und Entwicklung eines Filters für
      valide Erweiterungen von unvollständigen Syntaxbäumen in der Lernumgebung BlattWerkzeug.
      Dieser Filter soll die User Experience bei Verwendung des Drag & Drop Editors verbessern.
      Dazu werden in der Konzeption Prinzipien der menschenzentrischen Gestaltung und Usability,
      Nielsen Heuristik, Regeln für gute UX und die Eigenschaften syntaxfreier Programmierung betrachtet.
      Die gewonnenen Erkenntnisse ermöglichen die Erstellung von Profilen der Nutzenden und Anforderungen.
      Der Filter wird vollständig als Feature in das vorhandene BlattWerkzeug Projekt integriert und in Angular
      nach dem Observer Pattern implementiert."
  />
</template>

<style scoped>
.my-face-item {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  justify-self: center;
}
</style>
