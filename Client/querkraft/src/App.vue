<template>
  <div id="app">
    <div class="main-container">
      <QualityPromise />
      <Header />
      <Subheader />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Subheader from "@/components/SubHeader/SubHeader";
import QualityPromise from "./components/QualityPromise/QualityPromise.vue";
require("focus-visible");
export default {
  name: "App",
  components: {
    Header,
    QualityPromise,
    Subheader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,300;1,700&family=Roboto:wght@300;700;900&display=swap");

body,
html {
  margin: 0;
  padding: 0;
  background-color: white;
}
#app {
  font-family: "Roboto", "PT Serif", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #53555a;
}

a {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #53555a;
  text-decoration: none;
}

#nav a {
  margin: 0px 30px;
  padding-bottom: 10px;
}

a.router-link-exact-active {
  border-bottom: 2px solid #53555a;
}

.main-container {
  width: 90%;
  margin: auto;
}

/* Buttons */

.btn {
  border-radius: 10%;
  font-family: "PT Serif";
  font-size: 1.5em;
  color: #53555a;
  margin: 0px 20px;
}
.btn:active {
  color: #fe4438;
}

.btn:focus:not(.focus-visible) {
  outline: none;
}

/* Optional: Customize .focus-visible */
.focus-visible {
  outline-color: #fe4438;
}

/* Font Styling */

.lean-grey {
  font-size: 18px;
  font-weight: 300;
  color: #b6bbc6;
}

/* additional Styling Elements */

.vertical-line {
  border-left: 1px solid #b6bbc6;
  height: 30%;
}
</style>
