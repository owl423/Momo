<template>
    <div class="tabmenu__view tabmenu__view--image">
        <!--<button class="tabmenu__view__button__edit">Edit</button>-->
        <ul>
            <li v-for="image in all_images">
                <a href="" @click.prevent = "setCarouselState(true)">
                    <img :src="image" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
export default {
    name: 'tab-menu-image',
    computed:{
        ...mapGetters([
            'soosoocoffee_image_url',
            'emoi_image_url',
            'jjoo_image_url',
            'all_images'
        ])
    },
    methods:{
      ...mapMutations([
          'setAllImages',
          'setCarouselState'
      ])  
    },
    mounted(){
        let all_img = this.soosoocoffee_image_url.concat(this.emoi_image_url.concat(this.jjoo_image_url));
        this.setAllImages(all_img);
    },
    destroyed(){
        console.log('쥬금');
        this.setAllImages([]);
    }
}    
</script>