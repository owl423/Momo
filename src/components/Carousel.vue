<template>
    <div class="carousel">
      <div class="carousel-inner">
          <Slide 
          v-for="(item, index) in slide_item" 
          :key="item"
          :item="item"
          v-show="slide_index===index">
          </Slide>
        <ButtonSet @prev="prevSlide" @next="nextSlide"></ButtonSet>
      </div>
      <Indicator :slide_item="slide_item" :slide_index="slide_index" @indicatorIndex="setSlideIndex">
      </Indicator>
    </div>
</template>

<script>
import Indicator from './Carousel-Indicator.vue';
import ButtonSet from './Carousel-button.vue';
import Slide from './Carousel-slide.vue';
export default {
  name: 'carousel',
  data () {
    return {
      slide_index: 0,
      slide_item : [
        { 
          url : 'http://lorempixel.com/300/300/'
        },
        { 
          url : 'http://lorempixel.com/400/300/'
        },
        {
          url : 'http://lorempixel.com/350/350/'
        },
        {
          url : 'http://lorempixel.com/400/400/'
        },
        {
          url : 'http://lorempixel.com/400/350/'
        },
        {
          url : 'http://lorempixel.com/400/500/'
        },
        {
          url : 'http://lorempixel.com/500/500/'
        },
        {
          url : 'http://lorempixel.com/1000/500/'
        },
        {
          url : 'http://lorempixel.com/500/600/'
        },
        {
          url : 'http://lorempixel.com/500/550/'
        },
      ]
    }
  },
  components: {
    Slide,
    ButtonSet,
    Indicator
  },
  methods: {
    prevSlide(){
      if(this.slide_index > 0)
        this.slide_index--;
    },
    nextSlide(){
      if(this.slide_index < this.slide_item.length-1){
        this.slide_index++;
      }
    },
    setSlideIndex(index){
      this.slide_index = index;
    }
  }
}
</script>

<style lang="sass">

body
  margin: 0
  padding: 0 
.carousel
  // overflow: hidden
  background: #181818
.carousel-inner
  position: relative
  width: 100%
  display: flex
.big-img 
  width: auto
  height: 100%
  object-fit: cover

@keyframes carousel-slide-in
    from
        transform: translateX(-2000px)
    
    to
        transform: translateX(0)
        opacity: 1
    


@keyframes carousel-slide-out
    from
        transform: translateX(0%)
    
    to
        transform: translateX(2000px)
        opacity: 0
    

.carousel-slide-enter
    opacity: 0

.carousel-slide-enter-active
    animation: carousel-slide-in 0.5s 


.carousel-slide-leave
    opacity: 1

.carousel-slide-leave-active
    animation: carousel-slide-out 0.5s

</style>