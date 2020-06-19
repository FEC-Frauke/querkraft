<template>
  <div id="app">
    <Header />
    <QualityPromise />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import QualityPromise from "./components/QualityPromise/QualityPromise.vue";
require("focus-visible");
export default {
  name: "App",
  components: {
    Header,
    QualityPromise,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@1,700&family=Roboto:wght@300;700;900&display=swap");

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
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  color: #53555a;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #fe4438;
}

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
</style>
