import axios from "axios";
import router from "../../router";

const baseDomain = "http://localhost:5000";
const userAccountPATH = "/api/usermanagment/";
const path = `${baseDomain}${userAccountPATH}`;

const state = {
  currentUser: null,
  error: "",
};

const getters = {
  currentUser: (state) => state.currentUser,
  error: (state) => state.error,
};

const actions = {
  async createUser({ context }, user) {
    try {
      console.log(context);

      console.log(`USER _____>>>>>>: ${JSON.stringify(user)}`);
      const success = await axios.post(path, user);
      return success;
    } catch (error) {
      console.log(error);
    }
  },
  async getUser({ commit }, email) {
    commit("removeError");
    try {
      const response = await axios.get(`${path}/${email}`);
      console.log(response);

      commit("setUser", response.data);
      if (this.currentUser !== null) {
        router.push("/myquerkraft");
      }
    } catch (error) {
      console.log(`Gecatcht im Useraccount ->   ${error}`);
      this.dispatch("setCurrentError", error);
    }
  },

  removeCurrentUser({ commit }) {
    router.push("/home").catch((error) => {
      console.log(error);
    });
    commit("removeCurrentUser");
  },

  setCurrentError({ commit }, error) {
    commit("setError", error.response.status);
    setTimeout(() => {
      commit("removeError");
    }, 3000);
  },
};

const mutations = {
  setUser: (state, user) => (state.currentUser = user),
  removeCurrentUser: (state) => (state.currentUser = null),
  setError: (state, error) => (state.error = error),
  removeError: (state) => (state.error = ""),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
