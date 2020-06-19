<template>
  <div class="qualPromBox">
    <div
      class="promBox"
      v-for="(promise, index) in promises"
      v-bind:key="promise"
    >
      <h3 class="promise">
        {{ promise }}
      </h3>
      <div class="verticalLine" v-if="index < promises.length - 1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Qualitypromise",
  data: function () {
    return {
      promises: [
        "24 h Erreichbarkeit",
        "Blended Learning",
        "Präsenz und Remote",
        "1A Stimmung",
        "Häppchen-Platten",
        "Samba si - Arbeit no",
      ],
    };
  },
};
</script>

<style>
.qualPromBox {
  background-color: #53555a;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.verticalLine {
  width: 2px;
  height: 30%;
  background-color: white;
}

.promBox {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.promise {
  padding: 0px 10px;
  color: white;
  text-transform: uppercase;
}
</style>
