<template>
    <div class="sidemenu-wrap">
        <div class="sidemenu">
            <button class="sidemenu__button" @click="$emit('sideClose')"> < </button>
            <div class="pin-info">
                <div class="pin-info__bg"></div>
                <div class="pin-info__header">
                    <h1 class="pin-info__header--title">수수커피</h1>
                    <p>
                        <span class="pin-info__header--category">카페</span>
                        <span class="pin-info__header--nick">'내가 젤 조아하는 티라미슈 맛집'</span>
                    </p>
                    <button
                    class="post-register"
                    @click="$emit('pinRegister')"> Pin </button>
                </div>

                <div class="pin-info__view">
                    <ul class="pin-info__view--core">
                        <li>주소 : 서울시 강남구 신사동 블라블라~</li>
                        <li>번호 : 010-2345-1123 </li>
                    </ul>
                    <div class="pin-info__view--review">
                        <div class="pin-info__view--review--photo">
                            <strong>사진</strong>
                            <button type="button">사진관리</button>
                            
                            <a class="pin-info__view--review__photo--view"
                                title="전체 사진 슬라이드로 보기">
                                대표사진
                            </a>
                        </div>
                        <div class="pin-info__view--review__comment">
                            <strong>코멘트</strong>
                            <button type="button">코멘트 관리</button>
                            <a class="pin-info__view--review__comment--view" href="">
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
export default {
  name: 'side-menu',
  props: ['is_modal'],
  data (){
      return {

      }
  },
  methods: {

  }
}
</script>
