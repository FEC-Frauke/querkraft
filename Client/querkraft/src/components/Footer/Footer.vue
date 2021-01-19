<template>
  <div id="footer">
    <div class="main-container">
      <div id="footer-top">
        <img
          src="../../assets/querkraftlogo.svg"
          alt="querkraftlogo"
          id="querkraftlogo"
        />
      </div>
      <div id="footer-box">
        <div class="footer-content">
          Coaching Training UG <br />
          Inh. Monika Knauer-Walter, <br />
          Klemens Walter
        </div>
        <div class="footer-content">
          Fisimatentenallee 23 <br />
          43566 Liebernich
        </div>
        <div class="footer-content">
          info@querkraft.one <br />
          +49 (0) 2828 9019280
        </div>
        <div class="footer-content">
          FAQ <br />
          Impressum <br />
          Kontakt
        </div>
        <div id="icons">
          <img
            src="../../assets/xing.png"
            alt="xing"
            class="footer-icons"
            id="xinglogo"
          />
          <img
            src="../../assets/linkedin.png"
            alt="linkedin"
            class="footer-icons"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
#footer {
  background-color: #bebebe;
  padding-top: 40px;
  padding-bottom: 200px;
}

#footer-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#icons {
  display: flex;
  flex-direction: row;
}

#footer-top {
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  margin-left: -2px;
}

#querkraftlogo {
  width: 5em;
}

#xinglogo {
  margin-right: 20px;
}

.footer-content {
  text-align: left;
}

.footer-icons {
  width: 2.5em;
  height: 2.5em;
}

@media only screen and (max-width: 768px) {
  #footer-box {
    flex-direction: column;
    margin: 20px 20px;
  }

  #querkraftlogo {
    width: 7em;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  #footer-top {
    display: block;
    text-align: start;
    margin: 0px 20px;
  }

  #icons {
    margin: 20px 20px;
  }

  .footer-content {
    font-size: 1.2em;
    margin-bottom: 20px;
    margin-left: 10px;
  }
}
</style>
