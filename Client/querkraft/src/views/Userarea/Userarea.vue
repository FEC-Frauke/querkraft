<template>
  <div class="userarea">
    <UserNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import UserNavbar from "@/components/NavBar/UserNavbar";

export default {
  name: "Querkraft",
  components: {
    UserNavbar,
  },
};
</script>
