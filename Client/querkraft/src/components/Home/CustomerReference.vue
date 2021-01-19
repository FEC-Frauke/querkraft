<template>
  <div id="customer-reference-box">
    <div id="headline">
      <hr />
      <h3>Wir danken fürs Vertrauen &#x1F618;</h3>
      <hr />
    </div>
    <div id="customers">
      <img src="../../assets/hrm1.png" alt="Human Resources Manager" />
      <img src="../../assets/rfo.png" alt="RFO" />
      <img src="../../assets/sbroker.png" alt="S-Broker" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerReference",
};
</script>

<style scoped>
#customer-reference-box {
  margin-top: 20px;
}

#headline {
  margin: 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

#customers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

hr {
  height: 1px;
  width: 25%;
  background-color: #53555a;
  border-width: 0px;
  margin: 0em;
}

h3 {
  margin: 0px 20px;
  font-size: 1.5rem;
}

img {
  width: 25%;
}

@media only screen and (max-width: 768px) {
  #customers {
    flex-direction: column;
  }

  img {
    width: 50%;
    margin-bottom: 20px;
  }

  hr {
    display: none;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
}
</style>
