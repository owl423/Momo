<template>
    <div class="sidemenu-wrap">
        <div class="sidemenu">
            <button class="sidemenu__button button__panel__close" 
                    @click="setSideState(false)">
            </button>
            <div class="pin-info">
                <div class="pin-info__bg" :style="{fontSize: 20 +'px', backgroundImage : `url(${img_src_cover})`}"></div>
                <div class="pin-info__header">
                    <h1 class="pin-info__header__title">{{current_pin.pin_name}}</h1>
                    <p>
                        <span class="pin-info__header__category">{{label_name}}</span>

                        <span class="pin-info__header__mapinfo">
                            <em class="map_name">{{current_pin_map_name}}</em>
                            <em class="map_desc">{{current_pin_map_desc}}</em>
                        </span> 
                    </p>
                    <button
                    class="post-register"
                    @click="setModalPinRegisterState(true)"> Pin </button>
                </div>

                <div class="pin-info__view">
                    <ul class="pin-info__view__core">
                        <li><strong>주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소</strong>
                            {{current_pin.place.address}}
                        </li>
                        <li>
                            <strong>등록날짜</strong>
                            {{current_pin.created_date}}
                        </li>
                    </ul>
                    <div class="pin-info__view__review">
                        <div class="pin-info__view__review__photo">
                            <strong>사진</strong>
                            <button type="button" @click="setModalImageRegisterState(true)">사진관리</button>
                            <a class="pin-info__view__review__photo__view"
                                title="전체 사진 슬라이드로 보기" 
                                @click="setCarouselState(true)">
                                <img :src="img_src" alt="">
                            </a>
                        </div>
                        <div class="pin-info__view__review__comment">
                            <strong>코멘트</strong>
                            <button type="button" @click="setModalCommentRegisterState(true)">코멘트 관리</button>
                            <a v-if="current_pin.post_list.length !== 0" href="" class="pin-info__view__review__comment__view">
                                전체 코멘트보기
                            </a>                                             

                            <ul class="pin-info__view__review__comment__list">
                                <li v-if="index < 4" v-for="(pin, index) in current_pin.post_list">
                                    {{ pin.description }}
                                    <!--
                                    <a href="">{{current_pin.post_list.description}}</a>
                                    -->
                                </li>
                                <li class="no-list" v-if="current_pin.post_list.length === 0">
                                    등록된 코멘트가 없습니다.
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapMutations} from 'vuex';
export default {
  name: 'side-menu',
  data(){
      return {
          label_name : '',
          img_src_cover: '',
          img_src: '',
      }
  },
  mounted(){
    this.labelNameUpdate(+this.current_pin.pin_label);
    this.imageSrcBind();
  },
  updated(){
    this.labelNameUpdate(+this.current_pin.pin_label);
    this.imageSrcBind();
  },
  computed: {
      ...mapGetters([ // usermap.js의 getters 안에있는 함수들을 불러오는 곳
          'is_side_state',
          'current_pin',
          'soosoocoffee_image_url',
          'emoi_image_url',
          'jjoo_image_url',
          'current_pin_map_desc',
          'current_pin_map_name'
      ])
  },
  methods: {
    ...mapMutations([
        'setSideState',
        'setModalPinRegisterState',
        'setModalImageRegisterState',
        'setModalCommentRegisterState',
        'setCarouselState',
    ]),
    imageSrcBind(){
        if(this.current_pin.pin_name === '쮸즈'){
            this.img_src_cover = this.jjoo_image_url[0];
            this.img_src = this.jjoo_image_url[1];
        }else if(this.current_pin.pin_name === '에머이'){
            this.img_src_cover = this.emoi_image_url[0];
            this.img_src = this.emoi_image_url[1];
        }else if(this.current_pin.pin_name === '수수커피'){
            this.img_src_cover = this.soosoocoffee_image_url[2];
            this.img_src = this.soosoocoffee_image_url[5];
        }else{
            this.img_src_cover = './src/assets/no_thumb.png';
            this.img_src = './src/assets/no_thumb.png';
        }
    },
    labelNameUpdate(pin_label){
        switch(pin_label){
            case 0: 
                this.label_name = "장소";
            break;
            case 1: 
                this.label_name = "음식";
            break;
            case 2: 
                this.label_name = "카페";
            break;
            case 3: 
                this.label_name = "쇼핑";
            break;
            case 4:
                this.label_name = "기타";
            break;
      }
    }
  },
}
</script>
