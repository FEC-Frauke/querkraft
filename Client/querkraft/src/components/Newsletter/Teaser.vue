<template>
  <div id="newsletterbox">
    <div class="main-container">
      <div id="teaserbox">
        <div class="textbox">
          <h1 id="whiteheadline">Hol die Querkraft ins Postfach!</h1>
          <p id="whitetext">
            Nie mehr Neuigkeiten verpassen und vor allen <br/>Anderen wissen,
            wo der Frosch die Locken hat.
          </p>
        </div>
        <a href="" id="newsletterbutton">Abonniere unseren Newsletter</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teaser",
};
</script>

<style>
#newsletterbox {
  background-color: #ff4438;
}

#teaserbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#whiteheadline {
  font-family: "PT Serif";
  font-style: italic;
  color: white;
  font-weight: lighter;
  margin: 0;
  margin-bottom: 10px;
  margin-top: -5px;
  padding: 0;
  line-height: 1;
}

#whitetext {
  color: white;
  font-weight: lighter;
  text-align: left;
  margin: 0;
  padding: 0;
}

#newsletterbutton {
  font-size: 1em;
  height: 1.5em;
  color: white;
  border: 1px white solid;
  padding: 3px 20px 0px;
  border-radius: 2px;
}

.textbox {
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
}

@media only screen and (max-width: 768px) {
  #whiteheadline {
    font-size: 2.5em;
    text-align: left;
    margin: 20px 40px;
  }

  #teaserbox {
    flex-direction: column;
  }

  #newsletterbutton {
    margin-bottom: 20px;
  }

  #whitetext {
    text-align: left;
    font-size: 1.5em;
    margin: 20px 40px;
  }

  #whitetext br {
      display: none;
  }

  #newsletterbutton {
    font-size: 1.2em;
    margin-bottom: 40px;
  }

}
</style>
