<template>
    <div class="tabmenu-wrap">
        <div class="tabmenu">
            <!--<h2>내 지도 리스트</h2>-->
            <div class="tabmenu__navi">
                <ul>
                    <li class="tabmenu__navi__button tabmenu__navi--active"><a href="">지도</a></li>
                    <li class="tabmenu__navi__button"><a href="">이미지</a></li>
                </ul>
            </div>
            <div class="tabmenu__view tabmenu__view--map">
                <button class="tabmenu__view__button__edit">Edit</button>
                <dl>
                    <dt>나의 단골 커피집</dt>
                    <dd><input id="tabmenu__view--chk1" type="checkbox"> <label for="tabmenu__view--chk1">수수커피</label></dd>
                    <dd><input id="tabmenu__view--chk2" type="checkbox"> <label for="tabmenu__view--chk2">스타벅스 가로수길점</label></dd>
                    <dd><input id="tabmenu__view--chk3" type="checkbox"> <label for="tabmenu__view--chk3">라맘마</label></dd>
                </dl>

                <dl>
                    <dt>신사동 인쇄</dt>
                    <dd><input id="tabmenu__view--chk4" type="checkbox"> <label for="tabmenu__view--chk4">알파문구</label></dd>
                    <dd><input id="tabmenu__view--chk5" type="checkbox"> <label for="tabmenu__view--chk5">인쇄소</label></dd>
                    <dd><input id="tabmenu__view--chk6" type="checkbox"> <label for="tabmenu__view--chk6">testtest test테스트테스트</label></dd>
                </dl>

                <dl>
                    <dt>압구 맛집</dt>
                    <dd><input id="tabmenu__view--chk7" type="checkbox"> <label for="tabmenu__view--chk4">밥밥</label></dd>
                    <dd><input id="tabmenu__view--chk8" type="checkbox"> <label for="tabmenu__view--chk5">한성돈까스</label></dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tab-menu',
  data (){
      return {

      }
  },
  methods: {

  }
}
</script>
