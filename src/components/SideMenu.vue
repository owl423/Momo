<template>
    <div class="sidemenu-wrap">
        <div class="sidemenu">
            <button class="sidemenu__button button__panel__close" 
                    @click="setSideState(false)">
            </button>
            <div class="pin-info">
                <div class="pin-info__bg"></div>
                <div class="pin-info__header">
                    <h1 class="pin-info__header--title">{{current_pin.pin_name}}</h1>
                    <p>
                        <span class="pin-info__header--category">{{label_name}}</span>
                        <!--<span class="pin-info__header--nick">'내가 젤 조아하는 티라미슈 맛집'</span>-->
                    </p>
                    <button
                    class="post-register"
                    @click="setModalPinRegisterState(true)"> Pin </button>
                </div>

                <div class="pin-info__view">
                    <ul class="pin-info__view--core">
                        <li>address : {{current_pin.place.address}}</li>
                        <li>created : {{current_pin.created_date}}</li>
                    </ul>
                    <div class="pin-info__view--review">
                        <div class="pin-info__view--review--photo">
                            <strong>사진</strong>
                            <button type="button" @click="setModalImageRegisterState(true)">사진관리</button>
                            <a class="pin-info__view--review__photo--view"
                            title="전체 사진 슬라이드로 보기" 
                            @click="setCarouselState(true)">
                                대표사진
                            </a>
                        </div>
                        <div class="pin-info__view--review__comment">
                            <strong>코멘트</strong>
                            <button type="button" @click="setModalCommentRegisterState(true)">코멘트 관리</button>
                            <a href="" class="pin-info__view--review__comment--view" href="">
                                전체 코멘트보기
                            </a>                                             

                            <ul class="pin-info__view--review--comment--list">
                                <li><a href="">asdfsdfdsfsfsf  sfetetsetst werw</a></li>
                                <li><a href="">코멘트코멘트트트트 testestetset</a></li>
                                <li><a href="">큐멘으랑릉라ㅣ testestse asdfdfd</a></li>
                                <li><a href="">큐멘으랑릉라ㅣ testestsets erewx </a></li>
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
