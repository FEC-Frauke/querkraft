<template>
<div id="sticky">
  <header class="header">
    <logo />
    <navbar />
    <!-- <userarea /> -->
  </header>
  </div>
</template>

<script>
import Logo from "../Logo/Logo.vue";
import Navbar from "../NavBar/Navbar.vue";
//import Userarea from "../Userarea/Userarea.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Navbar,
    //Userarea,
  },
};
</script>

<style scoped>
.box {
  flex: 1;
  display: flex;
}

/* .box:first-child > div {
  margin-right: auto;
}

.box:last-child > div {
  margin-left: auto;
} */

.header {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white ;
  padding: 10px 10px;
}

#sticky {
  position: sticky;
  top:0;
  z-index: 2;
}

#logo {
  justify-content: flex-start;
}

#navbar {
  justify-content: flex-end;
}

#userarea {
  justify-content: flex-end;
  padding-right: 2em;
}

@media only screen and (max-width: 768px) {
.header {
  height: 8vh;
  padding: 0;
}

}


</style>
