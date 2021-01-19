import  anime  from 'animejs';

let currentSliderAnimation = null;

const isSliderAnimationRunning = function () {
  if (currentSliderAnimation != null) {
    return true;
  }
  return false;
}

const slideAnimationTimeline = function (fromIndex, toIndex) {

  if (currentSliderAnimation != null) {
    return;
  }

  const slideValue = '' + toIndex * -100 +'%';

  const captionStart = '#slideCaption' + fromIndex;
  const buttonStart = '#slideButton' + fromIndex;
  const captionTarget = '#slideCaption' + toIndex;
  const buttonTarget = '#slideButton' + toIndex;

  let t1 = anime.timeline();
  currentSliderAnimation = t1;

  t1.add({
    targets:[captionStart,buttonStart],
    translateY: [0,10],
    opacity:[1,0],
    duration:100,
    easing:'linear'
  })

  t1.add({
    targets:'.container',
    translateX: slideValue,
    duration: 500,
    direction: 'normal',
    easing: 'easeOutQuad',
  })

  t1.add({
    targets: captionTarget,
    translateY: [10,0],
    opacity:[0,1],
    duration:100,
    easing:'linear'
  },'-=200')

  t1.add({
    targets: buttonTarget,
    translateY: [10,0],
    opacity:[0,1],
    duration:100,
    easing:'linear'
  },'-=100')

  t1.finished.then(function() {
     currentSliderAnimation = null;
  })
}


export {slideAnimationTimeline, isSliderAnimationRunning}