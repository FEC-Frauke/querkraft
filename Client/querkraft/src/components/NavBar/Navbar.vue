<template>
  <div class="box">
    <div id="nav">
      <router-link to="/home">HOME</router-link>
      <router-link to="/querkraft">QUERKRAFT</router-link>
      <router-link to="/loesungen">LÖSUNGEN</router-link>
      <router-link to="/kontakt">KONTAKT</router-link>
      <router-link to="/myquerkraft" v-if="!!this.currentUser"
        >myquerkraft</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  margin: 0px 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: #53555a;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fe4438;
}
</style>
