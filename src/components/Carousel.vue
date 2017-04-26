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
      <button class="carousel__button__close button__modal__close" @click="$emit('closeCarousel')"> X </button>
    </div>
</template>

<script>
import Indicator from './Carousel-Indicator.vue';
import ButtonSet from './Carousel-button.vue';
import Slide from './Carousel-slide.vue';
import {mapGetters} from 'vuex';
export default {
  name: 'carousel',
  computed : {
    ...mapGetters([
      'emoi_image_url',
      'soosoocoffee_image_url',
      'jjoo_image_url',
      'current_pin',
      'all_images'
    ])
  },
  mounted(){
    this.imageBind();
  },
  updated(){
    this.imageBind();
  },
  data () {
    return {
      slide_index: 0,
      slide_item : [
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
    },
    imageBind(){
      if(this.all_images.length !== 0){
        this.slide_item = this.all_images;
      }else{
        if(this.current_pin.pin_name === '쮸즈'){
            this.slide_item = this.jjoo_image_url;
        }else if(this.current_pin.pin_name === '에머이'){
            this.slide_item = this.emoi_image_url;
        }else if(this.current_pin.pin_name === '수수커피'){
            this.slide_item = this.soosoocoffee_image_url;
        }else{
            this.slide_item = '';
        }
      }
    },
  }
}
</script>

<style lang="sass">

body
  margin: 0
  padding: 0 
.carousel
  width: 100%
  height: 100vh
  // overflow: hidden
  position: absolute
  top: 0
  z-index: 99999
  background: #181818
  &__button__modal__close
    position: absolute
    right: 0
    top: 0
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