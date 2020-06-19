<template>
  <div class="form">
    <div>
      <label class="label" for="firstname">Vorname</label>
      <input
        class="inputText"
        id="firstname"
        type="text"
        v-model="$v.firstname.$model"
      />
      <p
        v-bind:class="{ resolved: filledFirstname, rejected: !filledFirstname }"
      >
        Erforderlich
      </p>
    </div>
    <div>
      <label class="label" for="lastname">Nachname</label>
      <input
        class="inputText"
        id="lastname"
        type="text"
        v-model="$v.lastname.$model"
      />
      <p v-bind:class="{ resolved: filledLastname, rejected: !filledLastname }">
        Erforderlich
      </p>
    </div>
    <div>
      <label class="label" for="email">E-Mail Adresse</label>
      <input
        class="inputText"
        id="email"
        type="text"
        v-model="$v.email.$model"
      />
      <p v-bind:class="{ resolved: filledEmail, rejected: !filledEmail }">
        Erforderlich
      </p>
    </div>
    <div>
      <label class="label" for="password">Passwort</label>
      <input
        class="inputText"
        id="password"
        type="password"
        v-model="$v.password.$model"
      />
      <p v-bind:class="{ resolved: filledPassword, rejected: !filledPassword }">
        Erforderlich
      </p>
      <span>Das Passwort muss </span>
      <span
        v-bind:class="{
          resolved: passwordContainsNumsAndLetter,
          rejected: !passwordContainsNumsAndLetter,
        }"
        >Buchstaben und Zahlen</span
      >
      <span> enthalten und </span>
      <span
        v-bind:class="{
          resolved: passwordMinLength,
          rejected: !passwordMinLength,
        }"
      >
        mindestens 8 Zeichen</span
      >
      <span> lang sein</span>
    </div>
    <button class="btn" id="regBtn" v-on:click="registerUser">
      Registrieren
    </button>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  helpers,
} from "vuelidate/lib/validators";

import { mapActions } from "vuex";

const containsNumsAndLetters = helpers.regex(
  "numsAndLetters",
  /^(?=.*[0-9])(?=.*[\u00C0-\u017Fa-zA-Z])([\u00C0-\u017Fa-zA-Z0-9]+)$/
);
export default {
  name: "Registrierung",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      registerComplete: false,
    };
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(100),
    },
    lastname: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(100),
    },
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      containsNumsAndLetters,
    },
  },
  computed: {
    invalid: function () {
      return this.$v.$invalid;
    },
    errors: function () {
      return this.$v.$anyError;
    },
    touched: function () {
      return this.$v.$anyDirty;
    },
    filledFirstname: function () {
      return this.$v.firstname.required;
    },
    filledLastname: function () {
      return this.$v.lastname.required;
    },
    filledEmail: function () {
      return this.$v.email.required;
    },
    filledPassword: function () {
      return this.$v.password.required;
    },
    passwordContainsNumsAndLetter: function () {
      return (
        this.$v.password.required && this.$v.password.containsNumsAndLetters
      );
    },
    passwordMinLength: function () {
      return this.$v.password.required && this.$v.password.minLength;
    },
  },
  methods: {
    ...mapActions(["createUser"]),
    async registerUser() {
      if (!this.invalid && !this.errors && this.touched) {
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        };

        console.log(user);
        try {
          const success = await this.createUser(user);
          console.log(success);
          if (success.status === 201) {
            this.registerComplete = true;
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style>
.form {
  margin-top: 10%;
  display: grid;
  grid-template: 1fr;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.label {
  margin-top: 20px;
}

.inputText {
  width: 100%;
}

.error {
  color: red;
  margin: 10px 10px;
}
.rejected {
  color: red;
}

.resolved {
  color: greenyellow;
}

#regBtn {
  margin-top: 2em;
}
</style>
