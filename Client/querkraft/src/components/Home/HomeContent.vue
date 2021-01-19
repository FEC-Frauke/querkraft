<template>
  <div id="content-box">
    <div id="top">
      <hr />
      <h3>Viel mehr als ein paar gute Tipps</h3>
      <hr />
    </div>
    <h1 class="main-headline">
      Es gibt tausend gute Gründe mit uns zu arbeiten
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse in,
      sunt velit enim natus doloribus autem laboriosam voluptates animi
      similique iste rerum nulla dolor? Nam tenetur commodi corporis sed! Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Sed quae temporibus ex
      repudiandae inventore sequi corporis odio aperiam voluptatem optio
      deleniti culpa eos id iure, placeat harum, quibusdam impedit debitis.
    </p>
    <router-link to="/querkraft">mehr über Querkraft »</router-link>
    <h2>Maßgeschneiderte Lösungen für</h2>
    <div id="panelcontainer">
      <div class="panel">
        <div class="imageplaceholder"></div>
        <div class="imagecaption"><h4>Teams</h4></div>
      </div>
      <div class="panel">
        <div class="imageplaceholder"></div>
        <div class="imagecaption"><h4>Organisationen</h4></div>
      </div>
      <div class="panel">
        <div class="imageplaceholder"></div>
        <div class="imagecaption"><h4>Einzelpersonen</h4></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style scoped>
#content-box {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  margin-top: 40px;
}

#top {
  margin: 30px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#panelcontainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
}

.main-headline {
  margin: 0 95px;
}

.panel {
  width: 25%;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.imageplaceholder {
  height: 70%;
  width: 100%;
  background-color: antiquewhite;
}

.imagecaption {
  background-color: white;
}

hr {
  height: 1px;
  width: 20%;
  background-color: #53555a;
  border-width: 0px;
  margin: 0em;
}

h1 {
  font-family: "Roboto";
  font-size: 3em;
  font-weight: 900;
}

h2 {
  font-size: 1em;
}

h3 {
  font-family: "PT Serif";
  font-style: italic;
  color: #53555a;
  font-weight: lighter;
  margin: 0px 20px;
}

h4 {
  font-weight: lighter;
}

p {
  font-family: "Roboto";
  margin: 20px 30px;
  text-align: center;
  font-weight: 400;
  color: #53555a;
}

a {
  font-family: "PT Serif";
  font-style: italic;
  font-size: 1em;
  color: #fe4438;
  margin-bottom: 40px;
}

@media only screen and (max-width: 768px) {
  hr {
    margin: 20px;
  }

  h2 {
    font-size: 1.5em;
    margin: 30px;
  }

  h4 {
    font-size: 1.5em;
  }

  #panelcontainer {
    flex-direction: column;
    align-items: center;
  }

  .panel {
    width: 90%;
    height: 50vh;
    margin-bottom: 20px;
  }

  .main-headline {
    font-size: 2.5em;
    margin: 0 20px;
  }
}
</style>
