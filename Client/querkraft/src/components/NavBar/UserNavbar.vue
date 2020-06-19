<template>
  <div class="box">
    <div id="nav">
      <router-link to="/myquerkraft/ueberblick">überblick</router-link>
      <router-link to="/kurse">kurse</router-link>
      <router-link to="/nachrichten">nachrichten</router-link>
      <router-link to="/einstellungen">einstellungen</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNavbar",
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
