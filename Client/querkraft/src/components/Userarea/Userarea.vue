<template>
  <div class="box" id="userarea">
    <div v-if="!isLoggedIn">
      <div class="signInForm">
        <input
          type="email"
          v-model="$v.email.$model"
          placeholder="Email Adresse"
        />
        <input
          type="password"
          v-model="$v.password.$model"
          placeholder="Passwort"
        />
        <button class="btn" v-on:click="signIn">ANMELDEN</button>
      </div>
      <p class="error" v-if="error === 404">Email Adresse nicht bekannt</p>
      <router-link to="/registrierung"
        >Hier gehts zur Registrierung</router-link
      >
    </div>
    <userPanel v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import userPanel from "./UserPanel/UserPanel";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Userarea",
  components: {
    userPanel,
  },
  data() {
    return {
      errors: false,
      touched: false,
      invalid: true,
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  computed: {
    ...mapGetters(["currentUser", "error"]),
    isLoggedIn() {
      return !!this.currentUser;
    },
  },
  methods: {
    ...mapActions(["getUser"]),
    signIn() {
      this.touched = this.$v.$anyDirty;
      this.errors = this.$v.$anyError;
      this.invalid = this.$v.$invalid;

      if (!this.invalid && !this.errors && this.touched) {
        try {
          this.getUser(this.email);
          this.email = "";
          this.password = "";
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style>
.signInForm {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.signInForm > * {
  margin-left: 10px;
  height: 2em;
}
</style>
