<template>
  <div class="home">
    <h1>Expertise in ihrer schönsten Form:</h1>
    <div class="team-container">
      <teamsection
        imgname="monikaknauer.png"
        forename="Monika"
        surname="Knauer-Walter"
        :expertises="[
          'Frau vom Fach für Kommunikations- und Klärungsprozesse',
          'Business-Mediator NCRC und Mediatorin BM',
          'Beraterin, Coach und Trainerin für Organisationen, Führungskräfte und Teams - Schwerpunkt soziale Einrichtungen',
          'Coach für Einzelpersonen, Paare und Familien',
          'Spezialistin für Coaching mit Pferd',
          'Entwicklungsbegleiterin mit Pferd für Kinder und ihre Familien',
          'Mediatorin Erziehung und Bildung BM',
          'Beraterin Change-Management',
        ]"
        :socialMedia="[
          {
            link: 'https://de.linkedin.com/in/monika-knauer-walter-621925118',
            icon: 'linkedin.png',
          },
          {
            link: 'https://coaches.xing.com/profile/Monika_KnauerWalter',
            icon: 'xing-icon.png',
          },
        ]"
      />

      <teamsection
        imgname="klemenswalter.png"
        forename="Klemens"
        surname="Walter"
        :expertises="[
          'Mann vom Fach für Kommunikations- und Zusammenarbeitsprozesse',
          'systemischer Organisations- und Prozessberater',
          'Berater, Coach und Trainerfür Organisationen, Unternehmen, Teams und Einzelpersonen',
          'Berater Change Management',
          'On-Bike-Coach',
          'Mediator',
          'Berater, Architekt und Moderator für Grossgruppenveranstaltungen',
          'zertifiziert in Personaldiagnostik',
        ]"
        :socialMedia="[
          {
            link: 'https://de.linkedin.com/in/klemens-walter-a1788053',
            icon: 'linkedin.png',
          },
          {
            link: 'https://www.xing.com/profile/Klemens_Walter',
            icon: 'xing-icon.png',
          },
          {
            link: 'https://www.strava.com/athletes/11246776?hl=de-DE',
            icon: 'strava.png',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Teamsection from "@/components/Querkraft/Teamsection.vue";

export default {
  name: "Querkraft",
  components: {
    Teamsection,
  },
};
</script>

<style scoped>
.team-container {
  background-image: linear-gradient(to bottom, white 180px, #f1f1f1 180px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
}

h1 {
  margin-top: 40px;
  color: #53555a;
  font-size: 2.5em;
}

@media only screen and (max-width: 768px) {
  .team-container {
    flex-direction: column;
  }
}

@media only screen and (max-width: 480px) {
  .team-container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
