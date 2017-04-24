<template>
    <div class="sidemenu-wrap">
        <div class="sidemenu">
            <button class="sidemenu__button button__panel__close" 
                    @click="setSideState(false)">
            </button>
            <div class="pin-info">
                <div class="pin-info__bg"></div>
                <div class="pin-info__header">
                    <h1 class="pin-info__header__title">{{current_pin.pin_name}}</h1>
                    <p>
                        <span class="pin-info__header__category">{{label_name}}</span>
                        <span class="pin-info__header__nick">
                            
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
                                대표사진
                            </a>
                        </div>
                        <div class="pin-info__view__review__comment">
                            <strong>코멘트</strong>
                            <button type="button" @click="setModalCommentRegisterState(true)">코멘트 관리</button>
                            <a href="" class="pin-info__view__review__comment__view" href="">
                                전체 코멘트보기
                            </a>                                             

                            <ul class="pin-info__view__review__comment__list">
                                <li v-if="index < 4" v-for="(desc, index) in current_pin.post_list">
                                    {{ desc.description }}
                                    <!--
                                    <a href="">{{current_pin.post_list.description}}</a>
                                    -->
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
          label_name : ''
      }
  },
  mounted(){
    console.log(this.current_pin.pin_label)
    switch(+this.current_pin.pin_label){
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
  },
  computed: {
      ...mapGetters([
          'is_side_state',
          'current_pin'
      ])
  },
  methods: {
    ...mapMutations([
        'setSideState',
        'setModalPinRegisterState',
        'setModalImageRegisterState',
        'setModalCommentRegisterState',
        'setCarouselState',
    ])
  },
}
</script>
