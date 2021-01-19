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
      ],
    };
  },
};
</script>

<style>
.qualPromBox {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 60px;
  z-index: 3;
  background-color:white;
}

.promBox {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.promise {
  padding: 0px 10px;
  font-size: 14px !important;
  color: #53555a !important;
}

@media only screen and (max-width: 768px) {
  .qualPromBox {
    display: none;
  }
}
</style>
