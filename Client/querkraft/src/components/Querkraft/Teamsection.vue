<template>
  <div class="personContainer">
      <img :src="require('@/assets/' + imgname + '')" alt="">
      <h2><span id="forename">{{forename}} </span><br>{{surname}}</h2>
      <hr>
      <ul>
          <li v-for="expertise in expertises" :key="expertise">{{expertise}}</li>
      </ul>
      <div class="sm-container">
          <a v-for="sm in socialMedia" :key="sm.link" :href="sm.link" target="_blank"><img id="social-media-icon" :src="require('@/assets/' + sm.icon + '')" alt=""></a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Teamsection',
    props: {
        imgname: String,
        forename: String,
        surname: String,
        expertises: Array,
        socialMedia: Array
    }
}
</script>

<style scoped>

.personContainer {
position: relative;
padding-bottom: 100px;
}

.sm-container {
    position: absolute;
    left:0;
    right:0;
    bottom:10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
}

#social-media-icon {
    width: 50px;
    height: auto;
    margin: 0px 10px;
}
hr {
    height: 1px;
    width: 100%;
    border-width: 0;
    color:#53555A;
    background-color: #53555A;
    margin-bottom: 20px;
}

ul {
    list-style: none;
    margin: 0px;
    padding:0px 40px;
    
}
    img {
  width: 250px;
  max-width: 250px;
  height: auto;
}

li {
    margin-bottom: 20px;
}

h2 {
    font-size: 2em;
    text-transform: uppercase;
    color: #53555A;
}

#forename {
    font-weight: lighter;
}
</style>