<template>
  <div
    id="mainslider"
    @mouseover="slideHover = true"
    @mouseleave="slideHover = false"
  >
    <img
      class="arrow"
      id="leftarrow"
      v-on:click="previousSlide"
      src="../../assets/arrow_slider_left.svg"
      alt="arrow_slider_left"
    />
    <img
      class="arrow"
      id="rightarrow"
      v-on:click="nextSlide"
      src="../../assets/arrow_slider_right.svg"
      alt="larrow_slider_right"
    />
    <div class="indexContainer">
      <div
        class="indexCircle"
        v-for="(slide, index) in slides"
        :key="slide.imgpath"
        :id="'indexCircle' + index"
        v-on:click="switchSlide(sliderIndex, index)"
        v-bind:class="{ indexActive: index == sliderIndex }"
      ></div>
    </div>
    <div class="slides">
      <div
        class="container"
        v-for="(slide, index) in slides"
        :key="slide.imgpath"
      >
        <img
          class="slide"
          :src="require('@/assets/' + slide.imgpath + '')"
          alt="1"
        />
        <div class="captionButtonContainer">
          <h1
            class="slideCaption"
            :id="'slideCaption' + index"
            v-html="slide.caption"
          >
            {{ slide.caption }}
          </h1>
          <router-link
            to="/querkraft"
            class="slideButton"
            :id="'slideButton' + index"
          >
            Jetzt entdecken</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  slideAnimationTimeline,
  isSliderAnimationRunning,
} from "../../js/animation";
import * as Hammer from "hammerjs";

export default {
  name: "MainImageSlider",
  data() {
    return {
      slides: [
        { imgpath: "mosh-pit.jpg", caption: "So geht <br>Coaching<br> heute" },
        { imgpath: "landscape.jpeg", caption: "Genieße<br>die Aussicht" },
        { imgpath: "citron.jpg", caption: "Samba si<br>Arbeit no" },
      ],
      sliderIndex: 0,
      slideHover: false,
      timeOutMethod: null,
    };
  },
  methods: {
    initializePanOnSlider: function () {
      let slider = document.getElementById("mainslider");
      let hammer = new Hammer(slider);
      hammer.on("swipeleft", this.nextSlide);
      hammer.on("swiperight", this.previousSlide);
    },

    switchSlide: function (currentSlideIndex, nextSlideIndex) {
      if (currentSlideIndex != nextSlideIndex) {
        if (isSliderAnimationRunning() == false) {
          this.sliderIndex = nextSlideIndex;

          if (this.timeOutMethod != null) {
            clearTimeout(this.timeOutMethod);
            this.timeOutMethod = null;
          }

          slideAnimationTimeline(currentSlideIndex, nextSlideIndex);
          this.timeOutMethod = setTimeout(this.autoplay, 5000);
          console.log("Current Slide: " + currentSlideIndex);
          console.log("Next Slide: " + nextSlideIndex);
        }
      }
    },

    nextSlide: function () {
      if (isSliderAnimationRunning() == false) {
        let currentSlide = this.sliderIndex;
        this.sliderIndex++;
        if (this.sliderIndex > this.slides.length - 1) {
          this.sliderIndex = 0;
        }

        this.switchSlide(currentSlide, this.sliderIndex);
      }
    },

    previousSlide: function () {
      if (isSliderAnimationRunning() == false) {
        let currentSlide = this.sliderIndex;
        this.sliderIndex--;
        if (this.sliderIndex < 0) {
          this.sliderIndex = this.slides.length - 1;
        }

        this.switchSlide(currentSlide, this.sliderIndex);
      }
    },

    autoplay: function () {
      if (!this.slideHover) {
        this.nextSlide();
      }
      console.log("Geht in autoplay");
      this.timeOutMethod = setTimeout(this.autoplay, 5000);
    },
  },

  mounted() {
    this.initializePanOnSlider();
    this.timeOutMethod = setTimeout(this.autoplay, 5000);
    console.log("Geht in mounted");
  },

  beforeDestroy() {
    console.log("Geht in beforeDestroy");
    if (this.timeOutMethod != null) {
      clearTimeout(this.timeOutMethod);
      this.timeOutMethod = null;
    }
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 100%;
  width: 100%;
}

.slideCaption {
  font-size: 3em;
  color: white;
  text-align: left;
}

.slideButton {
  color: white;
  font-size: 1em;
  border: 1px white solid;
  border-radius: 2px;
  padding: 2px 10px;
}

.slides {
  display: flex;
  width: 300%;
  height: 100%;
}

.slide {
  /* transform: translateX(-100%);
  opacity:0; */
  user-select: none;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.arrow {
  border-radius: 2px;
  user-select: none;
  cursor: pointer;
  margin: 0;
  padding: 0 5px;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 10px;
  height: auto;
  fill: white;
  filter: drop-shadow(2px 2px 1px #000000e1);
}

.arrow:hover {
  color: #fe4438;
}

.indexContainer {
  display: flex;
  align-items: center;
  z-index: 1;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
}

.indexCircle {
  margin-right: 10px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  transition: transform 0.2s;
}

.indexCircle:hover {
  transform: scale(1.2);
}

.indexActive {
  background-color: #fe4438;
}

.captionButtonContainer {
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translate(0, -50%);
}

#leftarrow {
  left: 10px;
}

#rightarrow {
  right: 10px;
}

#mainslider {
  user-select: none;
  position: relative;
  align-items: center;
  height: 400px;
  overflow: hidden;
}

#placeholder {
  width: 100%;
  height: 200px;
  font-size: 3em;
  color: white;
}

@media only screen and (max-width: 768px) {
  .captionButtonContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slideCaption {
    font-size: 2.5em;
  }
  .arrow {
    display: none;
  }
}
</style>
