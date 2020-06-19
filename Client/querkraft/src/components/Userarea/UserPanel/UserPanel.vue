<template>
  <div class="userPanelBox">
    <h1>{{ `Hallo ${this.currentUser.firstname}` }}</h1>
    <button class="btn" v-on:click="this.removeCurrentUser">LOGOUT</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserPanel",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    ...mapActions(["removeCurrentUser"]),
  },
};
</script>

<style>
.userPanelBox {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
</style>
