<template>
  <div class="home">
    <main-image-slider/>
    <home-content/>
    <customer-reference/>
    <!-- TODO:<template>
      Main Home Content
      Customer Reference
      Newsletter -->
      </div>
</template>

<script>
import MainImageSlider from "../components/Home/MainImageSlider.vue";
import HomeContent from "../components/Home/HomeContent.vue";
import CustomerReference from "../components/Home/CustomerReference.vue"

export default {
  name: "Home",
  components: {
    MainImageSlider,
    HomeContent,
    CustomerReference
  },
};
</script>
