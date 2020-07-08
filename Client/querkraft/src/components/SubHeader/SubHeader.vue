<template>
  <div class="subheader-container">
    <div class="subheader-main">
      <div class="sub-headline">
        <div class="lean-grey">Coaching</div>
        <div class="vertical-line"></div>
        <div class="lean-grey">Training</div>
        <div class="vertical-line"></div>
        <div class="lean-grey">Mediation</div>
      </div>
      <div class="lean-grey" id="contact">+49 (0)2828 9019280</div>
    </div>
    <div class="subheader-login">
      <div class="login-button">Einloggen</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
};
</script>

<style>
.subheader-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: black;
  margin-top: 20px;
}

.subheader-main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 7;
  letter-spacing: 0.32px;
}
.sub-headline {
  height: 100%;
  width: 30%;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.sub-headline > * {
  margin-right: 10px;
}

.subheader-login {
  flex-grow: 1;
}

.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fe4438;
  font-family: "PT Serif", serif;
  font-style: italic;
  font-weight: 700;
  font-size: 21px;
  /* line-height: 27px;
  letter-spacing: 0.375px; */
  color: #ffffff;
}

#left {
  margin-left: 20px;
}

#contact {
  margin-right: 20px;
}
</style>
