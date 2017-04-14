<template>
    <div class="tabmenu-wrap">
        <div class="tabmenu">
            <!--<h2>내 지도 리스트</h2>-->
            <div class="tabmenu__navi">
                <ul>
                    <li :class="['tabmenu__navi__button', {'tabmenu__navi--active' : seen === 'map'}]"><a href="" @click.prevent="seen='map'">지도</a></li>
                    <li :class="['tabmenu__navi__button', {'tabmenu__navi--active' : seen === 'image'}]"><a href="" @click.prevent="seen='image'">이미지</a></li>
                </ul>
            </div>
            <TabMenuMap v-if="seen === 'map'"></TabMenuMap>
            <TabMenuImage v-if="seen === 'image'"></TabMenuImage>
        </div>
    </div>
</template>

<script>

import TabMenuMap from './TabMenuMap.vue';
import TabMenuImage from './TabMenuImage.vue';
export default {
  name: 'tab-menu',
  components: {
      TabMenuMap,
      TabMenuImage
  },
  data (){
      return {
            seen: 'map'
      }
  },
  methods: {

  }
}
</script>
