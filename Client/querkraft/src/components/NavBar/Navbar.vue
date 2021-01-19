<template>
  <div class="box" id="navbar">
    <div
      v-bind:class="{ showMenu: mobileMenuShown, hideMenu: !mobileMenuShown }"
      id="nav"
    >
      <router-link @click.native="toggleMenu" to="/home">Home</router-link>
      <router-link @click.native="toggleMenu" to="/querkraft">Querkraft</router-link>
      <router-link @click.native="toggleMenu" to="/loesungen">Lösungen</router-link>
      <router-link @click.native="toggleMenu" to="/kontakt">Kontakt</router-link>
      <router-link @click.native="toggleMenu" to="/myquerkraft" v-if="!!this.currentUser"
        >myquerkraft</router-link
      >
    </div>
    <div v-on:click="toggleMenu" id="burger">
      <div class="line" id="line1"></div>
      <div class="line" id="line2"></div>
      <div class="line" id="line3"></div>
    </div>
    <div
      class="blurOverlay"
      v-bind:class="{
        showOverlay: mobileMenuShown,
        hideOverlay: !mobileMenuShown,
      }"
      v-on:click="toggleMenu"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      mobileMenuShown: false,
    };
  },

  methods: {
    toggleMenu: function () {
      if (!this.mobileMenuShown) {
        this.mobileMenuShown = true;
      } else {
        this.mobileMenuShown = false;
      }
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style>
#navbar {
  justify-content: end;
}

#burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11px;
  margin-right: 20px;
}

#nav {
  display: flex;
  flex-direction: row;
}

.line {
  background-color: #53555a;
  width: 25px;
  height: 1px;
  border-radius: 1px;
}

.blurOverlay {
  z-index: -2;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130vh;
  backdrop-filter: blur(4px);
  overflow: hidden;
}

@media only screen and (max-width: 768px) {
  #burger {
    display: flex;
  }

  #navbar {
    justify-content: center;
  }
  #nav {
    background-color: white;
    z-index: -1;
    position: absolute;
    flex-direction: column;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 1;
    transition: all 0.3s;
  }

  .showMenu {
    opacity: 1;
    transform: translateY(100%);
  }

  .hideMenu {
    opacity: 0;
    bottom: 0;
  }

  .showOverlay {
    display: block;
  }

  .hideOverlay {
    display: none;
  }

  #nav a {

    font-size: 1.5em;
    margin: 0 0 !important;
    padding-bottom: 10px !important;
  }

  #nav a.router-link-exact-active {
    border: none;
  }
}

/* #nav a {
  margin: 0px 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: #53555a;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fe4438;
} */
</style>
