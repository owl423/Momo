<template>
    <div class="indicator">
        <a href role="button"
        v-for="(item, index) in slide_item" 
        @click.prevent="indicatorIndex(index)"
        :class="['indicator-link', {'selected' : index === slide_index}]"
        @keydown.left="prevSlide"
        @keydown.right="nextSlide"
        ref="indicator_link"
        >
            <img
            class="small-img"
            :src="item.url"
            alt=""
            >
        </a>
    </div>
</template>

<script>
export default {
    name: 'indicator',
    props: ['slide_item', 'slide_index'],
    data(){
        return {
        }
    },
    updated(){
        // console.log(this.$refs.img);
        // let unit_scroll = this.$refs.indicator.getClientRects()[0].width / 5;
        // let scroll = this.slide_index * unit_scroll;
        if(this.slide_index !== 0)
            this.$refs.indicator_link[this.slide_index-1].scrollIntoView();
        if(this.slide_index < this.slide_item.length-1){
            this.$refs.indicator_link[this.slide_index+1].scrollIntoView();
        }
    },
    methods: {
        indicatorIndex(index){
            this.$emit('indicatorIndex', index);
        },
        prevSlide(){
            if(this.slide_index > 0){
                this.indicatorIndex(this.slide_index-1);
            }
        },
        nextSlide(){
            if(this.slide_index < this.slide_item.length -1 ){
                this.indicatorIndex(this.slide_index+1);
            }
        }
    }
}
</script>

<style lang="sass">

.indicator
    height: 20vh
    width: 100%
    display: flex
    overflow: scroll

.indicator-link
    position: relative
    boxsizing: border-box
    width: 13%
    flex: 0 0 13%
    margin: 0 5px

.small-img
    position: absolute
    object-fit: cover
    width: 100%
    height: 100%
.selected
    border: 2px solid #fff 
</style>