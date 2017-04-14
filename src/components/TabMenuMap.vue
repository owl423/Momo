<template>
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
</template>

<script>
export default {
    name: 'tab-menu-map',
    components: {
    },
    data (){
        return {
        }
    }
}    
</script>