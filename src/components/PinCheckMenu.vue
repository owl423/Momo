<template>
    <div class="pin-check-menu">
        <h2 class="pin-check-menu--heading"> 이 장소를 저장하시겠습니까? </h2>
        <button class="pin-check-menu--button" @click="$emit('pinOK')">OK</button>
    </div>
</template>

<script>
export default {
    name: 'pin-check-menu',
    data(){
        return {
        };
    },
}
</script>