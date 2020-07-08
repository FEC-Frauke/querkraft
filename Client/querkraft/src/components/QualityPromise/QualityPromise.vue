<template>
  <div class="qualPromBox">
    <div
      class="promBox"
      v-for="(promise, index) in promises"
      v-bind:key="promise"
    >
      <h3 class="promise lean-grey">
        {{ promise }}
      </h3>
      <div class="vertical-line" v-if="index < promises.length - 1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Qualitypromise",
  data: function () {
    return {
      promises: [
        "Blended Learning",
        "Masters of competence",
        "Kernkraft-Befürworter",
        "Company of the year 2022",
        "1A Stimmung",
        "Häppchen-Platten",
      ],
    };
  },
};
</script>

<style>
.qualPromBox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 60px;
}

.promBox {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.promise {
  padding: 0px 10px;
  text-transform: uppercase;
}
</style>
