<script setup>
defineProps({
  title: {
    type: String,
  },
  buttonOnClick: {
    type: Function,
    default: null,
  },
  buttonLabel: {
    type: String,
    default: null,
  },
})
import MyButtons from './MyButtons.vue'
</script>

<template>
  <div class="window">
    <div class="window-header">
      <h1>{{ title }}</h1>
      <div class="minimize-button">_</div>
      <div class="close-button">X</div>
    </div>
    <div class="window-content">
      <h1>Impressum</h1>
      <h2 id="m46">Diensteanbieter</h2>
      <p>Julia Schmaglowski</p>
      <p>Hammer Landstraße 30c</p>
      <p>20537 Hamburg</p>
      <p>Deutschland</p>

      <h2 id="m56">Kontaktmöglichkeiten</h2>
      <p>E-Mail-Adresse: <a href="mailto:Charon_Choki@gmx.de">Charon_Choki@gmx.de</a></p>

      <h2 id="m5234">Vorbehalt der Nutzung für Text und Data Mining</h2>
      <p>
        Vorbehalt der Nutzung für Text und Data Mining: Der Inhaber dieser Website gestattet die
        Nutzung oder das Herunterladen von Inhalten dieser Website durch Dritte für die Entwicklung,
        das Training oder den Betrieb von künstlicher Intelligenz oder anderen maschinellen
        Lernsystemen ("Text und Data Mining") ausschließlich mit ausdrücklicher schriftlicher
        Zustimmung des Inhabers. Ohne eine solche Zustimmung ist es untersagt, die Inhalte für Text
        und Data Mining zu verwenden. Dies gilt auch, wenn auf der Website keine Meta-Angaben
        vorhanden sind, die entsprechende Verfahren aussperren, und selbst dann, wenn Bots, die den
        Zweck haben, die Website zu Zwecken des Text und Data Mining auszulesen, nicht ausgesperrt
        werden.
      </p>

      <h2 id="m65">Haftungs- und Schutzrechtshinweise</h2>
      <p>
        Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem
        aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine
        rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen
        (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von
        Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu
        ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote
        sind freibleibend und unverbindlich.
      </p>
      <p>
        Links auf fremde Webseiten: Die Inhalte fremder Webseiten, auf die wir direkt oder indirekt
        verweisen, liegen außerhalb unseres Verantwortungsbereiches und wir machen sie uns nicht zu
        Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in den verlinkten Webseiten
        aufrufbaren Informationen entstehen, übernehmen wir keine Verantwortung.
      </p>
      <p>
        Urheberrechte und Markenrechte: Alle auf dieser Website dargestellten Inhalte, wie Texte,
        Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte
        (Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen
        unseren Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.
      </p>
      <p>
        Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße
        bemerken, bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und
        Links nach Kenntnisnahme unverzüglich entfernen.
      </p>

      <p class="seal">
        <a
          href="https://datenschutz-generator.de/"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer nofollow"
          >Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a
        >
      </p>
      <MyButtons
        v-if="buttonOnClick"
        :label="buttonLabel"
        :onclick="buttonOnClick"
        class="content-window-button"
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
  grid-template-rows: 1fr;
  grid-row: 1;
  padding: 1rem;
  z-index: 1;
}

.window {
  background-color: var(--y2k-c-blue);
  border-radius: 0.5rem;
  border-color: var(--border-color);
  border-width: 2px;
  border-style: solid;
  z-index: 100;
  grid-column: 1 / -1; /* Überspannt alle Spalten im Grid */
  grid-row: 1 / -1; /* Überspannt alle Zeilen im Grid */
  position: relative;
}

.content-window-button {
  grid-row: 2; /* Button in der letzten Zeile */
  justify-self: center; /* Zentriert den Button horizontal */
  align-self: center; /* Zentriert den Button vertikal */
  z-index: 10; /* Höherer Z-Index, damit der Button über anderen Elementen liegt */
}
</style>
